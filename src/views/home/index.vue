<template>
  <div class="mod-home">
    <Carousel class="banner" autoplay v-model="banner" loop radius-dot :autoplay-speed="50000" :height="610">
      <CarouselItem>
        <div class="carouse"><img src="../../assets/images/banner/banner.png" alt=""></div>
      </CarouselItem>
      <CarouselItem>
        <div class="carouse"><img src="../../assets/images/banner/banner.png" alt=""></div>
      </CarouselItem>
      <CarouselItem>
        <div class="carouse"><img src="../../assets/images/banner/banner.png" alt=""></div>
      </CarouselItem>
      <CarouselItem>
        <div class="carouse"><img src="../../assets/images/banner/banner.png" alt=""></div>
      </CarouselItem>
    </Carousel>
    <section class="business-presentation">
      <div class="slogan">
        <h3>业务展示</h3>
        <h3>Business presentation</h3>
      </div>
      <Row class="cards">
        <i-col
          v-for="(item, index) in businessPresentations" :key="index"
          :class="{active: item.active}"
          span="6">
          <Icons w="100" h="100" :type="item.icon" />
          <div class="text">
            <h3>{{ item.text[1] }}</h3>
            <p>{{ item.text[2] }}</p>
          </div>
          <Button type="primary" ghost @click="$router.push({name: item.to})">了解详情</Button>
        </i-col>
      </Row>
    </section>
    <section class="video-display">
      <div class="slogan">
        <h3>视频展示</h3>
        <h3>Video display</h3>
      </div>
      <div class="videos">
        <Row class="video-wrp">
          <i-col v-for="(item, index) in videos" :key="index" span="6">
            <Video :options="item.playerOptions" />
            <h3 class="video-title">{{ item.title }}</h3>
          </i-col>
        </Row>
      </div>
    </section>
    <section class="us">
      <div class="slogan">
        <h3>关于我们</h3>
        <h3>ABOUT Blessing Equal-Zone</h3>
      </div>
      <div class="maps">
        <div class="content-in">
          <Row type="flex">
            <Col class="map-img"><img src="../../assets/images/bg/map.png" alt=""></Col>
            <Col class="desc">
              <h3>北京百行宜众助残法律服务与研究中心</h3>
              <div v-for="(item, index) in us" :key="index">
                <Icons :type="item.icon" w="19.2" h="19.2" />
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
  import Icons from '@/components/icon'
  import Video from '@/components/video'
  import { content } from './api'
  export default {
    components: { Video, Icons },
    data () {
      return {
        banner: 1,
        us: [
          { text: { 1: '地址:', 2: '北京市东城区王家园胡同10号金泰商之苑312室' }, icon: 'location' },
          { text: { 1: '联系电话:', 2: '010-58439049 / 4000-111-528' }, icon: 'phone' },
          { text: { 1: '网址:', 2: 'be_center@126.com' }, icon: 'net' },
          { text: { 1: 'E-mail:', 2: 'www.be-bj.org' }, icon: 'email' },
        ],
        businessPresentations: [
          { text: { 1: '惠法务', 2: '单位定制 专业严谨', }, icon: 'law', to: 'business-show/law', active: false },
          { text: { 1: '慧咨询', 2: '个人咨询 定向服务', }, icon: 'counsel', to: 'business-show/advisory', active: true },
          { text: { 1: '汇安心', 2: '特殊家庭 用心关爱', }, icon: 'relieved', to: 'business-show/safe', active: false },
          { text: { 1: '荟诉', 2: '预先约定 全年保障', }, icon: 'safeguard', to: 'business-show/talk', active: false },
        ],
        videos: [{
          title: '民法典解读附案例',
          playerOptions: {
            width: 400,
            sources: [{
              type: "video/mp4",
              src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
            }],
            poster: require('@/assets/images/video-poster/minf.png')
          }
        }, {
          title: '劳动法',
          playerOptions: {
            width: 400,
            sources: [{
              type: "video/mp4",
              src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
            }],
            poster: require('@/assets/images/video-poster/ldf.png')
          }
        }, {
          title: '公司法',
          playerOptions: {
            width: 400,
            sources: [{
              type: "video/mp4",
              src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
            }],
            poster: require('@/assets/images/video-poster/gsf.png')
          }
        }, {
          title: '劳动纠纷案例分析',
          playerOptions: {
            width: 400,
            sources: [{
              type: "video/mp4",
              src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
            }],
            poster: require('@/assets/images/video-poster/ldjf.png')
          }
        }
        ],
      }
    },
    mounted () {

    },
    methods: {}
  }
</script>

<style lang="less">
  .mod-home {
    .banner {
      .ivu-carousel-dots {
        li {
          margin: 0 13px;
          height: auto;
          bottom: 17px;

          button {
            width: 14px !important;
            height: 14px !important;
          }
        }
      }
    }
  }
</style>
<style scoped lang="less">
  .carouse {
    width: 100%;
    height: 100%;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .slogan {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 46px 0;

    h3:first-child {
      font-size: 26px;
      font-weight: 400;
      line-height: 37px;
      color: #545454;
      margin-bottom: 6px;
    }

    h3 + h3 {
      font-size: 12px;
      font-weight: 400;
      line-height: 17px;
      color: #AAA9A9;
    }
  }

  .business-presentation {
    .cards {
      text-align: center;
      padding: 0 2px;

      > div {
        height: 600px;
        background-color: #F3FFF9;
        border: 1px solid #82A694;
        padding-top: 124px;

        &.active {
          background-color: #82A694;

          .text {
            h3, p {
              color: #fff;
            }
          }

          button {
            background-color: #fff;
          }
        }

        & + div {
          border-left: none;
        }

        .text {
          margin-top: 63px;
          margin-bottom: 86px;

          h3 {
            font-size: 30px;
            font-weight: 400;
            line-height: 42px;
            color: #82A694;
            margin-bottom: 20px;
          }

          p {
            font-size: 20px;
            font-weight: 400;
            line-height: 28px;
            color: #82A694;
          }
        }
      }
    }
  }

  .video-display {
    margin-bottom: 10px;

    .videos {
      padding: 0 100px;

      .video-wrp {
        > div + div {
          padding-left: 38px;
        }

        h3.video-title {
          font-size: 20px;
          font-weight: 400;
          line-height: 25px;
          color: #1F2126;
          margin-top: 32px;
        }
      }
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
