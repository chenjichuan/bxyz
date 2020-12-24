<template>
  <Tabs class="mod-top-tabs" :value="$route.name" @on-click="tabClickHandler">
    <TabPane v-for="item in tabs" :key="item.name" :label="item.labelRender || item.label" :name="item.name" />
  </Tabs>
</template>

<script>
  export default {
    data () {
      const _this = this
      return {
        tabs: [
          { label: '首页', name: 'home' },
          {
            name: '-1',
            labelRender (h) {
              return h('Dropdown', { props: { transfer: true, trigger: 'click' } }, [
                h('div', { className: 'ivu-tabs-tab' }, '业务展示'),
                h('DropdownMenu',
                  {
                    slot: 'list',
                    on: {
                    },
                    nativeOn: {
                      'click' (e) {
                        const { target } = e
                        const { name } = target.dataset
                        if (_this.$route.name !== name) {
                          _this.$router.push({ name })
                        }
                      },
                    }
                  },
                  [
                    h('DropdownItem', { attrs: { 'data-name': 'business-show/law' } }, '惠法务'),
                    h('DropdownItem', { attrs: { 'data-name': 'business-show/advisory'} }, '惠咨询'),
                    h('DropdownItem', { attrs: { 'data-name': 'business-show/safe'} }, '惠安心'),
                    h('DropdownItem', { attrs: { 'data-name': 'business-show/talk'} },'荟诉'),
                  ])
              ])
            }
          },
          { label: '专业团队', name: 'groups' },
          { label: '视频展示', name: 'videoshow' },
          { label: '宜众资讯', name: 'news' },
          { label: '联系我们', name: 'call-us' },
        ]
      }
    },
    methods: {
      tabClickHandler (name) {
        if (name === this.$route.name) return
        if (name !== '-1')
          this.$router.push({ name })
      }
    }
  }
</script>

<style lang="less">
  .mod-top-tabs {
    .ivu-tabs-tab-active {
      color: #fff;
    }

    .ivu-tabs-tab:hover {
      color: #fff;
    }

    .ivu-tabs-ink-bar {
      background-color: #fff;
    }
    .ivu-tabs-bar {
      border-bottom: none;

      .ivu-tabs-nav-container {
        font-weight: 400;
        font-size: 16px;
        color: #D4FFE9;
      }
      .ivu-tabs-tab {
        padding: 15px 16px;
      }
    }
  }
</style>
<style lang="less" scoped>
</style>
