export const addCart = (data, message) => $HTTP.post('addCart', data, message)
export const getcartList = (data, message) => $HTTP.post('cartList', data, message)
export const productDetail = (data, message) => $HTTP.post('productDetail', data, message)

