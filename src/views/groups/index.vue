<template>
  <div class="content">
    <p class="title">律师团队成员（排名不分先后）</p>
    <Row class="members" type="flex" justify="space-between" :gutter="108">
      <Col v-for="(item, index) in list" :key="index">
        <template v-if="item.name">
          <img :src="item.poster" alt="">
          <div class="detail">
            <div class="name">{{ item.name }}</div>
            <p>职业年龄：{{ item.age }}</p>
            <p>专业方向：{{ item.pofess }}</p>
          </div>
        </template>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '张三',
            age: 10,
            pofess: '刑事，民事',
            poster: ''
          },
          {
            name: '张三',
            age: 10,
            pofess: '刑事，民事',
            poster: ''
          },
          {
            name: '张三',
            age: 10,
            pofess: '刑事，民事',
            poster: ''
          },
          {
            name: '张三',
            age: 10,
            pofess: '刑事，民事',
            poster: ''
          }, {
            name: '张三',
            age: 10,
            pofess: '刑事，民事',
            poster: ''
          }, {
            name: '张三',
            age: 10,
            pofess: '刑事，民事',
            poster: ''
          }, {
            name: '张三',
            age: 10,
            pofess: '刑事，民事',
            poster: ''
          }, {
            name: '张三',
            age: 10,
            pofess: '刑事，民事',
            poster: ''
          }, {
            name: '张三',
            age: 10,
            pofess: '刑事，民事',
            poster: ''
          },{
            name: '张三',
            age: 10,
            pofess: '刑事，民事',
            poster: ''
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
    padding: 0 200px;

    .title {
      font-size: 18px;
      color: #333333;
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

</style>
