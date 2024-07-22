// https://nuxt.com/docs/api/configuration/nuxt-config
const environment = process.env.APP_STAGE || 'production';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const envSet = require(`./env.${environment}.js`);

export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: envSet,
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

  typescript: {
    strict: true,
    typeCheck: true,
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
