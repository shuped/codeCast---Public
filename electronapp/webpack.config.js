var webpack = require('webpack');
var HtmlWebpackPlugin = require('webpack-html-plugin');

module.exports = {
  entry: {
    app: ['./src/index.js']
  },

  output: {
    path: './public/built',
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
          presets: ['react', 'es2015', 'stage-0']
          }
        }
      },
      { 
        test: /\.css$/,
        use: {
          loader: 'style-loader!css-loader'
        }
      },
    ]
  },
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html',
    })
  ]
}