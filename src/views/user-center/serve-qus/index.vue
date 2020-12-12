<template>
  <div class="content">
    <div class="table">
      <TableShow
        class="car-source-table"
        :width="200"
        :columns="head"
        :table-loading="loading"
        :table-data="tableData"
        :total="page.total"
        :current="page.currentPage"
        :highlight-row="true"
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
        loading: false,
        tableData: [],
        page: {
          currentPage: 1,
          total: 0,
        },
      }
    },
    methods: {
      changePage () {},
      buttonAction () {},
    }
  }
</script>

<style scoped lang="less">
  .content {
    padding-right: 187px;
  }

</style>
