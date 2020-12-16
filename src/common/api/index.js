// 图片验证码
export const getCaptcha = (data, message) => $HTTP.post('getCaptcha', data, message)
// 发送验证码
export const sendCode = (data, message) => $HTTP.post('sendCode', data, message)
