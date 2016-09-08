var path = require('path')
var webpack = require('webpack')

var outPath = '../exp'

module.exports = {
  devtool: '#source-map',
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3100/__webpack_hmr',
    './src/indexEntry'
  ],
  output: {
    path: path.join(__dirname, outPath),
    filename: 'bundle.js',
    publicPath: 'http://127.0.0.1:3100/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  }
}
