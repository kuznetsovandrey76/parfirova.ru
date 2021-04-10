module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2018,
    },
    rules: {
        'prettier/prettier': 1,
        'no-console': 0,
        'no-continue': 0,
        'no-param-reassign': 0,
        'no-underscore-dangle': 'off',
        'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
        'func-names': 'off',
        'no-multi-assign': 'off',
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
    },
};
