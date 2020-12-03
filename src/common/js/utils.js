export default {
  isDev() {
    return !/guazi.com/.test(location.host)
  },
  isLocal: process.env.NODE_ENV === 'development'
}
