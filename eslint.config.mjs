// @ts-check
import globals from 'globals';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  files: ['**/*.vue', '**/*.ts'],
  rules: {
    'curly': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always',
      },
    }],
    'vue/no-multiple-template-root': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 5,
    }],
    'max-len': ['error', { code: 120 }],
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
}).append({
  ignores: ['api/$api.ts', 'api/$mock.ts'],
});
