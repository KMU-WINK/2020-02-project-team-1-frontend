export default {
  // target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'wink-team1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    // base: '/wink'
    extendRoutes(routes) {
      for (const key in routes) {
        routes[key].caseSensitive = true;
      }
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/global.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/api'

  ],

  layoutTransition: {
    name: 'layout-transition',
    mode: 'out-in'
  },

  pageTransition: {
    name: 'page-transition',
    mode: 'out-in'
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    '@nuxtjs/style-resources'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: "http://localhost:4000/api",
    proxy: true,
    credentials: false,
  },

  proxy: {
    '/api': 'http://localhost:4000/api',
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
