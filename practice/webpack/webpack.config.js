var path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'out/bundle.js',
    path: path.join(__dirname, './out')
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        // babel-loaderのオプションとしてes2015とreactを指定
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      }
    ]
  }
}
