import { createRouter, createWebHashHistory } from "vue-router"
import Home from '../pages/home.vue'
import Intersection from "../pages/intersection.vue"
import Tab from "../pages/tab.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/intersection', component: Intersection },
  { path: '/tab', component: Tab }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router
