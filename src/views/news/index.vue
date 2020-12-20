<template>
  <div class="content">
    <ul>
      <li v-for="(item, index) in list" :key="index"
          style="cursor:pointer;"
          @click="$router.push({ name: 'news-detail', params: { id: index } })">
        <img :src="item.poster" alt="">
        <div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.context }}</p>
          <p style="text-align: right;margin-top: 46px;">{{ item.time }}</p>
        </div>
      </li>
    </ul>
    <Page class="page" :total="100" />
  </div>
</template>

<script>
  import { informationList } from './api'

  export default {
    components: {
    },
    data () {
      return {
        pages: {
          page: 1,
          pageNum: 20
        },
        list: [
          {
            title: '2020年第二批中关村科技型小微企业研发费用支持政策实施方案',
            time: '2020-10-11',
            context: '申请支持的企业为成立时间在5年(含)以内，从业人员100人(含)以下，上一年度研发费用20万元(含)以上，营业收入1000万元-2000万元(含)以下的中关村高新技术企业(或在示范区范围内注册的国家高新技术企业)……',
            poster: require('./poster.png')
          },
          {
            title: '2020年第二批中关村科技型小微企业研发费用支持政策实施方案',
            time: '2020-10-11',
            context: '申请支持的企业为成立时间在5年(含)以内，从业人员100人(含)以下，上一年度研发费用20万元(含)以上，营业收入1000万元-2000万元(含)以下的中关村高新技术企业(或在示范区范围内注册的国家高新技术企业)……',
            poster: require('./poster.png')
          },
          {
            title: '2020年第二批中关村科技型小微企业研发费用支持政策实施方案',
            time: '2020-10-11',
            context: '申请支持的企业为成立时间在5年(含)以内，从业人员100人(含)以下，上一年度研发费用20万元(含)以上，营业收入1000万元-2000万元(含)以下的中关村高新技术企业(或在示范区范围内注册的国家高新技术企业)……',
            poster: require('./poster.png')
          }, {
            title: '2020年第二批中关村科技型小微企业研发费用支持政策实施方案',
            time: '2020-10-11',
            context: '申请支持的企业为成立时间在5年(含)以内，从业人员100人(含)以下，上一年度研发费用20万元(含)以上，营业收入1000万元-2000万元(含)以下的中关村高新技术企业(或在示范区范围内注册的国家高新技术企业)……',
            poster: require('./poster.png')
          },
          {
            title: '2020年第二批中关村科技型小微企业研发费用支持政策实施方案',
            time: '2020-10-11',
            context: '申请支持的企业为成立时间在5年(含)以内，从业人员100人(含)以下，上一年度研发费用20万元(含)以上，营业收入1000万元-2000万元(含)以下的中关村高新技术企业(或在示范区范围内注册的国家高新技术企业)……',
            poster: require('./poster.png')
          },
          {
            title: '2020年第二批中关村科技型小微企业研发费用支持政策实施方案',
            time: '2020-10-11',
            context: '申请支持的企业为成立时间在5年(含)以内，从业人员100人(含)以下，上一年度研发费用20万元(含)以上，营业收入1000万元-2000万元(含)以下的中关村高新技术企业(或在示范区范围内注册的国家高新技术企业)……',
            poster: require('./poster.png')
          },
          {
            title: '2020年第二批中关村科技型小微企业研发费用支持政策实施方案',
            time: '2020-10-11',
            context: '申请支持的企业为成立时间在5年(含)以内，从业人员100人(含)以下，上一年度研发费用20万元(含)以上，营业收入1000万元-2000万元(含)以下的中关村高新技术企业(或在示范区范围内注册的国家高新技术企业)……',
            poster: require('./poster.png')
          },

        ]
      }
    },
    watch: {},
    mounted () {
      // todo 没有数据
      informationList(this.pages)
    }
  }
</script>

<style scoped lang="less">
  .content {
    padding: 0 200px;
    padding-top: 67px;

    ul {
      li {
        display: flex;
        border-bottom: 1px solid #C8C8C8;
        padding-bottom: 50px;

        & + li {
          padding-top: 50px;
          cursor: pointer;
        }

        img {
          width: 300px;
          height: 200px;
          display: block;
          flex-shrink: 0;
          margin-right: 69px;
        }

        h2 {
          font-size: 18px;
          color: #333333;
          margin-bottom: 37px;
          display: block;
        }

        p {
          font-size: 14px;
          color: #666666;
        }
      }
    }
  }

  .page {
    margin-top: 154px;
    margin-bottom: 202px;
    text-align: right;
  }
</style>
