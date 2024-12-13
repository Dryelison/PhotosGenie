import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'path/to/your/typescript/file.ts',
      'path/to/another/typescript/file.ts',
    ],
  },
})
