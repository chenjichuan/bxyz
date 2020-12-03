import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: resolve => import('@/views/layout').then(resolve), // 页面基础框架
  },
]

const router = new VueRouter({
  routes
})

export default router
