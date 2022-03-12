// @ts-check

import { DefinePlugin } from 'webpack';

/** @param {import('preact-cli').Config} config - original webpack config */
export default (config) => {
  config.plugins.push(
    new DefinePlugin(
      Object.fromEntries(
        ['CLIENT_ID', 'APP_ID', 'DEVELOPER_KEY'].map((key) => {
          const value = process.env[key];

          if (!value) {
            throw new Error('Missing environment variable: ' + key);
          }

          return ['process.env.' + key, JSON.stringify(value)];
        }),
      ),
    ),
  );

  if (process.env.PUBLIC_PATH) {
    config.output.publicPath = process.env.PUBLIC_PATH;
  }
};
