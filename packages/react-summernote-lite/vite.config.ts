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
      name: '@easylogic/react-summernote-lite',
      // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'react', 
        'react/jsx-runtime', 
        'react-dom', 
        'jquery', 
        '@easylogic/react-summernote', 
        'summernote',
        'summernote/dist/summernote-lite',
        'summernote/dist/summernote-lite.css',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'jquery': 'jQuery',
          '@easylogic/react-summernote': 'ReactSummernote',
          'summernote': 'Summernote',
          'summernote/dist/summernote-lite': 'Summernote',
        },
      },
    },
  },
});
