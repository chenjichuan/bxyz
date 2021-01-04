<template>
  <div class="content">
      <h2>2020年第二批中关村科技型小微企业研发费用支持政策实施方案</h2>
      <h3>
        作者：{{ detail.author }}
        <span style="width: 10px;display: inline-block" />
        来源：{{ detail.source }}
        <span style="width: 10px;display: inline-block" />
        {{ detail.created_at }}</h3>
    <div class="inner">
      <pre v-html="detail.detail" />
    </div>
    <img :src="$route.query.img" alt="">
  </div>
</template>

<script>
  import { informationDetail } from './api'
  export default {
    components: {
    },
    data () {
      return {
        detail: {}
      }
    },
    watch: {
    },
    mounted () {
      // todo 没有数据
      informationDetail({ id: this.$route.params.id }).then(res => {
        this.detail = res.data
      })
    }
  }
</script>

<style scoped lang="less">
  .content {
    padding: 0 360px;
    padding-top: 22px;
    padding-bottom: 143px;
    h2,h3 {
      text-align: center;
    }
    h2 {
      font-size: 20px;
      line-height: 27px;
      color: #666666;
    }
    h3 {
      font-size: 14px;
      color: #969696;
      margin-bottom: 26px;
      margin-top: 16px;
    }
    .inner {
      border-top: 1px solid #979797;
      padding-top: 30px;
      padding-bottom: 50px;
      margin-bottom: 37px;
    }
    pre {
      white-space: pre-line;
    }
    img {
      width: 100%;
      height: 643px;
      background: #FFFFFF;
      display: block;
    }
  }
</style>
