import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import topLevelAwait from 'vite-plugin-top-level-await';


// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    topLevelAwait(),
    federation({
      name: "host-app",
      // 加载远程资源
      remotes: {
        remote_app1:'http://localhost:5174/dist/assets/remoteEntry.js',
        remote_app2:'http://localhost:5175/dist/assets/remoteEntry.js'
      },
      shared: ['vue'],
    }),
  ],
})