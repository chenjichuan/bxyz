export default [{
  key: '',
  title: '',
  items: [
    {
      key: '1',
      label: '选择服务类别',
      value: '',
      style: { width: '450px' },
      type: 'select',
      placeholder: '选择服务类别',
      children: [
        { value: 0, label: '是', },
        { value: 1, label: '否', },
      ]
    },
    {
      key: '2',
      style: { width: '450px' },
      label: '是否需要电话沟通',
      value: '',
      type: 'select',
      placeholder: '请选择',
      children: [
        { value: 0, label: '是', },
        { value: 1, label: '否', },
      ]
    },
    {
      key: '3',
      label: '联系电话',
      style: { width: '450px' },
      value: '',
      placeholder: '请输入联系电话'
    },
    {
      key: '34',
      label: '服务需求',
      value: '',
      inputType: 'textarea',
      placeholder: '请输入服务需求'
    },
  ]
}]