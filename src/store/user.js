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
    },
  },
  actions: {}
}
