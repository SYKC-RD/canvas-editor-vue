import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'modules',
    //打包文件目录
    outDir: "es",
    //静态文件目录
    assetsDir: 'css',
    //压缩
    minify: false,
    //css分离
    cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: ['src/index.ts'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          // preserveModules: true,
          //配置打包根目录
          dir: 'dist/es',
          assetFileNames: (assetInfo) => {
            //判断是静态资源且是css
            if (assetInfo.type === 'asset' && /\.(css)$/i.test(assetInfo.name || "")) {
              //截取出css打包名称中的组件名 button.vue_vue_type_style_index_0_lang.css 截出button
              let str = (assetInfo.name || 'style.').split('.')[0]
              //将组件css输出到组件目录下 组件/组件.css
              return `${str}/${str}.css`
            } else {
              //其他静态资源则返回默认的 后续也可以对其他资源文件细分
              return 'assets/[name].[ext]'
            }
          },
          preserveModulesRoot: ''
        }
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
