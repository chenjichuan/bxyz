<template>
  <div class="content">
    <Row class="members" type="flex" justify="space-between" :gutter="46">
      <Col v-for="(item, index) in list" :key="index">
        <template v-if="item.title">
          <img class="poster" :src="item.cover" alt="">
          <div style="display: flex;justify-content: space-between;align-items: center">
            <p class="video-title">{{ item.title }}</p>
            <Button class="watch" @click="goDetail(item.id, item.title)">观看</Button>
          </div>
        </template>
      </Col>
    </Row>
    <div class="buttons">
      <Button
        type="primary" shape="circle"
        @click="$router.push({ name: 'filter-videos', query: { tab: '1', title: '我赞过的视频' } })">我赞过的视频
      </Button>
      <Button
        type="primary" shape="circle"
        @click="$router.push({ name: 'filter-videos', query: { tab: '2', title: '我收藏的视频' } })">我收藏的视频</Button>
    </div>
    <Page class="page" :total="count" />
  </div>
</template>

<script>
  import { vedioList } from './api'
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

  .buttons {
    text-align: right;

    button {
      margin-right: 20px;
    }
  }

  .page {
    margin-top: 154px;
    margin-bottom: 202px;
    text-align: right;
  }
</style>
