module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:wdio/recommended',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
    'wdio'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'error',
    '@typescript-eslint/no-unused-vars':  process.env.NODE_ENV === 'production' ? 'off' : 'error'
  }
}
