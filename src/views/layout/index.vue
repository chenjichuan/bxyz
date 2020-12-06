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
        <router-view />
      </Content>
      <Footer class="main-footer">
        <div class="links">
          <p>友情链接</p>
          <ul>
            <li v-for="(item, index) in links" :key="index">
              <Button :to="item.to" target="_blank" type="text">{{ item.name }}</Button>
            </li>
          </ul>
        </div>
        <div class="copy-right">
          <ul>
            <template v-for="(item, index) in cotyRgiht">
              <li v-if="item.type==='line'" :key="index" style="width: 1px; height: 16px;background-color: #fff;" />
              <li v-else :key="index">
                <Button class="white" :to="item.to" target="_blank" type="text">{{ item.name }}</Button>
              </li>
            </template>

          </ul>
          <p>POWER BY 百行宜众 京ICP17041086号</p>
        </div>
      </Footer>
    </Layout>
  </div>
</template>

<script>
  import logoImg from '@/assets/images/logos/logo.png'
  import Logo from '@/components/logo'
  import TobTabs from './components/tabs'
  import Actions from './components/actions'

  export default {
    components: {TobTabs, Logo, Actions},
    data() {
      return {
        logoImg,
        links: [
          {to: '//www.baidu.com', name: '百行宜众'},
          {to: '//www.baidu.com', name: '中国残联'},
          {to: '//www.baidu.com', name: '中国司法部'},
          {to: '//www.baidu.com', name: '中国律师网'},
          {to: '//www.baidu.com', name: '北京司法局'},
          {to: '//www.baidu.com', name: '北京市残联'},
        ],
        cotyRgiht: [
          {to: '//www.baidu.com', name: '关于我们'},
          {type: 'line'},
          {to: '//www.baidu.com', name: '新闻动态'},
          {type: 'line'},
          {to: '//www.baidu.com', name: '中心荣誉'},
          {type: 'line'},
          {to: '//www.baidu.com', name: '联系我们'},
        ]
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
      padding: 30px 123px 30px 123px;
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
          margin-right: 80px;
        }
      }
    }
    .main-content {
      background-color: #fff;
    }
    .main-footer {
      background: #fff;
      padding: 0;
      .links {
        background: #F5F5F5;
        padding: 0 161px;
        display: flex;
        align-items: center;
        p {
          font-size: 20px;
          color: #000000;
          margin-right: 280px;
          line-height: 100px;
        }
        ul {
          list-style: none;
          display: flex;
          li {
            font-size: 18px;
            line-height: 24px;
            color: #525252;
          }
        }
      }
      .copy-right {
        text-align: center;
        height: 180px;
        background: #82A694;
        margin-top: 44px;
        font-size: 16px;
        line-height: 21px;
        color: #FFFFFF;
        flex-direction: column;
        justify-content: center;
        display: flex;
        ul {
          list-style: none;
          width: 50%;
          display: flex;
          justify-content: center;
          margin: 0 auto;
          margin-bottom: 38px;
          align-items: center;
          .white {
            color: #fff;
            &:hover {
              color: #fff;
              background-color: #82A694;
            }
          }
        }
      }
    }
  }
</style>
