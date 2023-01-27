import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve:{
    alias:{
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@': '/src',
      "assets": "/assets"
    }
  },
  plugins: [vue({
    template: {
      // compiler:"",
      // compilerOptions:{

      // }
    }
  })]
})
