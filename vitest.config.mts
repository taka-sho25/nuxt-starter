/// <reference types="vitest" />

import path from 'path';

import { defineVitestConfig } from '@nuxt/test-utils/config';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineVitestConfig({
  plugins: [AutoImport({ imports: ['vue', 'pinia'] }), Components({ dirs: ['components', 'features'] })],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './'),
      '#components': path.resolve(__dirname, './.nuxt/components.d.ts'),
      '#imports': path.resolve(__dirname, './.nuxt/imports.d.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
