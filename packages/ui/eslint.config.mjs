import reactConfig from '@ultra-pdf/eslint-config/react';

export default [
  ...reactConfig,
  {
    ignores: ['**/out-tsc'],
  },
];
