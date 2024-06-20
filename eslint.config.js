module.exports = {
    env: {
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:node/recommended',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-trailing-spaces': 'error',
        'eqeqeq': 'error',
        'no-unused-vars': 'warn',
        'no-console': 'warn',
        'consistent-return': 'error',
        'no-undef': 'error',
        'no-redeclare': 'error',
        'no-dupe-keys': 'error',
    },
};
