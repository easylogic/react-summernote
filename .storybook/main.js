const path = require('path');
const webpack = require('webpack');
module.exports = {
  stories: ['../src/stories/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-links', 
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register'
  ],
  webpackFinal: async config => {

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]]
          }
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx', '.mdx');
    config.resolve.alias['src'] = path.resolve(__dirname, '../src')
    config.resolve.alias['types'] = path.resolve(__dirname, '../types')
    config.plugins.push(new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }))    

    return config;
  },
};
