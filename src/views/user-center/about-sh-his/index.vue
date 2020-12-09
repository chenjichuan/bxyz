<template>
  <div class="">
    <p class="top-title">历史退款记录</p>
    <div class="lists">
      <div v-for="item in list" :key="item.id" class="item">
        <Steps :current="1">
          <Step title="申请退款"></Step>
          <Step title="处理申请"></Step>
          <Step title="处理完成"></Step>
        </Steps>
        <Row class-name="info">
          <Col span="24">受理状态：<span class="price">{{ item.state }}</span> </Col>
          <Col span="24">退款金额：<span class="price">¥{{ item.price }}元</span></Col>
          <Col span="24">退款方式：{{ item.way }}</Col>
          <Col span="24">退款原因：{{ item.reason }}</Col>
          <Col span="24">申请时间：{{ item.time1 }}</Col>
          <Col span="24">处理时间：{{ item.time2 }}</Col>
          <Col span="24">退款编号：{{ item.id }}</Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  //  import Icons from '@/components/icon'
  export default {
//    components: { Icons },
    data () {
      return {
        list: [{
          state: '成功',
          price: '9800',
          way: '原路返回',
          reason: '7天无理由',
          time1: '2020-06-19 20:13:27',
          time2: '2020-06-19 20:13:27',
          id: '871879485992935463',
        },{
          state: '成功',
          price: '9800',
          way: '原路返回',
          reason: '7天无理由',
          time1: '2020-06-19 20:13:27',
          time2: '2020-06-19 20:13:27',
          id: '8718794859212935463',
        }]
      }
    },
  }
</script>


<style scoped lang="less">
  .top-title {
    font-size: 14px;
    line-height: 19px;
    color: #646464;
  }

  .lists {
    margin-top: 76px;
    width: 700px;
    .item {
      padding-bottom: 67px;
      &+.item {
        border-top: 1px solid #C8C8C8;
        padding-top: 63px;
      }
      .info {
        padding-top: 38px;
        font-size: 16px;
        color: #646464;
        >div {
          margin-bottom: 13px;
        }
      }
    }
  }
  .price {
    /*font-size: 18px;*/
    color: #FF0000;
    /*line-height: 34px;*/
  }
</style>
