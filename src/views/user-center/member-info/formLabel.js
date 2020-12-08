function checkPhone (phone) {
  if (/^1[3456789]\d{9}$/.test(phone)) {
    return true
  }
}

const validatePhone = (rule, value, callback) => {
  if (checkPhone(value)) {
    callback()
  } else {
    callback(new Error('请输入正确的手机号'))
  }
}
export default [{
  key: '',
  title: '',
  items: [
    {
      key: 'phone',
      label: '手机号码',
      value: '',
      maxlength: 11,
      disabled: true,
      rules: [{
        validator: validatePhone, trigger: 'blur'
      }],
    },
    {
      key: 'username',
      label: '联系人',
      value: '奥斯特洛夫司机',
    },
    {
      key: 'local',
      label: '所在律所',
      value: '白宫',
    },
    {
      key: 'email',
      label: '电子邮箱',
      inputType: 'email',
      value: '',
      // resetKey: { label: 'content', value: 'key' },
    }]
}]
