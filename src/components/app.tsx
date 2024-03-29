import { Component, h, Fragment } from 'preact';
import { IntlProvider, Text, Localizer, translate } from 'preact-i18n';
import { config } from './config';
import { type AppState, Role, isLanguage, Languages, isRole } from './types';

export default class App extends Component<{}, AppState> {
  state: Readonly<AppState> = {
    isGapiLoaded: false,
    tokenClient: null,
    accessToken: null,
    users: '',
    sendNotificationEmail: true,
    role: Role.reader,
    selectedDocument: null,
    selectedDocumentPermissions: null,
    result: null,
    batchLoading: false,
    language: '',
    i18n: {},
  };

  componentDidMount() {
    if (localStorage.getItem('role')) {
      const role = localStorage.getItem('role');
      this.setState({
        users: localStorage.getItem('users') || this.state.users,
        role: isRole(role) ? role : this.state.role,
        sendNotificationEmail: localStorage.getItem('sendNotificationEmail') !== 'false',
      });
    }

    for (const languageString of navigator.languages) {
      const language = languageString.split('-')[0];
      if (isLanguage(language)) {
        this.switchLanguage(language);
        break;
      }
    }

    this.loadExternalScript('https://apis.google.com/js/api.js', () => {
      gapi.load('client:picker', async () => {
        await gapi.client.init({});
        await gapi.client.load('drive', 'v3');
        this.setState({ isGapiLoaded: true });
      });
    });

    this.loadExternalScript('https://accounts.google.com/gsi/client', () => {
      this.setState({
        tokenClient: google.accounts.oauth2.initTokenClient({
          client_id: config.clientId,
          scope: 'https://www.googleapis.com/auth/drive.file',
          prompt: '',
          callback: (tokenResponse) => {
            this.setState({ accessToken: tokenResponse.access_token }, () => this.choose());
          },
        }),
      });
    });
  }

  componentDidUpdate() {
    (['users', 'role', 'sendNotificationEmail'] as const).forEach((key) => {
      localStorage.setItem(key, String(this.state[key]));
    });
  }

