<template>
  <div>
    <div class="table">
      <TableShow
        class="car-source-table"
        :width="200"
        :columns="head"
        :table-loading="loading"
        :table-data="tableData"
        :total="page.total"
        :current="page.currentPage"
        @on-pageChange="changePage"
        @on-button-click="buttonAction"
      />
    </div>
  </div>
</template>

<script>
  import TableShow from '@/components/table-show'
  import head from './head'

  export default {
    components: {
      TableShow,
    },
    data () {
      return {
        head,
        modal: false,
        loading: false,
        tableData: [{
          clueId: '48237849',
          title: '惠法务法律咨询-其它咨询',
          licenseDate: '残疾人就业保障金办理流程是什么？',
          cityName: '2020-06-08',
          roadHaul: '2020-06-08',
          sourceTypeName: '待审核',
        }],
        page: {
          currentPage: 1,
          total: 0,
        },
      }
    },
    methods: {
      changePage () {},
      buttonAction (id, obj) {
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
      sure () {
        console.log(22)
      }
    }
  }
</script>

<style scoped>

</style>
