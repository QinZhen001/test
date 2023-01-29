import { createRouter, createWebHashHistory } from "vue-router"

const Home = () => import('../pages/home.vue')
const Intersection = () => import("../pages/intersection.vue")
const Tab = () => import("../pages/tab.vue")
const Pinia = () => import('../pages/pinia.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/intersection', component: Intersection },
  { path: '/tab', component: Tab },
  { path: '/pinia', component: Pinia }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router
