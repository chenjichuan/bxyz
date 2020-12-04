<template>
  <Tabs class="mod-top-tabs" value="">
    <TabPane v-for="item in tabs" :key="item.name" :label="item.label" :name="item.name" />
  </Tabs>
</template>

<script>
  export default {
    data () {
      return {
        tabs: [
          { label: '首页', name: '1' },
          { label: '业务展示', name: '2' },
          { label: '专业团队', name: '3' },
          { label: '视频展示', name: '4' },
          { label: '宜众资讯', name: '5' },
          { label: '联系我们', name: '6' },
        ]
      }
    }
  }
</script>

<style lang="less">
  .mod-top-tabs {
    .ivu-tabs-ink-bar {
    }
    .ivu-tabs-bar {
      border-bottom: none;
      .ivu-tabs-nav-container {
        font-weight: 400;
        font-size: 16px;
      }
      .ivu-tabs-tab-active {
      }
      .ivu-tabs-tab {
        padding: 15px 16px;
      }
    }
  }
</style>
<style lang="less" scoped>
</style>
