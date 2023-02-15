import { createRouter, createWebHashHistory } from "vue-router"

const Home = () => import('../pages/home.vue')
const Intersection = () => import("../pages/intersection.vue")
const Tab = () => import("../pages/tab.vue")
const Pinia = () => import('../pages/pinia.vue')
const RouterParams = () => import('../pages/router-params.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/intersection', component: Intersection },
  { path: '/tab', component: Tab },
  { path: '/pinia', component: Pinia },
  { path: '/params/:username', name: "params", component: RouterParams }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router
