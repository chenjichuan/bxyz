// 图片验证码
export const getCaptcha = (data, message) => $HTTP.post('getCaptcha', data, message)
// 发送验证码
export const sendCode = (data, message) => $HTTP.post('sendCode', data, message)
// 购物车
export const cartList = (data, message) => $HTTP.post('cartList', data, message)

export const serach = (data, message) => $HTTP.post('serach', data, message)
export const getUserInfo = (data, message) => $HTTP.post('getUserInfo', data, message)