  loadExternalScript(src: string, onload: () => void) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = onload;
    document.body.appendChild(script);
  }

  authorizeAndChoose() {
    if (!this.state.tokenClient) {
      return;
    }

    this.state.tokenClient.requestAccessToken();
  }

  choose() {
    if (!this.state.accessToken) {
      return;
    }

    new google.picker.PickerBuilder()
      .enableFeature(google.picker.Feature.SUPPORT_DRIVES)
      .setAppId(config.appId)
      .setOAuthToken(this.state.accessToken)
      .addView(new google.picker.DocsView())
      .addView(new google.picker.DocsView().setEnableDrives(true))
      .setDeveloperKey(config.developerKey)
      .setCallback(async (data) => {
        if (data.action === google.picker.Action.PICKED) {
          const selectedDocument = data.docs[0];
          try {
            const list = await gapi.client.drive.permissions.list({
              fileId: selectedDocument.id,
              supportsAllDrives: true,
              fields: '*',
            });
            this.setState({
              selectedDocument,
              selectedDocumentPermissions: list.result,
              result: null,
            });
          } catch (e: any) {
            alert(e.result.error.message);
            console.error(e);
          }
        }
      })
      .build()
      .setVisible(true);
  }

  batchInvite() {
    if (!this.state.selectedDocument || !this.validatedUsers.isValid) {
      return;
    }

    const message = translate(
      this.state.sendNotificationEmail ? 'batchInvite.confirm.withEmail' : 'batchInvite.confirm.withoutEmail',
      '',
      this.state.i18n,
      {
        count: this.validatedUsers.users.length,
        role: this.state.role,
      },
      undefined,
      `Are you sure you want to invite ${this.validatedUsers.users.length} users as ${this.state.role} ${
        this.state.sendNotificationEmail ? 'with' : 'without'
      } sending notification email?`,
    );

    if (!confirm(message)) {
      return;
    }

    this.setState({ batchLoading: true });

    const batch: gapi.client.Batch<gapi.client.drive.Permission> = gapi.client.newBatch();
    for (const emailAddress of this.validatedUsers.users) {
      batch.add(
        gapi.client.drive.permissions.create({
          fileId: this.state.selectedDocument.id,
          sendNotificationEmail: this.state.sendNotificationEmail,
          supportsAllDrives: true,
          fields: '*',
          resource: {
            role: this.state.role,
            type: 'user',
            emailAddress,
          },
        }),
        // @ts-ignore type definition is wrong
        { id: emailAddress },
      );
    }

    batch.then(({ result }) => {
      this.setState({ result, batchLoading: false });
    });
  }

  async switchLanguage(language: string) {
    if (!isLanguage(language)) {
      return;
    }

    if (language) {
      const i18n = await import(`../i18n/${language}.json`);
      // hack: preact-i18n is bullshit
      i18n.hasOwnProperty = () => true;
      this.setState({ language, i18n });
    } else {
      this.setState({ language, i18n: {} });
    }
  }

  get validatedUsers() {
    const users = this.state.users
      .split('\n')
      .map((user) => user.trim())
      .filter((user) => user);

    if (users.length === 0) {
      return {
        isValid: false as const,
        reason: translate('validation.empty', '', this.state.i18n, {}, undefined, 'Please specify at least one user.'),
      };
    }

    const invalidUser = users.find((user) => !user.includes('@'));

    if (invalidUser) {
      return {
        isValid: false as const,
        reason: translate(
          'validation.invalid',
          '',
          this.state.i18n,
          { invalidUser },
          undefined,
          invalidUser + ' is an invalid email address',
        ),
      };
    } else {
      return { isValid: true as const, users };
    }
  }

  renderLoading() {
    return (
      <div>
        <img src="https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif" />
        <Text id="loading">Loading Google API...</Text>
      </div>
    );
  }

  renderAuthorize() {
    return (
      <button onClick={() => this.authorizeAndChoose()}>
        <Text id="authorizeAndChooseADocument">Authorize and choose a document</Text>
      </button>
    );
  }

  renderChoose() {
    return (
      <button onClick={() => this.choose()}>
        <Text id="chooseADocument">Choose a document</Text>
      </button>
    );
  }

  renderBatchInvite() {
    if (!this.state.selectedDocument || !this.state.selectedDocumentPermissions) {
      return;
    }

    return (
      <>
        {this.renderChoose()}

        <div class="selected-document">
          <h2>
            <img src={this.state.selectedDocument.iconUrl} />
            <a href={this.state.selectedDocument.url} target="_blank">
              {this.state.selectedDocument.name}
            </a>
          </h2>
          <Text id="batchInvite.lastEdited">Last edited</Text>:{' '}
          {new Date(this.state.selectedDocument.lastEditedUtc).toLocaleString(this.state.language || undefined, {
            dateStyle: 'full',
            timeStyle: 'full',
          })}
        </div>

        <div class="current-permissions">
          <h3>
            <Text id="batchInvite.currentPermissions">Current permissions</Text>
          </h3>
          <ul>
            {this.state.selectedDocumentPermissions.permissions?.map((permission) => (
              <li>
                {permission.role}:{permission.deleted ? '[DELETED] ' : ''}
                <img src={permission.photoLink} />
                {permission.displayName || '(NO NAME)'}&nbsp; &lt;{permission.emailAddress || '(NO ADDRESS)'}&gt;
              </li>
            ))}
          </ul>
        </div>

        <Localizer>
          <textarea
            value={this.state.users}
            onInput={(event) => this.setState({ users: (event.target as HTMLTextAreaElement).value })}
            /** @ts-ignore I hate preact-i18n */
            placeholder={<Text id="batchInvite.enterOneEmailPerLine">Enter one email address per line</Text>}
          />
        </Localizer>
        <div class="validation-result">{!this.validatedUsers.isValid ? this.validatedUsers.reason : ' '}</div>

        <div class="wrapper-roles">
          {Object.values(Role).map((role) => (
            <label>
              <input type="radio" checked={this.state.role === role} onClick={() => this.setState({ role })} />
              <span>{role}</span>
            </label>
          ))}
        </div>

        <div class="wrapper-send-notification-email">
          <label>
            <input
              type="checkbox"
              checked={this.state.sendNotificationEmail}
              onClick={() => this.setState({ sendNotificationEmail: !this.state.sendNotificationEmail })}
            />
            <Text id="batchInvite.notifyPeople">Notify people (Send Notification Email)</Text>
          </label>
        </div>

        <button onClick={() => this.batchInvite()} disabled={!this.validatedUsers.isValid || this.state.batchLoading}>
          <Text id="batchInvite.batchInvite">Batch invite</Text>
        </button>
        {this.state.batchLoading && (
          <img src="https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif" class="loading" />
        )}
      </>
    );
  }

  renderResult() {
    if (!this.state.result) {
      return;
    }

    const notReflected = Object.values(this.state.result).flatMap(({ result }) => {
      if (!('error' in result) && result.role !== this.state.role && result.role) {
        return [result];
      }

      return [];
    });

    return (
      <>
        <ul>
          {Object.entries(this.state.result).map(([id, result]) => (
            <li class={'error' in result.result ? 'error' : ''}>
              <details>
                <summary>
                  {id}: {result.status} {result.statusText}
                  {'error' in result.result && ' [' + result.result.error.message + ']'}
                </summary>
                <pre>{JSON.stringify(result.result, null, 4)}</pre>
              </details>
            </li>
          ))}
        </ul>

        {notReflected.length > 0 && (
          <div class="not-reflected">
            {/** @ts-ignore I'm not sure this is the right way */}
            <Text id="notReflected1" fields={{ role: this.state.role, count: notReflected.length }}>
              Although you invited people as {this.state.role}, {notReflected.length} people have different roles.{' '}
            </Text>
            <a
              href="https://developers.google.com/drive/api/v3/manage-sharing#:~:text=Permissions%20can%20be%20granted,the%20file%20or%20folder."
              target="_blank"
            >
              <Text id="notReflected2">This can be because they already had a more permissive role.</Text>
            </a>
            <ul>
              {notReflected.map(({ displayName, emailAddress, role }) => (
                <li>
                  {role}: {displayName} &lt;{emailAddress}&gt;
                </li>
              ))}
            </ul>
          </div>
        )}

        {this.renderChoose()}
      </>
    );
  }

  render() {
    return (
      <IntlProvider definition={this.state.i18n}>
        <main>
          <select
            value={this.state.language}
            onChange={(event) => this.switchLanguage((event.target as HTMLSelectElement).value)}
          >
            {Languages.map(({ id, name }) => (
              <option value={id}>{name}</option>
            ))}
          </select>

          <h1>Google Docs Batch Invite</h1>
          <p>
            <Text id="appDescription">
              Share your Google Docs (and any files on Google Drive) with multiple users at once.
            </Text>
          </p>
          <p>
            © 2022 Yusuke Kido [<a href="https://github.com/kissge/google-docs-batch-invite">Source on GitHub</a>]
          </p>

          {!this.state.tokenClient || !this.state.isGapiLoaded
            ? this.renderLoading()
            : !this.state.accessToken
            ? this.renderAuthorize()
            : !this.state.selectedDocument
            ? this.renderChoose()
            : !this.state.result
            ? this.renderBatchInvite()
            : this.renderResult()}
        </main>
      </IntlProvider>
    );
  }
}
