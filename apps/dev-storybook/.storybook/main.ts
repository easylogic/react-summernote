import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('storybook-addon-pseudo-states'),
    '@jls-digital/storybook-addon-code',
    getAbsolutePath('@storybook/addon-mdx-gfm'),
  ],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (configure) => {
    return {
      ...configure,
      define: {
        ...configure.define,
        global: 'window',
      },
      resolve: {
        alias: {
          ...configure.resolve?.alias,
          jquery: 'jquery/dist/jquery.js',
          jQuery: 'jquery/dist/jquery.js', // jQuery를 대문자로 추가
        },
      },
      optimizeDeps: {
        include: ['jquery'],
      },
    };
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
