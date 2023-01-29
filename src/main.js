import { createApp, } from 'vue'
import { createPinia } from "pinia"
import MyPlugin from './plugins/myPlugin'
import App from './App.vue'
import router from "./router/index"
import './style.css'

const app = createApp(App)
app.use(router)
// app.use(createPinia())

// app.provide(/* 注入名 */ 'message', /* 值 */ obj)

app.use(MyPlugin, {
  fontSize: {
    small: 12,
    medium: 24,
    large: 36
  }
})

// global directive
// app.directive('font', {
//   mounted(el, binding, vnode) {
//     el.style.fontSize = binding.value + 'px'
//   }
// })

app.mount('#app')





