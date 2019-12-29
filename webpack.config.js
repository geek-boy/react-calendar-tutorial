module.exports = {
  mode: 'development',
  entry:  './source/app.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$|jsx/,
        options: {
          presets: ['@babel/env','@babel/react'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    ]
  }
}
