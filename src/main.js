import { createApp,reactive, ref } from 'vue'
import './style.css'
import App from './App.vue'


console.log("import.meta",import.meta);
const url =  new URL(import.meta.url)
console.log('url',url);

let obj  = ref({
  aaa:"aaa"
})

const app = createApp(App)
app.provide(/* 注入名 */ 'message', /* 值 */ obj)

// setTimeout(()=>{
// debugger  obj.value.aaa =  '3333'
  
// },2000)



app.mount('#app')
// app.provide('message', 'hello')

// app.config.errorHandler = (err) => {
//   debugger
//   /* 处理错误 */
//   console.log('eeee')
//   console.err('err',err)
//   debugger
//   throw err
// }




