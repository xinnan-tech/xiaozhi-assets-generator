import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: process.env.VITE_BASE_URL || "./",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@share': resolve(__dirname, 'share'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/xiaozhi': {
        target: 'http://127.0.0.1:8002',
        changeOrigin: true
      }
    }
  },
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2', '**/*.bin'],
  publicDir: 'public'
})
