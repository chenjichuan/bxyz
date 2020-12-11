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
      /***********惠法务**********************/
      {
        path: '/business-show/law',
        name: 'business-show/law',
        component: resolve => import('@/views/businessshow-law').then(resolve),
        meta: {
          title: '业务展示-惠法务',
          breadShow: true,
        },
      },
      {
        path: '/business-show/law/ask',
        name: 'business-show/law/ask',
        component: resolve => import('@/views/businessshow-law/ask').then(resolve),
        meta: {
          title: '法律咨询',
          breadShow: true,
        },
      },
      {
        path: '/business-show/law/contract',
        name: 'business-show/law/contract',
        component: resolve => import('@/views/businessshow-law/contract').then(resolve),
        meta: {
          title: '合同服务',
          breadShow: true,
        },
      },
      {
        path: '/business-show/law/resource',
        name: 'business-show/law/resource',
        component: resolve => import('@/views/businessshow-law/resource').then(resolve),
        meta: {
          title: '定制人力资源合同',
          breadShow: true,
        },
      },
      {
        path: '/business-show/law/manage',
        name: 'business-show/law/manage',
        component: resolve => import('@/views/businessshow-law/manage').then(resolve),
        meta: {
          title: '定制人资管理模板',
          breadShow: true,
        },
      },
      {
        path: '/business-show/law/offline',
        name: 'business-show/law/offline',
        component: resolve => import('@/views/businessshow-law/offline').then(resolve),
        meta: {
          title: '线下服务',
          breadShow: true,
        },
      },
      {
        path: '/business-show/law/people',
        name: 'business-show/law/people',
        component: resolve => import('@/views/businessshow-law/people').then(resolve),
        meta: {
          title: '顾问服务',
          breadShow: true,
        },
      },
      /***********惠咨询**********************/
      {
        path: '/business-show/advisory',
        name: 'business-show/advisory',
        component: resolve => import('@/views/businessshow-advisory').then(resolve),
        meta: {
          title: '业务展示-惠咨询',
          breadShow: true,
        },
      },
      {
        path: '/business-show/advisory/ask',
        name: 'business-show/advisory/ask',
        component: resolve => import('@/views/businessshow-advisory/ask').then(resolve),
        meta: {
          title: '法律咨询',
          breadShow: true,
        },
      },
      {
        path: '/business-show/advisory/contract',
        name: 'business-show/advisory/contract',
        component: resolve => import('@/views/businessshow-advisory/contract').then(resolve),
        meta: {
          title: '合同服务',
          breadShow: true,
        },
      },
      {
        path: '/business-show/advisory/offline',
        name: 'business-show/advisory/offline',
        component: resolve => import('@/views/businessshow-advisory/offline').then(resolve),
        meta: {
          title: '线下服务',
          breadShow: true,
        },
      },
      /***********惠安心**********************/
      {
        path: '/business-show/safe',
        name: 'business-show/safe',
        component: resolve => import('@/views/businessshow-safe').then(resolve),
        meta: {
          title: '业务展示-惠安心',
          breadShow: true,
        }
      },
      /***********荟诉**********************/
      {
        path: '/businessshow/talk',
        name: 'business-show/talk',
        component: resolve => import('@/views/businessshow-talk').then(resolve),
        meta: {
          title: '业务展示-荟诉',
          breadShow: true,
        }
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
