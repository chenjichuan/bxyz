<template>
  <div class="content">
    <div class="banner">
      <img src="./banner.png" alt="">
    </div>
    <div class="intro">
      <h2>北京百行宜众助残法律服务与研究中心机构简介</h2>
      <div>
        <p style="margin-bottom: 20px;">
          北京百行宜众助残法律服务与研究中心（以下简称百行宜众）于2016年10月25日在北京市民政局登记注册。百行宜众的前身为北京残障事务律师志愿团。2012年6月，10多名北京律师拟共同发起设立北京市律师协会残疾人法律专业委员会，以此为契机，一个专注公益法律服务的律师团队渐渐凝聚起来，并持续在残障领域中深耕开来。通过志愿律师值班、普法宣传、法律援助、法律顾问、政策合规梳理、立法课题研究等工作，在残障领域积累了一定的业务经验及倡导影响力。
        </p>
        <p>百行宜众主要专注以下法律业务： 监护法律服务；</p>
        <p>残障领域法律咨询；法律顾问服务；</p>
        <p>残障领域法律援助、法律宣传、专业培训；</p>
        <p>残障法学理论研究及其他委托服务事项。</p>
      </div>
    </div>
    <section class="us">
      <div class="maps">
        <div class="content-in">
          <Row type="flex">
            <Col class="map-img">
            <img src="../../assets/images/bg/map.png" alt=""></Col>
            <Col class="desc">
            <h3>北京百行宜众助残法律服务与研究中心</h3>
            <div v-for="(item, index) in us" :key="index">
              <Icons :type="item.icon" w="19.2" h="19.2"/>
              <div class="text">
                <p>{{ item.text[1] }}</p>
                <p>{{ item.text[2] }}</p>
              </div>
            </div>
            </Col>
          </Row>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        us: [
          {text: {1: '地址:', 2: '北京市东城区王家园胡同10号金泰商之苑312室'}, icon: 'location'},
          {text: {1: '联系电话:', 2: '010-58439049 / 4000-111-528'}, icon: 'phone'},
          {text: {1: '网址:', 2: 'be_center@126.com'}, icon: 'net'},
          {text: {1: 'E-mail:', 2: 'www.be-bj.org'}, icon: 'email'},
        ],
      }
    },
    watch: {}
  }
</script>

<style scoped lang="less">
  .content {
    .banner {
      width: 100%;
      display: block;
      height: 300px;
    }
  }
  .intro {
    padding: 87px 0;
    h2 {
      font-size: 18px;
      color: #333333;
      margin-bottom: 20px;
      text-align: center;
    }
    > div {
      border-top: 1px solid #C8C8C8;
      padding-top: 15px;
      width: 1200px;
      margin:0 auto;
    }
  }
  .us {
    .maps {
      background: url("../../assets/images/bg/architecture.png");
      background-size: 100% 100%;
      height: 686px;
      padding-top: 154px;
      padding-left: 261px;

      .content-in {
        padding: 40px 38px 34px;
        background: #fff;
        width: 970px;

        .map-img {
          width: 552px;
          margin-right: 20px;
          img {
            width: 100%;
            display: block;
            height: 100%;
          }
        }

        .desc {
          h3 {
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            color: #333333;
            margin-bottom: 37px;
          }
          > div {
            display: flex;
            & + div {
              margin-top: 30px;
            }
            .text {
              margin-left: 8px;
              p {
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
                color: #86A998;
              }
              p + p {
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                color: #969696;
                margin-top: 8px;
              }
            }
          }
        }
      }
    }
  }
</style>
