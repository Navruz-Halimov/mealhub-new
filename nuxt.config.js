export default {
  server: {
    port: 3000,
    host: 'localhost'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Meal Hub',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'apple-mobile-web-app-capable',content: 'yes'},
      {name: 'apple-mobile-web-app-status-bar-style',content: '#d6d6d6'},
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'manifest', href: '/site.webmanifest' },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '32x32',
        href: '/favicon.ico'
      },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#24a391' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuelidate' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    '@nuxtjs/i18n',
    [
      'nuxt-gmaps',
      {
        key: 'AIzaSyBesbWEzXNLD82LezmO0CMxpYBNq2a3cgI',
        libraries: ['places', 'geometry']
        // you can use libraries: ['places']
      }
    ],
  ],
  styleResources: {
    scss: [
      // '~/assets/styles/classes/btn/burgandy.scss',
      // '~/assets/styles/abstract/var.scss',
      // '~/assets/styles/abstract/mixins.scss'
    ]
  },
  i18n: {
    locales: [
      { code: 'ru', iso: 'ru-RU' },
      { code: 'en', iso: 'en-US' }
    ],
    defaultLocale: 'ru',
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'ru'
    },
    detectBrowserLanguage: {
      useCookie: false,
      fallbackLocale: 'ru'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  manifest: {
    name: 'EatMe',
    lang: 'en',
    display: 'fullscreen',
    title: 'EatMe',
    description: 'Description for this project',
    theme_color: '#FFFFFF',
    background_color: '#FFFFFF',
    start_url: '/',
    short_name: 'EatMe',
    icons: [
      {
        src: '/favicon-app.png',
        sizes: '2000x2000',
        type: 'image/png'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '152x152',
        type: 'image/png'
      }
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
      postcss: {
      ssr: true,
      plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'postcss-preset-env':'',
        cssnano: { preset: 'default' } // disabled in dev mode
      },
      order: 'presetEnvAndCssnanoLast',
      preset: {
        autoprefixer: {
          overrideBrowserslist: ['>0.1%', 'last 4 versions'],
          grid: true,
          flexbox: true
        }
      }
    }
}
