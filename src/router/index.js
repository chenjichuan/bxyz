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
        component: resolve => import('@/views/home').then(resolve),
        meta: {
        },
      },
      {
        path: '/home/login',
        name: 'home/login',
        meta: {
          title: '登录',
          breadShow: true
        },
        component: resolve => import('@/views/login').then(resolve)
      },
      {
        path: '/home/register',
        name: 'home/register',
        meta: {
          title: '注册',
          breadShow: true
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
        redirect: 'user-center/member-info',
        component: resolve => import('@/views/user-center').then(resolve),
        children: [
          {
            path: '/user-center/member-info',
            name: 'user-center/member-info',
            meta: {
              title: '会员中心-会员资料',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/member-info').then(resolve)
          },
          {
            path: '/user-center/check-id',
            name: 'user-center/check-id',
            meta: {
              title: '会员中心-实名认证',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/check-id').then(resolve)
          },
          {
            path: '/user-center/reset-pass',
            name: 'user-center/reset-pass',
            meta: {
              title: '会员中心-密码修改',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/reset-pass').then(resolve)
          },
          {
            path: '/user-center/about-sh',
            name: 'user-center/about-sh',
            meta: {
              title: '会员中心-关于售后',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/about-sh').then(resolve)
          },
          {
            path: '/user-center/about-fp',
            name: 'user-center/about-fp',
            meta: {
              title: '会员中心-关于发票',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/about-fp').then(resolve)
          }
        ]
      },
    ]
  }]

const router = new VueRouter({
  routes
})
router.afterEach(function (v) {
  if (v.meta && v.meta.title) {
    document.title = v.meta.title
  }
})
export default router
