import Vue from 'vue'
import Vuex from 'vuex'
// import user from './module/user'
import app from './app'
import user from './user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app,
    user
  }
})
