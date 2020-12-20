<template>
  <div class="content">
    <Row class="members" type="flex" justify="space-between" :gutter="46">
      <Col v-for="(item, index) in list" :key="index">
        <template v-if="item.title">
<!--          <Video :options="item.playerOptions" />-->
          <img class="poster" :src="item.cover" alt="">
          <div style="display: flex;justify-content: space-between;align-items: center">
            <p class="video-title">{{ item.title }}</p>
<!--            <div>-->
<!--              <Icons type="zan" w="30" h="30" style="cursor:pointer;margin-right: 34px;" />-->
<!--              <Icons type="star" w="30" h="30" style="cursor:pointer;" />-->
<!--            </div>-->
            <Button class="watch" @click="goDetail(item.id, item.title)">观看</Button>
          </div>
        </template>
      </Col>
    </Row>
    <Page class="page" :total="count" />
  </div>
</template>

<script>
  // import Video from '@/components/video'
  // import Icons from '@/components/icon'
  import { vedioList } from './api'
  // title: '民法典解读附案例',
  //   playerOptions: {
  //   width: 400,
  //     sources: [{
  //     type: "video/mp4",
  //     src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
  //   }],
  //     poster: require('./poster.png')
  // }
  // }
  export default {
    components: {
      // Video,
      // Icons
    },
    data () {
      return {
        count: 0,
        list: [],
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
    },
    mounted () {
      vedioList().then(res => {
        this.count = res.data.count
        delete res.data.count
        console.log(res.data)
        for (let key in res.data) {
          this.list.push({
            ...res.data[key],
          })
        }
      })
    },
    methods: {
      goDetail (id, title) {
        const { href } = this.$router.resolve({
          name: 'videoshow/detail',
          query: { title },
          params: { id }
        });
        window.open(href, '_blank');
      }
    }
  }
</script>

<style scoped lang="less">
  .content {
    padding: 0 69px;
    padding-top: 67px;
  }

  .members {
    > div {
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
        flex-shrink: 0;
        width: 120px;
        height: 40px;
        background: #82A694;
        border-radius: 20px;
        color: #fff;
        margin-left: 10px;
      }
    }
  }
  .poster {
    width: 400px;
    height: 240px;
  }
  .page {
    margin-top: 154px;
    margin-bottom: 202px;
    text-align: right;
  }
</style>
