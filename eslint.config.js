const js = require('@eslint/js')
const react = require('eslint-plugin-react')
const reactHooks = require('eslint-plugin-react-hooks')
const jsxA11y = require('eslint-plugin-jsx-a11y')
const globals = require('globals')

// eslint-plugin-jsx-a11y's recommended config still ships a pre-flat-config
// shape: parserOptions at the top level instead of under languageOptions,
// and plugins as a bare array of names instead of a { name: plugin } map.
// ESLint's flat config system rejects both outright.
const jsxA11yFlat = {
  plugins: { 'jsx-a11y': jsxA11y },
  languageOptions: { parserOptions: jsxA11y.configs.recommended.parserOptions },
  rules: jsxA11y.configs.recommended.rules,
}

module.exports = [
  {
    ignores: ['build/**', 'storybook-static/**', 'coverage/**'],
  },
  js.configs.recommended,
  react.configs.flat.recommended,
  reactHooks.configs.flat['recommended-latest'],
  jsxA11yFlat,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      complexity: ['error', 10],
      'one-var': ['error', 'never'],
      'react/boolean-prop-naming': 1,
      'react/prop-types': 1,
      'jsx-a11y/heading-has-content': 0,
    },
  },
]
