import federation from "@originjs/vite-plugin-federation";
import { resolve } from 'node:path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    asyncEntry: true,
    asyncContext: true
  },
  devServer: {
    host: "0.0.0.0"
  },
  ssr: false,
  vite: {
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ["vue"],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: "Vue",
          },
        },
      },

    },

    resolve: {
      alias: {
        'vue': resolve('./node_modules/vue')
      },
      dedupe: ['vue'],
    },

    plugins: [
      federation({
        name: 'host',
        filename: "host.js",
        remotes: {
          aboute: "http://localhost:4001/assets/remoteEntry.js",
        },
        exposes: {},
        shared: {
          // vue: {}
        }
      })
    ],
  }
})
