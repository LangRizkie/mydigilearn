module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    fontFamily: {
      quicksand: ['"Quicksand"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tw-elements/dist/plugin')
  ],
}
