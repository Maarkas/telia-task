module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    parserOptions: { ecmaVersion: 8 },
    ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
    extends: ['eslint:recommended'],
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            settings: { react: { version: 'detect' } },
            env: {
                browser: true,
                node: true,
                es6: true,
            },
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended', // TypeScript rules
                'plugin:react/recommended', // React rules
                'plugin:react-hooks/recommended', // React hooks rules
                'plugin:jsx-a11y/recommended', // Accessibility rules
                'prettier/@typescript-eslint', // Prettier plugin
                'plugin:prettier/recommended', // Prettier recommended rules
            ],
            rules: {
                'react/prop-types': 'off', // We will use TypeScript's types for component props instead
                'react/react-in-jsx-scope': 'off', // No need to import React when using Next.js (+Version 17)
                'jsx-a11y/anchor-is-valid': 'off', // This rule is not compatible with Next.js's <Link /> components
                '@typescript-eslint/no-unused-vars': ['error'], // No unused variables
                '@typescript-eslint/explicit-function-return-type': 'off', // Require return types on functions only where useful
                '@typescript-eslint/explicit-module-boundary-types': 'off', // Return types with non-expected types
                'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Prettier rules
            },
        },
    ],
};
