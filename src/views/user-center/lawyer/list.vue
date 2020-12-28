<template>
  <div>
    <Tabs v-model="tab" :animated="false" @on-click="getData">
      <TabPane label="全部订单" name="1" />
      <TabPane label="待支付" name="2" />
      <TabPane label="已支付" name="3" />
      <TabPane label="已失效" name="4" />
    </Tabs>
    <div class="table">
      <TableShow
        class="car-source-table"
        :width="200"
        :columns="head"
        :table-loading="loading"
        :table-data="tableData"
        @on-pageChange="changePage"
        @on-button-click="buttonAction"
      />
    </div>
    <Modal v-model="modal" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>提示</span>
      </p>
      <div style="text-align:center">
        <p>是否确认撤销申请？</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long @click="del">撤销</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import TableShow from '@/components/table-show'
  import head from './head'
  import { mapGetters } from 'vuex'
  import { lawQuestionList, userCancelQuiz} from './api'
  export default {
    components: {
      TableShow,
    },
    data () {
      return {
        head,
        tab: '1',
        modal: false,
        active: {},
        loading: false,
        tableData: [{
          clueId: '48237849',
          title: '惠法务法律咨询-其它咨询',
          licenseDate: '残疾人就业保障金办理流程是什么？',
          cityName: '2020-06-08',
          roadHaul: '2020-06-08',
          sourceTypeName: '待审核',
        }],
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    mounted () {
      this.getData()
    },
    methods: {
      changePage () {},
      getData(key) {
        lawQuestionList({
          u_id: this.userInfo.id,
          type: key || this.tab,
        }).then(res => {
          console.log(res)
          if (typeof res.data === 'string') {
            this.$Message.info(res.data)
          } else {
            this.list = res.data
          }
        })
      },
      buttonAction (id, obj) {
        this.active = obj
        if (id === '1') {
          this.$router.push({
            name: 'user-center/lawyer-detail',
            params: { id: obj.clueId }
          })
        }
        if (id === '2') {
          this.modal = true
        }
      },
      del () {
        this.modal = false
        userCancelQuiz({
          u_id: this.userInfo.id,
          q_id: this.active.clueId
        })
      }
    }
  }
</script>

<style scoped>

</style>
