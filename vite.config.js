import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/portfolio-site/', // GitHub Pages用のベースパス（リポジトリ名に合わせる）
  build: {
    outDir: 'dist', // 標準的な出力ディレクトリ
    assetsDir: 'assets',
  },
})
