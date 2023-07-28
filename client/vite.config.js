import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import compression from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$ /, /\.(gz)$/],
    }),
    compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(br)$ /, /\.(gz)$/],
    }),
  ],
  preview: {
    port: 5173,
  },
  assetsInclude: ['**/*.md'],
})
