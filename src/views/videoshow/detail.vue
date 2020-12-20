<template>
  <div class="content">
    <div class="video">
      <Video :options="option.playerOptions" />
      <div class="flex">
        <span>{{ title }}</span>
        <div class="icons">
          <Icon size="30" :color="like ? '#82A694' : ''" type="md-thumbs-up" @click="likeHandler" />
          <Icon size="30" :color="add ? '#82A694' : ''" type="md-star" @click="addHandler" />
          <Icon size="30" type="md-text" />
        </div>
      </div>
      <Tabs class="tabs">
        <TabPane label="视频内容">
          <div class="inner"></div>
        </TabPane>
        <TabPane label="视频简介">
          <div class="inner">
            <h3>视频简介</h3>
          </div>
        </TabPane>
        <TabPane label="视频评论">
          <div class="inner">
            <h3 style="margin-bottom: 50px;">全部评论</h3>
            <ul>
              <li v-for="item in comments" :key="item.id" style="margin-bottom: 52px;">
                <div style="display:flex;align-items: center">
                  <Icon size="30" type="md-contact" />
                  <span style="margin-left: 20px;">{{ item.username }}</span>
                </div>
                <p style="margin: 20px 0;font-size: 14px;color: #333;">{{ item.text }}</p>
                <p style="font-size: 14px;color: #969696;">发表于 {{ item.time }}</p>
              </li>
            </ul>
            <Input v-model="comment" class="inputer" type="textarea" maxlength="500" :rows="8"
                   placeholder="说几句吧……..." />
            <Button class="submit" type="primary" @click="submit">发表评论</Button>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import Video from '@/components/video'
  import { vedioLike, vedioCollect, vedioCommentList, vedioComent } from './api'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Video,
    },
    data () {
      return {
        title: this.$route.query.title,
        v_id: this.$route.params.id,
        like: false,
        add: false,
        option: {
          playerOptions: {
            width: 1120,
            sources: [{
              type: "video/mp4",
              src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
            }],
            poster: require('./poster.png')
          }
        },
        comment: '',
        comments: [{
          id: 1,
          icon: '',
          username: 'Jerry',
          text: '课程内容比较多，我利用平时空闲时间，一天半小时，大概两周的时间把全老部课程都听完了，总体感觉是老师讲解的方法还是不错的，由浅入深，易于理解。',
          time: '2020-06-08 14:02:46'
        }, {
          id: 2,
          icon: '',
          username: '一天到晚游泳的鱼',
          text: '一般吧',
          time: '2020-06-08 14:02:46'
        }]
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    mounted () {
      // todo 没有数据
      vedioCommentList({ v_id: this.v_id, })
    },
    methods: {
      likeHandler () {
        this.like = true
        vedioLike({
          u_id: this.userInfo.id,
          v_id: this.v_id,
        })
      },
      addHandler () {
        this.add = true
        vedioCollect({
          u_id: this.userInfo.id,
          v_id: this.v_id,
        })
      },
      submit () {
        vedioComent({
          u_id: this.userInfo.id,
          v_id: this.v_id,
          comment: this.comment
        })
      }
    }
  }
</script>

<style lang="less">
  .inputer {
    textarea.ivu-input {
      padding: 26px 30px;
    }
  }
</style>
<style scoped lang="less">
  .content {
    padding: 0 150px;

    .video {
      width: 1120px;

      .flex {
        justify-content: space-between;
        display: flex;
        margin-top: 67px;
        font-size: 20px;
        line-height: 25px;
        color: #1F2126;
        margin-bottom: 63px;
      }

      .icons {
        i {
          margin-left: 34px;
          cursor: pointer;
        }
      }
    }

    .tabs {
      .inner {
        padding-top: 48px;
      }
    }

    .submit {
      width: 200px;
      height: 50px;
      border-radius: 25px;
      margin-bottom: 61px;
      margin-top: 61px;
      float: right;
    }

  }

</style>
