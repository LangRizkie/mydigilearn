export default {
  target: 'static',
  head: {
    title: 'myDigiLearn | assessment',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/stylesheet/global.scss',
    '@/assets/stylesheet/hamburgers/hamburgers.scss',
    '@/assets/stylesheet/tailwind.css'
  ],
  plugins: [
    '@/plugins/axios.plugin',
    '@/plugins/directives.plugin',
    '@/plugins/global.plugin',
    '@/plugins/lodash.plugin',
    '@/plugins/endpoint.plugin'
  ],
  components: true,
  buildModules: [
    '@nuxt/image',
    '@nuxt/postcss8',
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/router-extras'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    'vue2-editor/nuxt'
  ],
  axios: {
    baseURL: 'https://restify-sahaware-boilerplate.herokuapp.com/'
  },
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  },
  googleFonts: {
    prefetch: true,
    Quicksand: true
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
