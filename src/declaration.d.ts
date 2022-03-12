declare module '*.css' {
  const mapping: Record<string, string>;
  export default mapping;
}

declare interface TokenResponse extends gapi.auth.GoogleApiOAuth2TokenObject {}

declare interface TokenClientConfig {
  client_id: string;
  callback: (tokenResponse: TokenResponse) => void;
  scope: string;
  prompt?: string;
}

declare interface TokenClient {
  requestAccessToken(overrideConfig?: OverridableTokenClientConfig): void;
}

declare interface GAPIError {
  error: {
    errors: { domain: string; reason: string; message: string }[];
    code: number;
    message: string;
  };
}

declare namespace google {
  namespace accounts {
    namespace oauth2 {
      declare function initTokenClient(config: TokenClientConfig): TokenClient;
    }
  }
}
