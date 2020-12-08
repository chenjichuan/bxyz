export default {
  state: {
    breadcrumb: [
      { text: '首页', to: 'home' },
    ]
  },
  getters: {
    breadcrumb: (state) => state.breadcrumb,
  },
  mutations: {
    initBreadcrumb (state, router) {
      if (router.meta.breadShow) {
        state.breadcrumb.push({
          text: router.meta.title,
          to: router.name
        })
      }
    },
    setPushBreadcrumb(state, breadcrum) {
      state.breadcrumb.push(breadcrum)
    },
    setBreadcrumb (state, [oldRoute, newRoute]) {
      let breadcrumbOld = oldRoute.path.split('/')
      let breadcrumbNew = newRoute.path.split('/')
      if (breadcrumbNew.length > breadcrumbOld.length) {
        // 深1级
        if (newRoute.meta.breadShow) {
          state.breadcrumb.push({
            text: newRoute.meta.title
          })
        }
        return
      }
      if (breadcrumbNew.length < breadcrumbOld.length) {
        // 少几级
        state.breadcrumb.splice(breadcrumbOld.length - 2, breadcrumbOld.length - breadcrumbNew.length)
        return
      }
      if (breadcrumbNew.length === breadcrumbOld.length) {
        if (!newRoute.meta.breadShow) {
          return;
        }
        // 少几级
        if (state.breadcrumb.length > 1) {
          state.breadcrumb.pop()
          state.breadcrumb.push({
            text: newRoute.meta.title,
            to: newRoute.name
          })
        } else {
          state.breadcrumb.push({ text: newRoute.meta.title, to: newRoute.name })
        }
        return
      }
      if (state.breadcrumb.length === 0) {
        state.breadcrumb.unshift({ text: '首页', to: 'home' })
      }
    }
  },
  actions: {}
}
