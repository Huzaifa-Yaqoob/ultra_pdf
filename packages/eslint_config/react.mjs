import baseConfig from './base.mjs';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.jsx'],
    ...reactPlugin.configs.flat.recommended,
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.jsx'],
    ...reactHooksPlugin.configs.recommended,
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.jsx'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
];
