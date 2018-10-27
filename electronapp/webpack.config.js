var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/index.js']
  },

  output: {
    path: './public/built',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader'
      },
    ]
  }
}