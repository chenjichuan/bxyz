export default function (type) {
  const labels = [
    {
      key: 'phone',
      label: '手机号码',
      value: '',
      maxlength: 11,
      disabled: true,
    },
    {
      key: 'email',
      label: '电子邮箱',
      inputType: 'email',
      value: ''
    }]
  if (+type === 2) { // 单位
    labels.push({
      key: 'company_linkman',
      label: '联系人',
      value: '',
    })
  }
  if (+type === 3) { // 律师
    labels.push({
      key: 'law_office',
      label: '所在律所',
      value: '',
    })
  }
  return [{
    key: '',
    title: '',
    items: labels
  }]
}
