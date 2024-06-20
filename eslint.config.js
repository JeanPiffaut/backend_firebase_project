import js from '@eslint/js';
import pluginNode from 'eslint-plugin-node';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                jest: 'readonly',
                require: 'readonly',
                module: 'readonly',
                process: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly',
            },
        },
        plugins: {
            node: pluginNode,
        },
        rules: {
            indent: ['error', 4],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'no-trailing-spaces': 'error',
            eqeqeq: 'error',
            'no-unused-vars': 'warn',
            'no-console': 'warn',
            'consistent-return': 'error',
            'no-undef': 'error',
            'no-redeclare': 'error',
            'no-dupe-keys': 'error',
        },
    },
    {
        files: ['**/*.js'],
        ignores: ['node_modules/**'],
    },
];
