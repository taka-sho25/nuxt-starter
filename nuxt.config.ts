// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      appStage: '',
      baseUrl: '',
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@nuxt/test-utils/module',
  ],

  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },

  css: ['@/assets/css/reset.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
      extensions: ['vue'],
    },
  ],
});
