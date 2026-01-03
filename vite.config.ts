import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/portfolio-site/',
  define: {
    global: 'globalThis',
    __LAST_UPDATED__: JSON.stringify(process.env.VITE_LAST_UPDATED || new Date().toISOString()),
  },
  server: {
    port: 5173,
    host: true,
  },
})
