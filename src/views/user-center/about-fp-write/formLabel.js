export default [{
  key: '',
  title: '',
  items: [
    {
      key: 'username',
      label: '发票类型',
      value: 0,
      type: 'select',
      placeholder: '请选择',
      required: true,
      style: { width: '270px' },
      children: [
        { value: 0, label: '电子发票', },
      ]
    },
    {
      key: 'type',
      label: '抬头类型',
      required: true,
      value: 0,
      type: 'radio',
      placeholder: '请选择',
      children: [
        { value: 0, label: '个人', },
        { value: 1, label: '单位', },
      ]
    },
    {
      key: 'title',
      label: '发票抬头',
      required: true,
      value: '',
      placeholder: '请输入发票抬头'
    },
    {
      key: 'number',
      label: '单位税号',
      required: true,
      value: '',
      placeholder: '请输入单位税号'
    },
    {
      key: 'content',
      label: '发票内容',
      style: { width: '270px' },
      value: 0,
      type: 'select',
      placeholder: '请选择',
      required: true,
      children: [
        { value: 0, label: '服务费', },
        { value: 1, label: '餐饮费', },
      ]
    },
    {
      key: 'email',
      label: 'E-mail地址',
      required: true,
      inputType: 'email',
      value: '',
      placeholder: '请输入电子邮箱地址'
    },
    {
      key: 'phone',
      label: '电话',
      value: '',
      placeholder: '请输入您的手机号码'
    },
    {
      key: '3',
      label: '开户行',
      value: '',
      placeholder: '请输入开户行'
    },
    {
      key: 'num31',
      label: '开户行号',
      value: '',
      placeholder: '请输入开户行号'
    },
  ]
}]
