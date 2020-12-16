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
  },
  actions: {}
}
