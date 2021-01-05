export default function (userInfo) {
  let { type, phone, email, company_linkman, law_office } = userInfo
  const labels = [
    {
      key: 'phone',
      label: '手机号码',
      value: phone,
      maxlength: 11,
      disabled: true,
    }]
  if (+type === 1) {
    labels.push({
      key: 'email',
      label: '电子邮箱',
      inputType: 'email',
      value: email
    })
  }
  if (+type === 2) { // 单位
    labels.pop()
    labels.push({
      key: 'company_linkman',
      label: '联系人',
      value: company_linkman,
    })
    labels.push({
      key: 'email',
      label: '电子邮箱',
      inputType: 'email',
      value: email
    })
  }
  if (+type === 3) { // 律师
    labels.push({
      key: 'law_office',
      label: '所在律所',
      value: law_office,
    })
    labels.push({
      key: 'email',
      label: '电子邮箱',
      inputType: 'email',
      value: email
    })
  }
  return [{
    key: '',
    title: '',
    items: labels
  }]
}
