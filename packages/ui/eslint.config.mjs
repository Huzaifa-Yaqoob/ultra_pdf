import reactConfig from '@ultra-pdf/eslint_config/react';

export default [
  ...reactConfig,
  {
    ignores: ['**/out-tsc'],
  },
];
