/* eslint-env node */

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react-hooks/recommended',
        'airbnb-typescript',
        'prettier',
        'plugin:css-import-order/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: ['react-refresh', 'import', 'css-import-order'],
    rules: {
        'react/jsx-filename-extension': 'off',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        'import/order': [
            'error',
            {
                groups: [
                    'type',
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'unknown',
                ],
                pathGroups: [
                    {
                        pattern: 'react*',
                        group: 'external',
                    },
                    {
                        pattern: 'assets/*',
                        group: 'internal',
                    },
                    {
                        pattern: 'pages/*',
                        group: 'internal',
                    },
                    {
                        pattern: 'components/*',
                        group: 'internal',
                    },
                ],

                pathGroupsExcludedImportTypes: ['react', 'unknown'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
};
