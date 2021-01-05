<template>
  <div class="content">
    <div class="msg">
      <Row type="flex">
        <Col>会员卡到期时间：<span class="red">2020-06-08</span><Button type="primary" class="xf">续费</Button></Col>
        <Col style="margin-right: 137px;">法律服务剩余使用次数：<span class="red">28次</span></Col>
        <Col>合同审查剩余使用次数：：<span class="red">8次</span></Col>
      </Row>
    </div>
    <div class="table">
      <TableShow
        class="car-source-table"
        :width="200"
        :columns="head"
        :table-loading="loading"
        :table-data="tableData"
        :total="page.total"
        :current="page.page"
        @key-filter="keyFilter"
        @on-pageChange="changePage"
        @on-button-click="buttonAction"
      />
    </div>
    <Modal
      v-model="modal"
      class-name="top-modal"
      title="撤销服务申请"
      ok-text="确定"
      cancel-text="取消"
      @on-ok="sure">
      <p class="first">您确定要撤销服务申请吗？如撤销，请点击确定。</p>
      <p class="second">说明：已经撤销的服务将无法恢复，如有服务需要，请重新提交服务请求。</p>
    </Modal>
  </div>
</template>

<script>
  import TableShow from '@/components/table-show'
  import head from './head'
  import { questionList, userCancelQuiz } from './api'
  import { mapGetters } from "vuex";
  export default {
    components: {
      TableShow,
    },
    data () {
      return {
        head,
        modal: false,
        loading: false,
        tableData: [],
        currentObj: {},
        page: {
          page: 1,
          page_num: 1000,
        },
      }
    },
    computed: {
      ...mapGetters(['userInfo']),
    },
    mounted () {
     this.getData()
    },
    methods: {
      keyFilter ([obj, key], callback) {
        console.log(obj, key)
        let text = obj[key]
        if (key === 'status') {
          // switch (+obj[key]) {
          //   case 1: text = '' break;
          //   case 2: break;
          //   case 3: break;
          // }
          text = 'status=' + text + '代表什么？'
        }
        callback && callback(text)
      },
      getData () {
        questionList({
          ...this.page,
          u_id: this.userInfo.id,
        }).then(res => {
          this.tableData = res.data
        })
      },
      changePage () {},
      buttonAction (id, obj) {
        if (id === '1') {
          this.$router.push({
            name: 'user-center/serve/qus-detail',
            params: {
              ...obj
            },
            query: {
              content: obj.content,
              q_id: obj.q_id,
            }
          })
        }
        if (id === '2') {
          this.modal = true
          this.currentObj = obj
        }
      },
      sure () {
        userCancelQuiz({
          u_id: this.userInfo.id,
          q_id: this.currentObj.q_id
        }).then(() => {
          this.getData()
        })
      }
    }
  }
</script>

<style lang="less">
  .top-modal {
    .ivu-btn-primary {
      background-color: #189Dff;
      border: none;
    }
    .ivu-modal-content {
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 24px;
    }
    .ivu-modal-header,.ivu-modal-footer {
      border:none;
    }
    .ivu-modal-header-inner {
      font-size: 21px;
      color: rgba(0, 0, 0, 0.85);
    }
    .first {
      font-size: 16px;
      line-height: 35px;
      color: rgba(0, 0, 0, 0.65);
    }
    .second {
      font-size: 11px;
      line-height: 15px;
      color: rgba(0, 0, 0, 0.85);
      margin-top: 13px;
    }
  }
</style>
<style scoped lang="less">
  .content {
    padding-right: 187px;
    .msg {
      margin-bottom: 60px;
      border: 1px solid #C8C8C8;
      padding: 18px 13px 21px 13px;
      width: 1100px;
      >div {
        align-items:center;
        .red {
          font-size: 16px;
          color: #FF0000;
        }
        .xf {
          width: 89px;
          height: 30px;
          border-radius: 15px;
          margin-left: 33px;
          margin-right: 143px;
        }
      }
    }

  }
</style>
