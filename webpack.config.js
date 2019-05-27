const path = require('path')

module.exports = {
  entry: {
    utils: './src/main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'min')
  },
  mode: 'development'
}