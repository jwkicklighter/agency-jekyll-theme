module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'spa',
  head: {
    title: 'Jordan Kicklighter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Jordan Kicklighter\'s Portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['~/assets/common.scss'],
  script: [
  ],
  /*
  ** Add any nuxt modules
  */
  modules: ['nuxtent'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#35495e' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'waypoints/lib/noframework.waypoints.js',
      'waypoints/lib/shortcuts/inview.js'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
