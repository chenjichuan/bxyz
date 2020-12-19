export default [
  { key: 'clueId', title: '系统编号', width: 120, type: 'light', fixed: 'left' },
  { key: 'title', title: '服务类型', width: 120, },
  { key: 'licenseDate', title: '问题描述', width: 150, },
  { key: 'cityName', title: '提问时间', width: 150, },
  { key: 'roadHaul', title: '回复时间', width: 100, },
  { key: 'sourceTypeName', title: '状态', width: 100, },
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
          return row.taskStatus !== 3 && row.taskStatus !== 2
        }
      },
    ]
  },
]
