module.exports = {
  content: {
    page: '/project/_slug',
    permalink: '/project/:slug',
    isPost: false,
    generate: ['get', 'getAll']
  }
}
