const path = require('path');
const merge = require('webpack-merge');
const common = require('../common.config');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
  entry: {
    lite: './src/app/lite.tsx',
  },    
  output: {
    path: path.resolve(__dirname, '../../.out'),
  },  
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },  
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new ManifestPlugin({
      fileName: 'assets.json',
      basePath: '/',
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css'
    }),    
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
  ],
});