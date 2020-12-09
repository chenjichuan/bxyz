
// 是否开发模式
const isDev = (process.env.NODE_ENV || '').indexOf('dev') !== -1
process.env.VUE_APP_IS_DEV = `${isDev}`
// 服务端接口base地址

module.exports = {
  lintOnSave: undefined,
  configureWebpack: {
    plugins: []
  },
  chainWebpack: config =>{
    config.plugin('html')
      .tap(args => {
        args[0].title = "百行宜众";
        return args;
      })
  },
}
