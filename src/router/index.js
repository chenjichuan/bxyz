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
          title: '首页',
        },
      },
      /***********惠法务**********************/
      {
        path: '/business-show/law',
        name: 'business-show/law',
        props: { id: 1 },
        component: resolve => import('@/views/businessshow-law').then(resolve),
        meta: {
          title: '业务展示-惠法务',
          breadShow: true,
        },
      },
      {
        path: '/business-show/law/detail',
        name: 'business-show/law/detail',
        component: resolve => import('@/views/businessshow-law/detail').then(resolve),
        meta: {
          breadShow: true,
        },
      },
      /***********惠咨询**********************/
      {
        path: '/business-show/advisory',
        name: 'business-show/advisory',
        props: { id: 2 },
        component: resolve => import('@/views/businessshow-advisory').then(resolve),
        meta: {
          title: '业务展示-惠咨询',
          breadShow: true,
        },
      },
      {
        path: '/business-show/advisory/detail',
        name: 'business-show/advisory/detail',
        component: resolve => import('@/views/businessshow-advisory/detail').then(resolve),
        meta: {
          breadShow: true,
        },
      },
      /***********惠安心**********************/
      {
        path: '/business-show/safe',
        name: 'business-show/safe',
        props: { id: 3 },
        component: resolve => import('@/views/businessshow-safe').then(resolve),
        meta: {
          title: '业务展示-惠安心',
          breadShow: true,
        }
      },
      {
        path: '/business-show/safe/detail',
        name: 'business-show/safe/detail',
        component: resolve => import('@/views/businessshow-safe/detail').then(resolve),
        meta: {
          breadShow: true,
        },
      },
      /***********荟诉**********************/
      {
        path: '/business-show/talk',
        name: 'business-show/talk',
        props: { id: 4 },
        component: resolve => import('@/views/businessshow-talk').then(resolve),
        meta: {
          title: '业务展示-荟诉',
          breadShow: true,
        }
      },
      {
        path: '/business-show/talk/detail',
        name: 'business-show/talk/detail',
        component: resolve => import('@/views/businessshow-talk/detail').then(resolve),
        meta: {
          breadShow: true,
        },
      },
      /***********专业团队**********************/
      {
        path: '/groups',
        name: 'groups',
        meta: {
          title: '专业团队',
        },
        component: resolve => import('@/views/groups').then(resolve)
      },
      /***********视频展示**********************/
      {
        path: '/videoshow',
        name: 'videoshow',
        meta: {
          title: '视频展示',
        },
        component: resolve => import('@/views/videoshow').then(resolve)
      },
      {
        path: '/filter-videos',
        name: 'filter-videos',
        meta: {},
        component: resolve => import('@/views/videoshow/filter-videos').then(resolve)
      },
      {
        path: '/videoshow/detail/:id',
        name: 'videoshow/detail',
        meta: {
          title: '视频观看',
        },
        component: resolve => import('@/views/videoshow/detail').then(resolve)
      },
      /***********宜众资讯**********************/
      {
        path: '/news',
        name: 'news',
        meta: {
          title: '宜众资讯',
        },
        component: resolve => import('@/views/news').then(resolve)
      },
      {
        path: '/news-detail/:id',
        name: 'news-detail',
        meta: {
          breadShow: true,
          title: '资讯详情',
        },
        component: resolve => import('@/views/news/detail').then(resolve)
      },
      /***********宜众资讯**********************/
      {
        path: '/call-us',
        name: 'call-us',
        meta: {
          title: '联系我们',
        },
        component: resolve => import('@/views/call-us').then(resolve)
      },
      /***********会员中心**********************/
      {
        path: '/user-center',
        name: 'user-center',
        redirect: 'user-center/member-info',
        component: resolve => import('@/views/user-center').then(resolve),
        children: [
          {
            path: '/user-center/order',
            name: 'user-center/order',
            meta: {
              title: '会员中心-我的订单',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/order').then(resolve)
          },
          {
            path: '/user-center/serve/ask',
            name: 'user-center/serve/ask',
            meta: {
              title: '我的服务-我要提问',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/serve-ask').then(resolve)
          },
          {
            path: '/user-center/serve/commo',
            name: 'user-center/serve/commo',
            meta: {
              title: '我要评价',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/serve-commo').then(resolve)
          },
          {
            path: '/user-center/serve/qus',
            name: 'user-center/serve/qus',
            meta: {
              title: '我的服务-我的问题',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/serve-qus').then(resolve)
          },
          {
            path: '/user-center/serve/qus-detail/:id',
            name: 'user-center/serve/qus-detail',
            meta: {
              title: '我的服务-我的问题',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/serve-qus/detail').then(resolve)
          },
          {
            path: '/user-center/serve/conflict',
            name: 'user-center/serve/conflict',
            meta: {
              title: '我的服务-利益冲突',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/serve-conflict').then(resolve)
          },
          {
            path: '/user-center/lawyer-detail/:id',
            name: 'user-center/lawyer-detail',
            meta: {
              title: '律师专区-服务详情',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/lawyer/detail').then(resolve)
          },
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
            path: '/user-center/about-fp/draw',
            name: 'user-center/about-fp/draw',
            meta: {
              title: '会员中心-开具发票',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/about-fp-draw').then(resolve)
          },
          {
            path: '/user-center/about-fp/his',
            name: 'user-center/about-fp/his',
            meta: {
              title: '会员中心-查看历史',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/about-fp-his').then(resolve)
          },
          {
            path: '/user-center/about-sh/return',
            name: 'user-center/about-sh/return',
            meta: {
              title: '会员中心-我要退款',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/about-sh-return').then(resolve)
          },
          {
            path: '/user-center/about-sh/is',
            name: 'user-center/about-sh/his',
            meta: {
              title: '会员中心-退款记录',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/about-sh-his').then(resolve)
          },
          {
            path: '/user-center/lawyer-list',
            name: 'user-center/lawyer-list',
            meta: {
              title: '律师专区-服务列表',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/lawyer/list').then(resolve)
          },
          {
            path: '/user-center/lawyer-detail/:id',
            name: 'user-center/lawyer-detail',
            meta: {
              title: '律师专区-服务详情',
              breadShow: true
            },
            component: resolve => import('@/views/user-center/lawyer/detail').then(resolve)
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
      /***********购物车**********************/
      {
        path: '/buket',
        name: 'buket',
        meta: {
          title: '购物车',
          breadShow: true
        },
        component: resolve => import('@/views/buket').then(resolve)
      },
      /***********搜索**********************/
      {
        path: '/search',
        name: 'search',
        meta: {
          title: '搜索结果',
          breadShow: true
        },
        component: resolve => import('@/views/search').then(resolve)
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
