import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import vercel from 'vite-plugin-vercel';

export default defineConfig({
  base: './',
  plugins: [react(),vercel()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'buffer': 'buffer',
      'stream': 'stream-browserify',
    },
  },
  define: {
    'process.env': {},
    'global': {},
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true
        })
      ]
    }
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true
        })
      ]
    },
  },
}) 