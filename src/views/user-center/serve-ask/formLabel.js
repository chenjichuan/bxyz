export default [{
  key: '',
  title: '',
  items: [
    {
      key: 'sp_id',
      label: '选择服务类别',
      value: '',
      style: { width: '450px' },
      type: 'select',
      placeholder: '选择服务类别',
      children: [
        { value: 1, label: '合同', },
        { value: 2, label: '服务', },
        { value: 3, label: '线下', },
        { value: 4, label: 'vip', },
      ]
    },
    {
      key: 'is_phone',
      style: { width: '450px' },
      label: '是否需要电话沟通',
      value: '',
      type: 'select',
      placeholder: '请选择',
      children: [
        { value: 1, label: '是', },
        { value: 2, label: '否', },
      ]
    },
    {
      key: 'is_changelaw',
      style: { width: '450px' },
      label: '是否需要更换律师',
      value: '',
      type: 'select',
      placeholder: '请选择',
      children: [
        { value: 1, label: '是', },
        { value: 2, label: '否', },
      ]
    },
    {
      key: 'phone',
      label: '联系电话',
      maxlength: 11,
      style: { width: '450px' },
      value: '',
      placeholder: '请输入联系电话'
    },
    {
      key: 'content',
      label: '服务需求',
      value: '',
      inputType: 'textarea',
      placeholder: '请输入服务需求'
    },
  ]
}]
