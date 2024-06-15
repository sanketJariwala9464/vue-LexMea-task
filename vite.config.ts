import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      pagesDir: [
        { dir: 'src/pages', baseRoute: '' },
      ]
    }),
    Components({
      dirs: ['src/components', 'src/layouts'],
      extensions: ['vue'],
      globalComponentsDeclaration: true,
    })
  ],
  base: '/',
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  }
})
