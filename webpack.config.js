const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry:  './source/app.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env','@babel/react'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      {
        test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new Dotenv()
  ]
}
