const path = require('path');
const merge = require('webpack-merge');
const common = require('../common.config');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
  entry: {
    app: './src/app/lite.tsx',
  },    
  mode: 'development',
  devtool: '#source-map',
  devServer: {
    port: 3000,
    noInfo: true,
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    open: true,
    hot: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.HashedModuleIdsPlugin(),
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