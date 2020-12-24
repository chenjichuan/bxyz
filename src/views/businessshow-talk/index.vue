<template>
  <div class="content">
    <h2>惠法务-单位法律服务</h2>
    <div class="line"/>
    <h3>公益价位 专业品质</h3>
    <div class="list">
      <div v-for="(item, index) in list" :key="index" class="item">
        <template v-if="item.name">
          <div class="top">
            <Icons :url="item.icon" w="60" h="60"/>
            <span>{{ item.name }}</span>
          </div>
          <div class="bottom">
            <p v-html="item.synopsis"/>
            <span>{{ item.money }}元起</span>
            <Button
              @click="$router.push({ name: 'business-show/law/detail', query: {title: item.name, id: item.id } })">了解详情
            </Button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import Icons from '@/components/icon'
  import {serveList} from './api'

  export default {
    components: {Icons},
    props: {
      id: {}
    },
    data() {
      return {
        list: []
      }
    },
    watch: {
      list: {
        handler(v) {
          for (let i = 0; i < v.length % 4; i++) {
            v.push({})
          }
        }
      }
    },
    mounted() {
      console.log(this.$route)
      serveList({ id: this.id }).then(res => {
        this.list = res.data
      })
    }
  }
</script>

<style scoped lang="less">
  .content {
    text-align: center;
    padding: 0 214px;
    .line {
      width: 80px;
      height: 2px;
      display: inline-block;
      background: #82A694;
    }
    > h3 {
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      color: #010101;
      margin-top: 8px;
    }
    > h2 {
      font-size: 30px;
      font-weight: 400;
      line-height: 42px;
      color: #82A694;
    }
    .list {
      margin-top: 120px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item {
        /*border-radius: 8px;*/
        /*overflow: hidden;*/
        width: 300px;
        /*padding: 0 48px;*/
        margin-bottom: 100px;
        .top {
          border-radius: 8px 8px 0px 0px;
          height: 140px;
          background: #82A694;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          span {
            font-size: 24px;
            line-height: 32px;
            color: #FFFFFF;
            margin-top: 9px;
          }
        }
        .bottom {
          border-radius: 0 0 8px 8px;
          border: 1px solid #82A694;
          > p {
            font-size: 20px;
            line-height: 27px;
            color: #333333;
            margin-top: 40px;
            margin-bottom: 28px;
          }
          > span {
            display: inline-block;
            font-size: 24px;
            color: #82A694;
            margin-bottom: 32px;
          }
          > button {
            display: block;
            width: 150px;
            height: 40px;
            background: #82A694;
            border-radius: 20px;
            color: #fff;
            margin: 0 auto;
            margin-bottom: 32px;
          }
        }
      }
    }
  }
</style>
