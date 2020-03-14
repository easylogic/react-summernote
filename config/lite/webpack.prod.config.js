const merge = require('webpack-merge');
const common = require('../common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  entry: {
    'summernote-lite': './src/summernote/ReactSummernoteLite.tsx'
  },
  externals: {
    jquery: {
      root: '$',
      commonjs2: 'jquery',
      commonjs: 'jquery',
      amd: 'jquery'
    },
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
    }),
    new CopyWebpackPlugin([
      { from: 'node_modules/summernote/lang', to: 'lang' },
    ])
  ]
});