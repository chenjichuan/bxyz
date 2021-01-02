<template>
  <div class="mod-user-center">
    <Layout style="padding-bottom: 100px;background-color: #fff;">
      <Sider hide-trigger width="330" style="margin-right: 30px;">
        <Menu class="menu" :active-name="$route.name" width="330px"
              :open-names="openNames"
              accordion
              @on-select="menuClick">
          <MenuGroup title="会员中心">
            <template v-for="(item) in menu">
              <template v-if="item.sub">
                <Submenu :key="item.name" :name="item.name">
                  <div slot="title" class="submenu" style="display:flex;align-items: center;">
                    <Icons :type="item.icon" w="20" h="20" />
                    <p class="menu-name">{{ item.text }}</p>
                  </div>
                  <MenuItem v-for="s in item.sub" :key="s.name" :name="s.name">
                    <div style="display:flex;align-items: center;">
                      <p class="menu-name">{{ s.text }}</p>
                    </div>
                  </MenuItem>
                </Submenu>
              </template>
              <template v-else>
                <MenuItem :key="item.name" :name="item.name">
                  <div style="display:flex;align-items: center;">
                    <Icons :type="item.icon" w="20" h="20" />
                    <p class="menu-name">{{ item.text }}</p>
                  </div>
                </MenuItem>
              </template>
            </template>
          </MenuGroup>
        </Menu>
      </Sider>
      <Content>
        <router-view />
      </Content>
    </Layout>

  </div>
</template>

<script>
  import Icons from '@/components/icon'

  export default {
    components: { Icons },
    data () {
      return {
        menu: [
          { text: '我的订单', name: 'user-center/order', icon: 'order' },
          { text: '我的服务', name: 'user-center/serve', icon: 'fw',
            sub: [
              { text: '我要提问', name: 'user-center/serve/ask', },
              { text: '我的问题', name: 'user-center/serve/qus', },
              { text: '利益冲突', name: 'user-center/serve/conflict', }
            ]
          },
          { text: '会员资料', name: 'user-center/member-info', icon: 'zl' },
          { text: '实名认证', name: 'user-center/check-id', icon: 'id' },
          { text: '密码修改', name: 'user-center/reset-pass', icon: 'lock' },
          {
            text: '关于发票', name: 'user-center/about-fp', icon: 'fp',
            sub: [
              { text: '开具发票', name: 'user-center/about-fp/draw', },
              { text: '查看历史', name: 'user-center/about-fp/his', }
            ]
          },
          {
            text: '关于售后', name: 'user-center/about-sh', icon: 'server',
            sub: [
              { text: '我要退款', name: 'user-center/about-sh/return', },
              { text: '退款记录', name: 'user-center/about-sh/his', }
            ]
          },
          {
            text: '律师专区', name: 'user-center/lawyer-list', icon: 'pass',
            sub: [
              { text: '服务列表', name: 'user-center/lawyer-list', },
            ]
          },
        ]
      }
    },
    computed: {
      openNames () {
        let name = this.$route.name
        this.menu.forEach(item => {
          if (name.indexOf(item.name) > -1) {
            if (item.name.length < name.length) {
              name = name.split('/')
              name.pop()
              name = name.join('/')
            }
          }
        })
        return [name]
      }
    },
    methods: {
      menuClick (name) {
        if (name !== this.$route.name) {
          this.$router.push({ name })
        }
      }
    }
  }
</script>

<style lang="less">
  .mod-user-center {
    .ivu-input {
      height: 40px;
    }
    .ivu-menu-item-group-title{
      font-size: 20px;
      font-weight: bold;
      line-height: 28px;
      color: #82A694;
      padding-top: 18px;
      padding-left: 40px;
      padding-bottom: 44px;
      display: block;
    }
    ivu-menu-submenu-title {

    }
    .ivu-menu-vertical.ivu-menu-light:after {
      display: none;
    }
    .ivu-layout-sider {
      background-color: transparent;
    }
    .ivu-menu-item-selected {
      .menu-name {
        /*color: #fff!important;*/
      }
    }
  }

</style>
<style scoped lang="less">
  .menu {
    padding-bottom: 345px;
    background: #F5FFFA;

    .menu-name {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      margin-left: 14px;
      color: #82A694;
    }
    .submenu {
      margin-left: 0;
    }
  }
</style>
