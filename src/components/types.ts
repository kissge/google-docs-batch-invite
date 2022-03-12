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
}
