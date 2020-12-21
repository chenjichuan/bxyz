<template>
  <div class="content video-like">
    <Tabs :value="$route.query.tab" @on-click="getData">
      <TabPane name="1" label="我赞过的视频" />
      <TabPane name="2" label="我收藏的视频" />
    </Tabs>
    <Row class="members" type="flex" justify="space-between" :gutter="46">
      <Col v-for="(item, index) in list" :key="index">
        <template v-if="item.title">
          <img class="poster" :src="item.cover" alt="">
          <div style="display: flex;justify-content: space-between;align-items: center">
            <p class="video-title">{{ item.title }}</p>
          </div>
        </template>
      </Col>
    </Row>
  </div>
</template>

<script>
  import { collectVedioList, likeVedioList } from "./api";
  import { mapGetters } from 'vuex'
  export default {
    components: {},
    data () {
      return {
        list: []
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
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
      this.getData(this.$route.query.tab)
    },
    methods: {
      getData (key) {
        var api = collectVedioList
        if (key === '1') {
          api = likeVedioList
        } else {
          api = collectVedioList
        }
        api({
          u_id: this.userInfo.id,
          page: 1,
          pageNum: 100000
        }).then(() => {
          // todo 没数据
        })
      }
    }
  }
</script>

<style lang="less">
  .video-like {
    .ivu-tabs-bar {
      margin-bottom: 82px;
      background: #E7F4EE;
      padding: 23px 78px;
      .ivu-tabs-tab {
        font-size: 24px;
      }
    }
  }

</style>
<style scoped lang="less">
  .content {
    padding: 0 92px;
    .members {
      > div {
        width: 446px;
        position: relative;
        margin-bottom: 100px;
        overflow: hidden;
        .poster {
          width: 400px;
          height: 240px;
        }
        .video-title {
          font-size: 20px;
          line-height: 25px;
          color: #1F2126;
          margin-top: 42px;
          margin-bottom: 32px;
        }
      }
    }
  }
</style>
