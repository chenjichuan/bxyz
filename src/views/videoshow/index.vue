<template>
  <div class="content">
    <Row class="members" type="flex" justify="space-between" :gutter="46">
      <Col v-for="(item, index) in list" :key="index">
        <template v-if="item.title">
          <Video :options="item.playerOptions" />
          <p class="video-title">{{ item.title }}</p>
          <div style="display: flex;justify-content: space-between;align-items: center">
            <Icons type="zan" w="30" h="30" style="cursor:pointer;"/>
            <Button class="watch">观看</Button>
          </div>
        </template>
      </Col>
    </Row>
    <Page class="page" :total="100" />
  </div>
</template>

<script>
  import Video from '@/components/video'
  import Icons from '@/components/icon'
  export default {
    components: {
      Video, Icons
    },
    data () {
      return {
        list: [
          {
            title: '民法典解读附案例',
            playerOptions: {
              width: 400,
              sources: [{
                type: "video/mp4",
                src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
              }],
              poster: require('./poster.png')
            }
          },
          {
            title: '民法典解读附案例',
            playerOptions: {
              width: 400,
              sources: [{
                type: "video/mp4",
                src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
              }],
              poster: require('./poster.png')
            }
          },
          {
            title: '民法典解读附案例',
            playerOptions: {
              width: 400,
              sources: [{
                type: "video/mp4",
                src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
              }],
              poster: require('./poster.png')
            }
          },
          {
            title: '民法典解读附案例',
            playerOptions: {
              width: 400,
              sources: [{
                type: "video/mp4",
                src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
              }],
              poster: require('./poster.png')
            }
          },
          {
            title: '民法典解读附案例',
            playerOptions: {
              width: 400,
              sources: [{
                type: "video/mp4",
                src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
              }],
              poster: require('./poster.png')
            }
          },
          {
            title: '民法典解读附案例',
            playerOptions: {
              width: 400,
              sources: [{
                type: "video/mp4",
                src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
              }],
              poster: require('./poster.png')
            }
          },
          {
            title: '民法典解读附案例',
            playerOptions: {
              width: 400,
              sources: [{
                type: "video/mp4",
                src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
              }],
              poster: require('./poster.png')
            }
          },
        ]
      }
    },
    watch: {
      list: {
        immediate: true,
        handler (v) {
          for (let i = 0; i < v.length % 4; i++) {
            v.push({})
          }
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .content {
    padding: 0 69px;
  }
  .members {
    >div {
      width: 446px;
      position: relative;
      margin-bottom: 100px;
      overflow: hidden;
      .video-title {
        font-size: 20px;
        line-height: 25px;
        color: #1F2126;
        margin-top: 42px;
        margin-bottom: 32px;
      }
      .watch {
        width: 120px;
        height: 40px;
        background: #82A694;
        border-radius: 20px;
        color: #fff;
      }
    }
  }
  .page {
    margin-top: 154px;
    margin-bottom: 202px;
    text-align: right;
  }
</style>
