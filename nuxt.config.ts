// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      appStage: '',
      baseUrl: '',
    },
  },

  app: {
    head: {
      title: '',
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'robots', content: 'noindex, nofollow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
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
        braceStyle: '1tbs',
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
