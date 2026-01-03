import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/portfolio-site/', // GitHub Pages用のベースパス（リポジトリ名に合わせる）
  define: {
    global: 'globalThis',
    __LAST_UPDATED__: JSON.stringify(process.env.VITE_LAST_UPDATED || new Date().toISOString()),
  },
  build: {
    outDir: 'dist', // 標準的な出力ディレクトリ
    assetsDir: 'assets',
  },
})
