import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'/viteProject/',
  server:{
    open:true
  }
})
// const path = require('path')
// module.exports = {

//     base: '/viteProject/'

// }

// module.exports = {
//   // alias: {
//   //       '/@/': path.resolve(__dirname, './src')
//   //   },
//   //   // hostname: '0.0.0.0', // 默认是 localhost
//   //   // port: '8000', // 默认是 3000 端口
//   //   open: true, // 浏览器自动打开
//   //   https: false, // 是否开启 https
//   //   ssr: false, // 服务端渲染
//   //   base: './', // 生产环境下的公共路径
//   //   outDir: 'dist', // 打包构建输出路径，默认 dist ，如果路径存在，构建之前会被删除
//   //   // proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
//   //   // '/api': {
//   //   //   target: 'http://127.0.0.1:7001', // 后端服务实际地址
//   //   //   changeOrigin: true,
//   //   //   rewrite: path => path.replace(/^\/api/, '')
//   //   // }
//   // // }
//   build: {
//     // Template for index.html
//     index: path.resolve(__dirname, '../index.html'),  //之前是 '../dist/index.html'

//     // Paths
//     assetsRoot: path.resolve(__dirname, '../'),  // 之前是 '../dist'
//     assetsSubDirectory: 'static',
//     assetsPublicPath: './',   // 之前是 '/'

//   }
// }
