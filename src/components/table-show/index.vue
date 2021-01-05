<template>
  <div id="tabelShow" ref="tabelShow">
    <Table
      id="main-table"
      border
      :highlight-row="highlightRow"
      :width="tableWidth"
      :loading="tableLoading"
      :columns="columnsReal"
      :data="tableData"
      @on-sort-change="onSortChange">
      <template v-for="item in slotHead" :slot="item.slot" slot-scope="{ row }">
        <div :key="item.key" @click="$emit('single-click', [row, item.key])">
          <template v-if="item.type && item.type === 'url'">
            <a :href="row[item.slot]" target="_blank">{{ row[item.key] }}</a>
          </template>
          <template v-else>
            <template v-if="item.badge">
              <template v-if="item.absolute">
                <span v-if="!row[item.badgeKey]" class="corner-star-text">{{ item.badge }}</span>
              </template>
              <template v-else>
                <span v-if="row[item.badgeKey]" class="corner-star-text">{{ item.badge }}</span>
              </template>
            </template>

            <template v-if="item.tooltip">
              <Tooltip
                :transfer="true"
                :content="row[item.key]"
                class="ivu-table-cell-tooltip"
                placement="top-start"
                max-width="200">
                <div class="tooltip-row">
                <span>
                  {{ tableFilter(row, item.key) }}
                </span>
                </div>
              </Tooltip>
            </template>
            <template v-else>
              {{ tableFilter(row, item.key, item) }}
            </template>
          </template>
        </div>
      </template>
      <!--<template slot="action" slot-scope="{ row, index }">-->
      <template slot="action" slot-scope="{ row }">
        <Row
          type="flex" :gutter="0"
          :style="{justifyContent: slotAction[0].list.length === 1 ? 'center' : 'left'}">
          <template v-for="button in slotAction[0].list">
            <Col
              v-if="!button.showFn || button.showFn(row, button.key)"
              :key="button.key"
              :span="slotAction[0].list.length > 1 ? 10 : 24"
              style="margin: 5px 0;text-align: left;">
              <template v-if="button.type && button.type === 'radio'">
                <audio
                  v-if="row[button.key]"
                  :key="button.key"
                  controls="controls"
                  style="width:264px;"
                >
                  <source :src="row[button.key]" type="audio/mpeg">
                  Your browser does not support the audio element.
                </audio>
                <span v-else :key="button.key">--</span>
              </template>
              <template v-else>
                <Button
                  :key="button.key"
                  size="small" type="text"
                  style="color: #42b983"
                  @click="onButtonClicked(button.key, row)">{{ button.name }}
                </Button>
              </template>
            </Col>
          </template>
        </Row>
      </template>
    </Table>
    <div v-show="total" style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page
          show-total
          prev-text="上一页"
          next-text="下一页"
          :page-size="pageSize"
          :total="total" :current="current" @on-change="changePage" />
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * Table 参数
   * @param {columns} 表头
   * @param {data} 表格数据
   * @param {loading} 表格是否加载中
   * @methods { @key-filter} 需要回显处理的数据
   * @methods { @single-click} 单击某个单元的回调方法
   */
  import _ from 'lodash'
  import elementResizeDetectorMaker from 'element-resize-detector'

  const erd = elementResizeDetectorMaker()

  export default {
    props: {
      tableLoading: {
        type: Boolean,
        default: false
      },
      columns: {
        type: Array,
        default: () => []
      },
      tableData: {
        type: Array,
        default: () => []
      },
      pageSize: {
        type: Number,
        default: 10
      },
      total: {
        type: Number,
        default: 0
      },
      current: {
        type: Number,
        default: 1
      },
      highlightRow: {
        type: Boolean,
        default: false
      },
    },
    data () {
      return {
        tableWidth: ''
      }
    },
    computed: {
      slotHead () {
        return this.columns.filter(item => !!item.slot)
      },
      slotAction () {
        return this.columns.filter(item => item.slot === 'action')
      },
      columnsReal () {
        const columns = this.columns.map(item => {
          if (item.width) {
            item.widthBk = item.width // 备份单元格宽度后面用得到
          }
          return item
        })
        columns.forEach(item => {
          if (!item.type) {
            return
          }
          /** render和slot的html互斥 **/
          switch (item.type) {
            case 'clicked': // 未点击过有颜色,点击过置灰
              item.render = (h, params) => {
                const row = params.row
                let spanClass = 'corner-star-text '
                if (row.called) {
                  spanClass = spanClass.concat('hide')
                }
                let color = row.touched ? 'rgba(66, 185, 131, 0.6)' : '#42b983'
                color = row.disable ? '#c5c8ce' : color
                return h('div', {},
                  [
                    h('a', {
                      style: {
                        color: color
                      },
                      on: {
                        'click': () => {
                          this.$set(row, 'touched', true)
                          this.$emit('single-click', [row, item.key])
                        }
                      }
                    }, row[item.key]),

                    h('span', { class: spanClass }, '未联系'),
                  ])
              }
              break

            case 'light': // 高亮
              item.render = (h, params) => {
                const row = params.row
                return h('a', {
                  style: {
                    color: '#42b983'
                  },
                  on: {
                    'click': () => {
                      this.$emit('single-click', [row, item.key])
                    }
                  }
                }, row[item.key])
              }
              break
            case 'action':
              break
          }
        })
        return this.columns
      },
    },

    watch: {},
    mounted () {
      let allWith = 0
      let fixedArr = []
      this.columns.forEach((item, index) => {
        let width = typeof item.width !== 'number' ? 0 : item.width
        allWith += width
        if (item.fixed) {
          fixedArr.push({ index, value: item.fixed })
        }
      })
      const el = this.$refs['tabelShow']
      const that = this
      const listener = _.debounce(function (element) {
        let width = element.offsetWidth
        that.tableWidth = width
        if (allWith <= width) { // 自定义的宽度相加小于总宽度，无需左侧fixed, 单元格自适应
          fixedArr.forEach(intender => {
            that.$set(that.columns[intender.index], 'fixed', '')
          })
          that.$set(that.columns, 'fixed', 'noneed')
          that.columns.forEach(item => {
            if (item.slot !== 'action') {
              that.$set(item, 'width', '')
            }
          })
        } else { // 自定义的宽度相加大于总宽度，需要fixed
          fixedArr.forEach(intender => {
            that.$set(that.columns[intender.index], 'fixed', intender.value)
          })
          that.$set(that.columns, 'fixed', '')
          that.columns.forEach(item => {
            that.$set(item, 'width', item.widthBk)
          })
        }
      }, 200)
      erd.listenTo(el, listener)
    },

    beforeDestroy () {
      erd.removeAllListeners(this.$refs['tabelShow'])
    },
    methods: {
      /** 数据需要二次加工使用 key-filter 来自父组件事件，回调函数形式 **/
      tableFilter (row, key, item) {
        let display = row[key]
        this.$emit('key-filter', [row, key], (displayData) => {
          display = displayData
        })
        return display || item.default
      },
      /** 分页回调 **/
      changePage (page) {
        this.$emit('on-pageChange', page)
      },
      /** 表格筛选回调 **/
      onSortChange (data) {
        this.$emit('on-sort-change', data)
      },
      /** 操作按钮点击 **/
      onButtonClicked (button, row) {
        this.$emit('on-button-click', button, row)
      }
    }
  }
</script>

<style lang="less">
  #tabelShow {
    .ivu-page-prev, .ivu-page-next {
      background: transparent;
    }
    .corner-star-text {
      position: absolute;
      top: 0;
      right: 0;
      padding: 2px;
      font-size: 12px;
      line-height: 12px;
      color: #fff;
      background: #42b983;
    }
  }

  #main-table {
    .ivu-table-row-highlight td {
      background-color: #cee2ef;
    }
    .ivu-table-border td {
      position: relative;
    }
  }
</style>
<style scoped lang="less">
  .tooltip-row {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
