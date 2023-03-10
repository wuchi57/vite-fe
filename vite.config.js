import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'


export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router'],
      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),
        // Auto import icons components 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
      vueTemplate: true,
      dts: resolve(__dirname, './auto-imports.d.ts'),
    }),
    Components({
      resolvers: [
        // Auto register Element Plus components 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // Auto register icons components 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
      dts: resolve(__dirname, './components.d.ts'),
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'components': resolve(__dirname, 'src/components'),
      'api': resolve(__dirname, 'src/api'),
      'router': resolve(__dirname, 'src/router'),
      'store': resolve(__dirname, 'src/store'),
      'styles': resolve(__dirname, 'src/styles'),
      'views': resolve(__dirname, 'src/views'),
      'layouts': resolve(__dirname, 'src/layouts'),
      'utils': resolve(__dirname, 'src/utils'),
      'plugins': resolve(__dirname, 'src/plugins'),
      'dirs': resolve(__dirname, 'src/directives'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    // 是否开启 https
    https: false,
    // 端口号
    port: 3000,
    // 监听所有地址
    host: '0.0.0.0',
    // 服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 自定义代理规则
    // proxy: {},
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:8000',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
      }
    }
  },
  build: {
    // 设置最终构建的浏览器兼容目标
    target: 'es2015',
    // 构建后是否生成 source map 文件
    sourcemap: false,
    //  chunk 大小警告的限制（以 kbs 为单位）
    chunkSizeWarningLimit: 2000,
    // 启用/禁用 gzip 压缩大小报告
    reportCompressedSize: true,
  },
})
