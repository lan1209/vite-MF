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
      name: "remote-app",
      filename:'remoteEntry.js', // 打包后生成该文件，需要导入到host
      exposes: {
        './page1':'./src/components/page1.vue',
        // './page2':'./src/components/page2.vue',
      },
      // 本地模块和远程模块共享的依赖
      shared: ['vue'],
    }),
  ],
})