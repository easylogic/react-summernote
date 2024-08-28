import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({ insertTypesEntry: true }), react()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@easylogic/react-summernote-bs4',
      // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        '@easylogic/react-summernote',
        'summernote',
        'summernote/dist/summernote-bs4',
        'summernote/dist/summernote-bs4.css',
        'react-dom',
        'jquery',
        'popper.js',
        'bootstrap',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          '@easylogic/react-summernote': 'ReactSummernote',
        },
      },
    },
  },
});
