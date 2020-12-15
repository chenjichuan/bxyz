"use strict";

import Vue from 'vue';
import axios from "axios";
// import qs from 'qs'
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

let config = {
  baseURL: '//a.chen.cc/api/',
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
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
};

Vue.use(Plugin)
const doAjax = ({ type, url, data, resolve, reject }) => {
  console.log(data)
  _axios[type](url, data).then(response => {
    if (response.data.code === 200) {
      resolve(response.data)
    } else {
      reject(response.data)
    }
  }).catch((error) => {
    // Bus.$Notice.error({
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
    return api('post', url, formData, message)
  }
}
window.$HTTP = $http
export default Plugin;
