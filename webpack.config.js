var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css!sass'
        )
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  plugins: [
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'templates/index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      API_HOST: JSON.stringify(JSON.parse(process.env.API_HOST || '"http://localhost:8081"'))
    }),
    new Clean(['build'])
  ]
};