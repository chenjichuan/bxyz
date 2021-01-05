export default [{
  key: '',
  title: '',
  items: [
    {
      key: 'type',
      label: '发票类型',
      value: 0,
      type: 'select',
      placeholder: '请选择',
      required: true,
      style: { width: '270px' },
      children: [
        { value: 1, label: '电子发票', },
        { value: 2, label: '纸质', },
      ]
    },
    {
      key: 'taitou_type',
      label: '抬头类型',
      required: true,
      value: 0,
      type: 'radio',
      placeholder: '请选择',
      children: [
        { value: 1, label: '个人', },
        { value: 2, label: '单位', },
      ]
    },
    {
      key: 'taitou',
      label: '发票抬头',
      required: true,
      value: '',
      placeholder: '请输入发票抬头'
    },
    {
      key: 'unit_num',
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
        { value: 1, label: '服务费', },
        { value: 2, label: '咨询费', },
        { value: 3, label: '顾问费', },
        { value: 4, label: '培训费', },
      ]
    },
    {
      key: 'email',
      label: 'E-mail地址',
      inputType: 'email',
      value: '',
      placeholder: '请输入电子邮箱地址'
    },
    {
      key: 'address',
      label: '发货地址',
      value: '',
      placeholder: '请输入发货地址'
    },
    {
      key: 'line',
      type: 'ness'
    },
    {
      key: 'phone',
      label: '电话',
      value: '',
      placeholder: '请输入您的手机号码'
    },
    {
      key: 'opening_back',
      label: '开户行',
      value: '',
      placeholder: '请输入开户行'
    },
    {
      key: 'back_account',
      label: '开户行号',
      value: '',
      placeholder: '请输入开户行号'
    },
  ]
}]
