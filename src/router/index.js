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
    children: [
      {
        path: '/home',
        name: 'home',
        component: resolve => import('@/views/home').then(resolve)
      },
      {
        path: '/home/login',
        name: 'home/login',
        meta: {
          title: '登录'
        },
        component: resolve => import('@/views/login').then(resolve)
      },
      {
        path: '/home/register',
        name: 'home/register',
        meta: {
          title: '注册'
        },
        component: resolve => import('@/views/register').then(resolve)
      },
      {
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
