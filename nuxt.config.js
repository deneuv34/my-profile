module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Rangga Adhitya Prawira',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Rangga Adhitya Prawira' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  srcDir: './src',
  modules: [
    '@nuxtjs/font-awesome',
  ],
  plugins: [
    { src: '~/plugins/font-awesome' }
  ],
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    // proxyHeaders: false
  },
  css: [
    '@fortawesome/fontawesome/styles.css',
  ]

}

