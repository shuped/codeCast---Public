var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/index.js']
  },
  target: 'electron-main',
  output: {
    path: path.join(__dirname, 'public/build'),
    filename: 'bundle.js',
    publicPath: path.join(__dirname,'public/build/') // change in production to '/'
  },

  module: {
    noParse: /ws/,
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-modules-commonjs"]
          }
        }
      },
      { 
        test: /\.s$css/,
        use: ['style-loader', 'sass-loader', 'css-loader']
      },
    ]
  },
  externals: ['/ws'],
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'index.html')
    })
  ]
}