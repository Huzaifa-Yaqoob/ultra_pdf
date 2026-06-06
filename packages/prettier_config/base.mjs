import baseConfig from './base.mjs';

/** @type {import('prettier').Config} */
const config = {
  ...baseConfig,
  plugins: [
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports',
  ],

  importOrder: [
    '^react$',
    '^next',
    '^@/(.*)$',
    '^@ultra-pdf/(.*)$',
    '',
    '^[./]',
  ],

  importOrderTypeScriptVersion: '5.0.0',
};

export default config;