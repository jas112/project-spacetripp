import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/project-spacetripp/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      srcDir: 'src',
      filename: 'service-worker.js',
      manifest: {
        name: 'My Vite App',
        short_name: 'ViteApp',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        description: 'STH using PWA',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  publicDir: 'public',
  assetsInclude: ['**/*.html'],
  server: {
    port: 3000,
  },
})
