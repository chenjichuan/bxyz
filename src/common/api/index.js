// 注册
export const register = (data, message) => $HTTP.post('register', data, message)
// 图片验证码
export const getCaptcha = (data, message) => $HTTP.post('getCaptcha', data, message)
