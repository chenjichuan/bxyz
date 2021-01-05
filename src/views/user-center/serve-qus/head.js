export default [
  { key: 'id', title: '系统编号', width: 120, fixed: 'left', align: 'center' },
  { key: 'question_type', title: '服务类型', width: 120, align: 'center' },
  { key: 'content', title: '问题描述', width: 150, align: 'center' },
  { key: 'created_at', title: '提问时间', width: 150, align: 'center' },
  { key: 'updated_at', title: '回复时间', width: 100, align: 'center' },
  { key: 'status', title: '状态', width: 100, slot: 'status', align: 'center' },
  {
    slot: 'action',
    title: '操作',
    fixed: 'right',
    align: 'center',
    width: 200,
    list: [
      {
        key: '1',
        name: '查看详情',
      },
      { key: '2',
        name: '撤销申请',
        showFn: (row) => {
          return row.status === 1
        }
      },
    ]
  },
]
