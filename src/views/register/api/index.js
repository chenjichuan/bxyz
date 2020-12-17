// 个人注册
export const register = (data, message) => $HTTP.post('register', data, message)
// 律师注册
export const lawyerRegister = (data, message) => $HTTP.post('lawyerRegister', data, message)
// 单位注册
export const companyRegister = (data, message) => $HTTP.post('companyRegister', data, message)
