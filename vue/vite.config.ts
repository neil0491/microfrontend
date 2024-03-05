import { fileURLToPath, URL } from 'node:url'
import federation from "@originjs/vite-plugin-federation";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './AboutView': './src/views/AboutView.vue',
        './HomeView': './src/views/HomeView.vue',
      },
      shared: ["vue"]
    })
  ],
  server: {
    host: "0.0.0.0",
    port: 4001
  },
  preview: {
    port: 4001,

  },
  build: {
    target: 'esnext',
    minify: true,
    cssCodeSplit: true,
    sourcemap: true,
    rollupOptions: {
      external: ["vue"],
      output: {
        minifyInternalExports: false,
        globals: {
          vue: "vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    dedupe: ['vue'],

  }
})
