const merge = require('webpack-merge');
const common = require('../common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    'summernote-bs4': './src/summernote/ReactSummernoteBS4.tsx'
  },
  externals: {
    jquery: {
      root: '$',
      commonjs2: 'jquery',
      commonjs: 'jquery',
      amd: 'jquery'
    },
    bootstrap: 'bootstrap',
    'react': {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
    },    
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),    
    new MiniCssExtractPlugin({
        filename: '[name].css'
    })
  ]
});