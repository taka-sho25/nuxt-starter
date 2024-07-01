// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  files: ['**/*.vue', '**/*.ts'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always',
      },
    }],
    'vue/no-multiple-template-root': 'off',
  },
}).append({
  ignores: ['api/$api.ts', 'api/$mock.ts'],
});
