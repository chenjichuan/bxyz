<template>
  <div class="layout-wp">
    <Layout class="layout">
      <Header class="main-header">
        <div class="center">
          <Logo class="logo" :src="logoImg" w="153" h="65" />
          <TobTabs class="tabs" />
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
  export default {
    components: { TobTabs, Logo },
    data () {
      return {
        logoImg
      }
    }
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
    background-color: #fff;
    padding: 30px 123px 29px 123px;
    .center {
      position: relative;
      border-bottom: 1px solid rgba(227, 227, 227, 0.3);
      display: flex;
      .logo {
        margin-right: 105px;
        margin-bottom: 14px;
      }
      .tabs {
        transform: translateY(25px)
      }
    }
  }
}
</style>
