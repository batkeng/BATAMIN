module.exports = {
  env: {
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'prettier/prettier': ['error'],
    'no-console': 'off',
    'react/prop-types': [
      0,
      {
        ignore: ['ignore'],
        customValidators: ['customValidator'],
        skipUdeclared: true,
      },
    ],
  },
};
