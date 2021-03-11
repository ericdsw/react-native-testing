module.exports = {
  ignorePatterns: [
    '.eslintrc.js',
    'babel.config.js',
    'jest.config.js',
    'jestSetup/*.*'
  ],
  extends: [
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    project: './tsconfig.json',
  },
  rules: {
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'import/export': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 'off',
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-callback-in-promise': 'error',
    'promise/avoid-new': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/valid-params': 'error',
    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'no-param-reassign': [
      'error', 
      { 'props': true, 'ignorePropertyModificationsFor': ['state'] }
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['src/'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off'
  },
};