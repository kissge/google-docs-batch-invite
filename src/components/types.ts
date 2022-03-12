export enum Role {
  reader = 'reader',
  commenter = 'commenter',
  writer = 'writer',
  fileOrganizer = 'fileOrganizer',
  organizer = 'organizer',
  owner = 'owner',
}

export interface AppState {
  isGapiLoaded: boolean;
  tokenClient: TokenClient | null;
  accessToken: string | null;
  users: string;
  sendNotificationEmail: boolean;
  role: Role;
  selectedDocument: google.picker.DocumentObject | null;
  selectedDocumentPermissions: gapi.client.drive.PermissionList | null;
  result: gapi.client.ResponseMap<gapi.client.drive.Permission | GAPIError> | null;
  batchLoading: boolean;
  language: Language;
  i18n: {}; // <- preact-i18n's type definition is awful
}

export const Languages = [
  { id: '' as const, name: 'English' },
  { id: 'ja' as const, name: '日本語' },
];
export type Language = typeof Languages[0]['id'];
export function isLanguage(x: string): x is Language {
  return Languages.some(({ id }) => id === x);
}
