import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const env = process.argv[process.argv.length - 1]

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // src 路径
    }
  },
  base: env === 'prod' ? '/orderSys/dist/' : '/',
  plugins: [react()],
})
