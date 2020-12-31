<template>
  <div class="content">
    <div class="video">
      <div class="warpp">
        <Video v-if="Object.keys(playerOptions).length" ref="video" :options="playerOptions" />
        <div class="flex">
          <span>{{ title }}</span>
          <div class="icons">
            <Icon size="30" :color="detail.is_like ? '#82A694' : ''" type="md-thumbs-up" @click="likeHandler" />
            <Icon size="30" :color="detail.is_collect ? '#82A694' : ''" type="md-star" @click="addHandler" />
            <Icon size="30" type="md-text" @click="tabValue = '3'" />
          </div>
        </div>
      </div>
      <Tree :data="tree" class="tree" @on-select-change="treeClick" />

    </div>
    <Tabs :value="tabValue" class="tabs">
      <TabPane label="视频内容" name="1">
        <div class="inner">
          {{ detail.synopsis }}
        </div>
      </TabPane>
      <TabPane label="视频简介" name="2">
        <div class="inner">
          <h3> {{ detail.synopsis }}</h3>
        </div>
      </TabPane>
      <TabPane label="视频评论" name="3">
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
</template>

<script>
  import Video from '@/components/video'
  import { vedioDetail, vedioLike, vedioCollect, vedioCommentList, vedioComent } from './api'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      Video,
    },
    data () {
      return {
        tabValue: '',
        title: this.$route.query.title,
        v_id: this.$route.params.id,
        detail: {},
        playerOptions: {},
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
        }],
        tree: [
          // {
          //   title: '选集观看',
          //   expand: true,
          //   children: [
          //     {
          //       title: '第一章 初步了解法律',
          //       expand: true,
          //       children: [
          //         {title: '第1课 初步了解法律1', currrentSec: '10'},
          //         {title: '第2课 初步了解法律2', currrentSec: '20'}
          //       ]
          //     },
          //     {
          //       title: '第二章 初步认识法律',
          //       expand: true,
          //       children: [
          //         {title: '第1课 初步认识法律1', currrentSec: '30'},
          //         {title: '第2课 初步认识法律1', currrentSec: '45'}
          //       ]
          //     }
          //   ]
          // }
        ]
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    mounted () {
      vedioDetail({
       u_id: this.userInfo.id,
       v_id: this.v_id,
      }).then(res => {
        this.detail = res.data
        this.setVideo({
          title: res.data.title,
          cover: this.detail.cover,
          src: '',
        })
        const children = res.data.titles.map(item => {
          return {
            title: item.title,
            expand: true,
            children: item.titles.map(i => {
              return {
                title: item.title,
                videoPath: i.vedio_path
              }
            })
          }
        })
        this.tree = [{ title: '选集观看', expand: true, children }]
      })
      vedioCommentList({
        u_id: this.userInfo.id,
        v_id: this.v_id,
      }).then(res => {
        console.log(res)
      })
    },
    methods: {
      setVideo ({ cover, src = '', title = '' }) {
        this.playerOptions = {
          width: 1120,
          sources: [{
            type: "video/mp4",
            src
          }],
          poster: cover
        }
        this.title = title
      },
      treeClick ([v]) {
        console.log(v)
        this.setVideo({
          src: v.videoPath,
          title: v.title
        })
      },
      likeHandler () {
        this.detail.is_like = 1
        vedioLike({
          u_id: this.userInfo.id,
          v_id: this.v_id,
        })
      },
      addHandler () {
        this.detail.is_collect = 1
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
   .tree {
     margin-left: 98px;
   }

    .video {
      display: flex;
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
