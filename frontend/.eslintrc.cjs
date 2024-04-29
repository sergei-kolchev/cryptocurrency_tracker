module.exports = {
  root: true,
  settings: { react: { version: 'detect' } },
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'import'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    "sort-imports": [
        "error", { "ignoreCase": true, "ignoreDeclarationSort": true }
    ],
    "import/order": [
        1,
        {
          "groups": [
              "external",
              "builtin",
              "internal",
              "sibling",
              "parent",
              "index"
          ],
        }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
