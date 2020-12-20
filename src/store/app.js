import Vue from 'vue'
export default {
  state: {
    breadcrumb: []
  },
  getters: {
    breadcrumb: (state) => state.breadcrumb,
  },
  mutations: {
    initBreadcrumb (state, router) {
      const ls = Vue.prototype.$ls
      const breadcrumb = ls.get('breadcrumb') || []
      let index = -1
      breadcrumb.forEach((item, i) => {
        if (item.to === router.name) {
          index = i
        }
      })
      if (index > -1) {
        breadcrumb.splice(index + 1, breadcrumb.length - 1)
      } else {
        if (breadcrumb.length === 0) {
          breadcrumb.push({
            text:'首页',
            to: 'home'
          })
        }
        breadcrumb.push({
          text: router.query.title || router.meta.title,
          to: router.name
        })
      }
      ls.set('breadcrumb', breadcrumb)
      state.breadcrumb = breadcrumb
    },
    setBreadcrumb (state, [newRoute]) {
      const ls = Vue.prototype.$ls
      let breadcrumbNew = newRoute.name
      const { meta = {} } = newRoute
      if (newRoute.query.title) {
        meta.title = newRoute.query.title
      }
      let index = -1
      state.breadcrumb.forEach((item, i) => {
        if (item.to === breadcrumbNew) {
          index = i
        }
      })
      if (index > -1) {
        state.breadcrumb.splice(index + 1, state.breadcrumb.length - 1)
      } else {
        state.breadcrumb.push({
          text: meta.title,
          to: breadcrumbNew
        })
      }
      if (newRoute.name === 'home') {
        state.breadcrumb = [{
          text:'首页',
          to: 'home'
        }]
      }
      ls.set('breadcrumb', state.breadcrumb)
    }
  },
  actions: {}
}
