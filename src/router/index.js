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
      /***********业务展示**********************/
      {
        path: '/business-show',
        name: 'business-show',
        component: resolve => import('@/views/business-show').then(resolve)
      },
      /***********会员中心**********************/
      {
        path: '/user-center',
        name: 'user-center',
        component: resolve => import('@/views/user-center').then(resolve),
        children: [
          {
            path: '/user-center/order',
            name: 'user-center/order',
            component: resolve => import('@/views/user-center/order').then(resolve)
          },
          {
            path: '/user-center/member-info',
            name: 'user-center/member-info',
            component: resolve => import('@/views/user-center/member-info').then(resolve)
          },
          {
            path: '/user-center/serve',
            name: 'user-center/serve',
            component: resolve => import('@/views/user-center/serve').then(resolve)
          },
          {
            path: '/user-center/check-id',
            name: 'user-center/check-id',
            component: resolve => import('@/views/user-center/check-id').then(resolve)
          },
          {
            path: '/user-center/reset-pass',
            name: 'user-center/reset-pass',
            component: resolve => import('@/views/user-center/reset-pass').then(resolve)
          },
          {
            path: '/user-center/about-sh',
            name: 'user-center/about-sh',
            component: resolve => import('@/views/user-center/about-sh').then(resolve)
          },
          {
            path: '/user-center/about-fp',
            name: 'user-center/about-fp',
            component: resolve => import('@/views/user-center/about-fp').then(resolve)
          }
        ]
      },
    ]
  }]

const router = new VueRouter({
  routes
})

export default router
