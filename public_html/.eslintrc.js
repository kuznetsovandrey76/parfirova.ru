module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier', 'react-hooks'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'func-names': [2, 'always'],
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'prettier/prettier': 2,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'space-before-blocks': [2, 'always'],
    'no-console': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/control-has-associated-label': 0,

    // Disabled temporary because we have enormous number of errors
    'import/no-cycle': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-shadow': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/require-default-props': 0,
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
  },
};
