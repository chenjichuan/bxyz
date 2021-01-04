export const subQuiz = (data, message) => $HTTP.post('subQuiz', data, message)
export const questionList = (data, message) => $HTTP.post('questionList', data, message)
export const userCancelQuiz = (data, message) => $HTTP.post('userCancelQuiz', data, message)
export const userGetQuesDetail = (data, message) => $HTTP.post('userGetQuesDetail', data, message)
