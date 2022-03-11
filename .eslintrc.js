module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  globals: {
    __DEV__: true,
  },
  plugins: ['react', 'prettier', 'jsx-a11y', 'import', 'jest'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'arrow-parens': 0,
    'global-require': 0,
    'array-element-newline': [2, 'consistent'],
    'import/extensions': ['error', 'never'],
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'no-console': 'error',
    'no-mixed-operators': 0,
    'no-use-before-define': 0,
    'no-shadow': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
    radix: 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    semi: [2, 'never'],
  },
}
