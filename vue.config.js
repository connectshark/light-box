module.exports = {
  css: {
    sourceMap: false
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/light-box/'
    : '/'
}
