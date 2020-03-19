const path = require('path');
const webpack = require('webpack');
module.exports = {
  stories: ['../src/stories/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions', 
    '@storybook/addon-links', 
    '@storybook/addon-knobs/register'
  ],
  webpackFinal: async config => {

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
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
