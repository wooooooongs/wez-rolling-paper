module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
    'airbnb',
    ,
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    indent: ['error', 2],
    'no-unused-vars': 1,
    'no-use-before-define': 1,
    'no-redeclare': 1,
    'no-console': 0,
    'react/prop-types': 'off',
  },
};
