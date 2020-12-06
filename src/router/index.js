import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // { path: '*',  redirect: 'home', },
  {
    path: '/',
    name: 'root',
    redirect: 'home',
    component: resolve => import('@/views/layout').then(resolve),
    children: [{
      path: '/home',
      name: 'home',
      component: resolve => import('@/views/home').then(resolve)
    }, {
      path: '/business-show',
      name: 'business-show',
      component: resolve => import('@/views/business-show').then(resolve)
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
