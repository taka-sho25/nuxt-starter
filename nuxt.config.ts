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
    '@nuxtjs/google-fonts',
    // https://github.com/nuxt-modules/storybook/issues/470
    // '@nuxtjs/storybook',
    '@nuxt/test-utils/module',
  ],

  css: ['@/assets/css/reset.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
      extensions: ['vue'],
    },
  ],
});
