<template>
  <div class="content">
    <p class="title">律师团队成员（排名不分先后）</p>
    <Row class="members" type="flex" justify="space-between" :gutter="108">
      <Col v-for="(item, index) in list" :key="index">
        <template v-if="item.username">
          <img :src="item.image" alt="">
          <div class="detail">
            <div class="name">{{ item.username }}</div>
            <p>职业年龄：{{ item.working_years }}</p>
            <p>专业方向：{{ item.specialty }}</p>
          </div>
        </template>
      </Col>
    </Row>
    <Page class="page" :current="pages.page" :total="total" />
  </div>
</template>

<script>
  import { lawyerList } from './api'
  export default {
    data () {
      return {
        list: [],
        total: 0,
        pages: {
          page: 1,
          pageNum: 10
        },
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
      lawyerList(this.pages).then(res => {
        console.log(res)
        this.list = JSON.parse(res.data)
        this.total = res.count
      })
    }
  }
</script>

<style scoped lang="less">
  .content {
    padding: 0 200px;

    .title {
      font-size: 18px;
      color: #333333;
      margin-top: 22px;
    }
  }

  .members {
    margin-top: 62px;

    > div {
      width: 400px;
      height: 400px;
      position: relative;
      margin-bottom: 100px;
      overflow: hidden;

      > img {
        width: 100%;
        height: 100%;
        display: block;
      }

      .detail {
        width: 100%;
        padding: 15px 31px;
        background: #000000;
        opacity: 0.7;
        transform: translateY(-100%);

        .name {
          font-size: 18px;
          line-height: 24px;
          color: #FFFFFF;
          margin-bottom: 6px;
        }

        p {
          font-size: 14px;
          color: #FFFFFF;
          line-height: 20px;
        }
      }
    }
  }
  .page {
    margin: 10px;
    text-align: right;
    margin-bottom: 50px;
  }
</style>
