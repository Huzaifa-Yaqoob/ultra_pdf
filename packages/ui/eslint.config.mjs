import reactConfig from '@ultra-pdf/eslint-config/react';

export default [
  ...reactConfig,
  {
    // 👇 Apply this override specifically to your TypeScript/JavaScript files
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          allow: ['@ui/**'], // 👈 This tells Nx that @ui imports are totally fine
          enforceBuildableLibDependency: true,
          allowCircularSelfDependency: false,
        },
      ],
    },
  },
  {
    ignores: ['**/out-tsc'],
  },
];
