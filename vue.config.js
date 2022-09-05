const path = require('path')

module.exports = {
  productionSourceMap: false,
  outputDir: './lib',
  publicPath: './',
  chainWebpack:  (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));

    if (process.env.NODE_ENV === 'production') {
    }
  },
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    }
  }
}
