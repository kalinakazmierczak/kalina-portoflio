import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite Configuration
 * Optimized for maximum performance and fast load times
 */
export default defineConfig({
  plugins: [react()],
  
  // Include additional file types as assets
  assetsInclude: ['**/*.pptx', '**/*.PNG'],
  
  build: {
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'lucide-react': ['lucide-react'],
        },
      },
    },
    
    // Minify and optimize
    minify: 'esbuild',
    
    // Target modern browsers for smaller bundle
    target: 'ES2020',
    
    // Generate source maps for production debugging (optional)
    sourcemap: false,
    
    // Optimize CSS
    cssCodeSplit: true,
  },
  
  // Server configuration
  server: {
    port: 5173,
    strictPort: false,
  },
  
  // Performance hints
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
})
