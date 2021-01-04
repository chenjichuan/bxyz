<template>
  <div class="content common">
    <div class="top">
      {{ $route.query.content }}
    </div>
    <section>
      <div class="top-t">
        <Avatar icon="ios-person" size="small" />
        <span class="spa">范律师</span>
        <span class="spb">已解答：2020-05-02 13:35:28</span>
      </div>
      <div class="cont">
        只要安排残疾人就业达到规定的比例人数，就可以不缴纳残疾人就业保障金，残疾人就业人数占全体在职职工的人数百分比确定的，一般是1.6%或者1.7%。只要安排残疾人就业达到规定的比例人数，就可以不缴纳残疾人就业保障金，残疾人就业人数占全体在职职工的人数百分比确定的，一般是1.6%或者1.7%。具体请您下载附件查看案例。只要安排残疾人就业达到规定的比例人数，就可以不缴纳残疾人就业保障金，残疾人就业人数占全体在职职工的人数百分比确定的，一般是1.6%或者1.7%。只要安排残疾人就业达到规定的比例人数，就可以不缴纳残疾人就业保障金，残疾人就业人数占全体在职职工的人数百分比确定的，一般是1.6%或者1.7%。具体请您下载附件查看案例。
      </div>
      <div class="file">
        <template v-for="(item, index) in files">
          <div :key="index">
            <Icon type="md-link" />
            <a href="javascript:;" download @click="downLoad(item, item)">{{ item }}</a>
          </div>
        </template>
      </div>
      <div class="buttons">
        <Button class="sub" type="primary">查收完成</Button>
        <Button class="sub" type="primary">我要评价</Button>
        <Button class="sub" type="primary">申请补充服务</Button>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import { userGetQuesDetail } from './api'
  export default {
    data() {
      return {
        content: '',
        is_anonymity: '',
        level: '',
        rates: [
          { left: '解答专业程度', rate: 0 },
          { left: '回复服务态度', rate: 0 },
          { left: '问题解决能力', rate: 0} ,
        ]
      }
    },
    computed: {
      ...mapGetters(['userInfo']),
      files () {
        return this.$route.params.resource.split(',')
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      downLoad (filename, src) {
        var link = document.createElement('a');
        link.download = filename;
        link.style.display = 'none';
        link.href = src;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      getData () {
        userGetQuesDetail({
          u_id: this.userInfo.id,
          q_id: this.$route.query.q_id
        }).then(res => {
          console.log(res)
          this.$Message.info(res.message)
        })
      },
      submit () {
      }
    }
  }
</script>

<style scoped lang="less">
  .top {
    height: 60px;
    background: #F5FFFA;
    border-left: 4px solid #82A694;
    line-height: 60px;
    padding-left: 38px;
    font-size: 16px;
    color: #333333;
    margin-bottom: 90px;
  }
  .content {
    padding: 0 50px;
    .top-t {
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      .spb {
        font-size: 14px;
        color: #969696;
        margin-left: 24px;
        margin-right: 31px;
      }
      .spa {
        margin-left: 25px;
        font-size: 14px;
        color: #333333;
      }
    }
    .file {
      display: flex;
      >div {
        word-break: break-all;
        /*display: flex;*/
        align-items: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 10px;
        width: 200px;
        overflow: hidden;
        margin-right: 50px;
        a {
          margin-left: 10px;
        }
      }
    }
    .cont {
      width: 1342px;
      font-size: 14px;
      line-height: 19px;
      color: #333333;
      margin-bottom: 41px;
    }
    section {
      border-bottom: 2px solid #CCCCCC;
      padding-bottom: 56px;
    }
  }
  .buttons {
    margin-top: 67px;
    .sub {
      width: 160px;
      height: 40px;
      border-radius: 26px;
      margin-right: 50px;
    }
  }
</style>
