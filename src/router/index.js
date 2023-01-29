import { createRouter, createWebHashHistory } from "vue-router"
import Home from '../pages/home.vue'
import Intersection from "../pages/intersection.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/intersection', component: Intersection },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router
