"use strict";

import Vue from 'vue';
import axios from "axios";
let config = {
  baseURL: '//zhucan.209.qiyundongli.cn/api/',
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};
const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    if (Vue.ls.get('token')) {
      config.data.append('token', Vue.ls.get('token'))
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);


const doAjax = ({ type, url, data, resolve, reject }) => {
  const { $Message } = Vue.prototype
  _axios[type](url, data).then(response => {
    if (response.data.code === 200) {
      resolve(response.data)
    } else {
      $Message.error(response.data.message);
      reject(response.data)
    }
  }).catch((error) => {
    let message = error.message
    const { response: { data = {} } } = error
    const { errors } = data
    if (errors) {
      let errArr = []
      for (let key in errors) {
        errArr.push(errors[key])
      }
      $Message.error({
        background: true,
        duration: 3,
        render: h => {
          return h('div', errArr.map(item => {
            return  [
              h('p', {}, item),
            ]
          }))
        }
      });
    } else {
      try {
        if (error.response.data.message) {
          message = error.response.data.message
        }
      } catch (e) {
        console.log(e)
      }
      $Message.error(message);
    }

    // Vue.prototype.$Notice.error({
    //   title: '错误',
    //   desc: `${message}: ${error}`,
    //   duration: 4,
    // })
    reject(error)
  })
}

const api = (type, url, data) => {
  const p = new Promise((resolve, reject) => {
    doAjax({ type: type.toLowerCase(), url, data, resolve, reject })
  })
  return p
}
/* 封装请求 */
const $http = {
  get (url, data, message) {
    return api('get', url, { params: data }, message)
  },
  post (url, data, message) {
    let formData = new FormData()
    for (let key in data) {
      formData.append(key, data[key])
    }
    // return api('post', url, qs.stringify(data), message)
    return api('post', url, formData, message)
  }
}

Plugin.install = function (Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios;
      }
    },
    $axios: {
      get () {
        return _axios;
      }
    },
  });
}
Vue.use(Plugin)
window.$HTTP = $http
export default Plugin;
