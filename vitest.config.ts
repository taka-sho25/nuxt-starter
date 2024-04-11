/// <reference types="vitest" />

import path from 'path';
import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
