<template>
  <div class="layout-wp">
    <Layout class="layout">
      <Header class="main-header">
        <div class="center">
          <Logo class="logo" :src="logoImg" w="153" h="65" />
          <TobTabs class="tabs" />
          <Actions />
        </div>
      </Header>
      <Content class="main-content">
        Content
      </Content>
      <Footer class="main-footerr">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>

<script>
  import logoImg from '@/assets/images/logos/logo.png'
  import Logo from '@/components/logo'
  import TobTabs from './components/tabs'
  import Actions from './components/actions'
  export default {
    components: { TobTabs, Logo, Actions },
    data () {
      return {
        logoImg
      }
    },

  }
</script>

<style scoped lang="less">
.layout-wp {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .layout {
    min-height: 100%;
  }
  .main-header {
    height: auto;
    background: #82A694;
    padding: 30px 6.4% 30px 6.4%;
    .center {
      position: relative;
      /*border-bottom: 1px solid rgba(227, 227, 227, 0.3);*/
      display: flex;
      .logo {
        margin-right: 7.8%;
        margin-bottom: 14px;
        flex-shrink: 0;
      }
      .tabs {
        transform: translateY(26px);
        min-width: 640px;
        margin-right: 2.9%;
      }
    }
  }
}
</style>
