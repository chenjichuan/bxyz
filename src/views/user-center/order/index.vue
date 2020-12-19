<template>
  <div class="">
    <Tabs v-model="tab" :animated="false">
      <TabPane label="全部订单" name="1" />
      <TabPane label="待支付" name="2" />
      <TabPane label="已支付" name="3" />
      <TabPane label="已失效" name="4" />
    </Tabs>
    <div class="orders">
      <Row type="flex">
        <Col span="6" class="order-id">订单号：GB1590045784-36</Col>
        <Col span="6" class="time">2020-06-08  15:36:08</Col>
      </Row>
      <div class="list">
        <div class="left">
          <Row type="flex" justify="space-between">
            <Col class="poster"><img src="" alt="" /></Col>
            <Col class="title">惠法务法律咨询-劳动争议</Col>
            <Col class="number center">1</Col>
            <Col class="price center">￥100.00</Col>
          </Row>
          <Row type="flex" justify="space-between">
            <Col class="poster"><img src="" alt="" /></Col>
            <Col class="title">惠法务法律咨询-劳动争议</Col>
            <Col class="number center">1</Col>
            <Col class="price center">￥100.00</Col>
          </Row>
          <Row type="flex" justify="space-between">
            <Col class="poster"><img src="" alt="" /></Col>
            <Col class="title">惠法务法律咨询-劳动争议</Col>
            <Col class="number center">1</Col>
            <Col class="price center">￥100.00</Col>
          </Row>
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tab: '1'
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="less">
  .orders {
    padding-top: 52px;
    padding-right: 200px;
    .order-id {
      font-size: 16px;
      color: #333333;
    }
    .time {
      font-size: 16px;
      color: #888888;
    }
    .list {
      display: flex;
      padding-top: 27px;
      padding-bottom: 23px;
      padding-left: 64px;
      padding-right: 64px;
      background: #FAFAFA;
      margin-top: 26px;

      .left {
        display: flex;
        flex-direction:column;
        flex:1;
        padding-right: 74px;
        position: relative;
        &:after {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          content: '';
          width: 2px;
          height: 90px;
          background-color: #CCCCCC;
        }
        >div {
          margin-bottom: 60px;
        }
        .poster {
          width: 95px;
          height: 100px;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .title {
          font-size: 18px;
          color: #333333;
        }
        .price, .number {
          font-size: 30px;
          color: #333333;
        }
      }
      .right {
        width: 449px;
      }
    }
    .center {
      display: flex;
      flex-direction:column;
      justify-content:center;
    }
  }
</style>
