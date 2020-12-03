import Vue from 'vue'
import Storage from 'vue-ls'

const options = {
  namespace: 'bxyz__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local', // storage name session, local, memory
}

Vue.use(Storage, options)
