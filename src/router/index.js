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
          title: '百行宜众',
        },
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
            path: '/user-center/about-fp_draw',
            name: 'user-center/about-fp_draw',
            meta: {
              title: '会员中心-开具发票',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/about-fp-draw').then(resolve)
          },
          {
            path: '/user-center/about-fp_write',
            name: 'user-center/about-fp_write',
            meta: {
              title: '会员中心-填写信息',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/about-fp-write').then(resolve)
          },
          {
            path: '/user-center/about-fp_his',
            name: 'user-center/about-fp_his',
            meta: {
              title: '会员中心-查看历史',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/about-fp-his').then(resolve)
          },
          {
            path: '/user-center/about-sh_return',
            name: 'user-center/about-sh_return',
            meta: {
              title: '会员中心-我要退款',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/about-sh-return').then(resolve)
          },
          {
            path: '/user-center/about-sh_his',
            name: 'user-center/about-sh_his',
            meta: {
              title: '会员中心-退款记录',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/about-sh-his').then(resolve)
          },
        ]
      },
      /***********登录**********************/
      {
        path: '/auth/login',
        name: 'auth/login',
        meta: {
          title: '登录',
          breadShow: true
        },
        component: resolve => import('@/views/login').then(resolve)
      },
      /***********注册**********************/
      {
        path: '/auth/register',
        name: 'auth/register',
        meta: {
          title: '注册',
          breadShow: true
        },
        component: resolve => import('@/views/register').then(resolve)
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
