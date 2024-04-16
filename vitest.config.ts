/// <reference types="vitest" />

import path from 'path';
import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
