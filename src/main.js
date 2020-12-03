import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/axios'
import './plugins/iview'
import './plugins/vueLs'

Vue.config.productionTip = !eval(process.env.VUE_APP_IS_DEV)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
