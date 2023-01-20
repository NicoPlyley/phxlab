module.exports = {
  root: true,
  extends: [ 'eslint:recommended', 'prettier', 'plugin:tailwindcss/recommended' ],
  plugins: [ 'svelte3', 'tailwindcss' ],
  overrides: [ { files: [ '*.svelte' ], processor: 'svelte3/svelte3' } ],
  rules: {
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
