import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  define: {
    global: {},
  },
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  optimizeDeps: {
    include: ['axios'],
  },
});
