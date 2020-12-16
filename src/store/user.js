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
      state.userInfo = data
      const { token } = data
      const ls = Vue.prototype.$ls
      token && ls.set('token', token)
    },
    clearUserInfo(state, cb) {
      const ls = Vue.prototype.$ls
      state.userInfo = {}
      ls.set('token', '')
      setTimeout(() => {
        cb && cb()
      }, 500)
    },
  },
  actions: {}
}
