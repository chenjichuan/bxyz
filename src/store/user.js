import Vue from 'vue'
export default {
  state: {
    userInfo: {}
  },
  getters: {
    userInfo: (state) => state.userInfo,
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo =  Object.assign(state.userInfo, data)
    },
    clearUserInfo(state, cb) {
      const ls = Vue.prototype.$ls
      state.userInfo = {}
      ls.set('userInfo', '')
      setTimeout(() => {
        cb && cb()
      }, 500)
    },
  },
  actions: {}
}
