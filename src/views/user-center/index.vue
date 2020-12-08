<template>
  <div class="mod-user-center">
    <Layout style="padding-bottom: 100px;background-color: #fff;">
      <Sider hide-trigger width="330" style="margin-right: 30px;">
        <Menu class="menu" :active-name="$route.name" width="330px" @on-select="menuClick">
          <MenuGroup title="会员中心">
            <template v-for="item in menu">
              <template v-if="item.sub">
                <Submenu name="2" :key="item.name">
                  <template slot="title">
                    <Icons :type="item.icon" w="20" h="20" />
                    {{ item.text }}
                  </template>
                  <MenuItem  v-for="s in item.sub" :name="s.name" :key="s.name">
                    <div style="display:flex;align-items: center;">
                      <p class="menu-name">{{ s.text }}</p>
                    </div>
                  </MenuItem>
                </Submenu>
              </template>
              <template v-else>
                <MenuItem  :name="item.name" :key="item.name">
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
          // { text: '我的订单', name: 'user-center/order', icon: 'order' },
          // { text: '我的服务', name: 'user-center/serve', icon: 'fw' },
          { text: '会员资料', name: 'user-center/member-info', icon: 'zl' },
          { text: '实名认证', name: 'user-center/check-id', icon: 'id' },
          { text: '密码修改', name: 'user-center/reset-pass', icon: 'lock' },
          {
            text: '关于发票', name: 'user-center/about-fp', icon: 'fp',
            sub: [
              { text: '开具发票', name: '1a', },
              { text: '填写信息', name: '312p', },
              { text: '查看历史', name: '3q2', }
            ]
          },
          { text: '关于售后', name: 'user-center/about-sh', icon: 'server' },
        ]
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
    .ivu-menu-item-group-title {
      font-size: 20px;
      font-weight: bold;
      line-height: 28px;
      color: #82A694;
      padding-top: 18px;
      padding-left: 40px;
      padding-bottom: 44px;
      display: block;
    }

    .ivu-menu-vertical.ivu-menu-light:after {
      display: none;
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
  }
</style>
