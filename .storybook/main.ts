import path from 'path';

import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)', '../components/base/**/*.stories.ts'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          // Resolve Vue bundler to support runtime compilation
          vue: 'vue/dist/vue.esm-bundler.js',
          '@': path.resolve(__dirname, '../'),
          '~': path.resolve(__dirname, '../'),
          '#components': path.resolve(__dirname, '../.nuxt/components.d.ts'),
          '#imports': path.resolve(__dirname, '../.nuxt/imports.d.ts'),
        },
      },
    });
  },
};

export default config;
