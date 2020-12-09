<template>
  <div style="margin-left: 20px;">
    <p class="top-title">历史开票记录</p>
    <section class="lists">
      <div class="item" v-for="(item, index) in list" :key="index" >
        <p><span>开票信息：</span><span>{{ item.kpxx }}</span></p>
        <p><span>发票类型：</span><span>{{ item.kpxx }}</span></p>
        <p><span>抬头类型：</span><span>{{ item.kpxx }}</span></p>
        <p><span>发票抬头：</span><span>{{ item.kpxx }}</span></p>
        <p><span>发票内容：</span><span>{{ item.kpxx }}</span></p>
        <p><span>订单信息：</span></p>
        <div class="right-content">
          <h3>{{ item.title }}</h3>
          <p>
            <span>{{ item.orderId }}</span>
            <span>{{ item.time }}</span>
            <span>{{ item.num }}</span>
            <span>¥{{ item.price }}</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  //  import Icons from '@/components/icon'
  export default {
//    components: { Icons },
    data () {
      return {
        list: [{
          kpxx: 'adasdasdsaXXXX',
          title: '金卡顾问服务',
          orderId: 'GB1590045695-51',
          time: '2020-06-08 15:36:08',
          num: 1,
          price: '9880.00'
        }, {
          kpxx: 'adasdasdsaXXXX',
          title: '金卡顾问服务',
          orderId: 'GB15900245695-51',
          time: '2020-06-08 15:36:08',
          num: 1,
          price: '9880.00'
        }]
      }
    },
    computed: {
    }
  }
</script>


<style scoped lang="less">
  .top-title {
    font-size: 14px;
    line-height: 19px;
    color: #646464;
  }
  .lists {
    margin-top: 33px;
    .item {
      width: 900px;
      border: 1px solid #CACACA;
      padding: 23px 50px;
      margin-bottom: 50px;
      > p {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #333333;
        margin-bottom: 20px;
        span {
          color: #333333;
          margin-right: 20px;
        }
      }
      .right-content {
        height: 80px;
        border-radius: 1px;
        padding: 14px 48px 16px;
        background: #E9F7F1;
        h3 {
          font-size: 16px;
          color: #333333;
          font-weight: normal;
        }
        p {
          font-size: 14px;
          color: #646464;
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>
