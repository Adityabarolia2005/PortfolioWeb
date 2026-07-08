import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],

  server: {
    host: '0.0.0.0',
  },

  // build: {
  //   sourcemap: false,
  //   cssCodeSplit: true,
  //   chunkSizeWarningLimit: 700,
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('node_modules')) {
  //           if (id.includes('framer-motion')) return 'framer-motion'
  //           if (id.includes('react-icons')) return 'react-icons'
  //           if ( id.includes('react')) return 'react'
  //         }
  //       },
  //     },
  //   },
  // },
})