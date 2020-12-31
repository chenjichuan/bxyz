<template>
  <div class="">
    <Tabs v-model="tab" :animated="false" @on-click="getData">
      <TabPane label="全部订单" name="1" />
      <TabPane label="待支付" name="2" />
      <TabPane label="已支付" name="3" />
      <TabPane label="已失效" name="4" />
    </Tabs>
    <Modal v-model="payDhow" transfer scrollable title="请支付" :closable="false" footer-hide :mask-closable="false">
      <div class="codeQr" style="text-align: center"><canvas id="canvas" /></div>
      <h3 style="text-align: center">支付过程中请勿出刷新当前页面，等待支付结果</h3>
    </Modal>
    <div v-for="item in orderList" :key="item.id" class="orders">
      <Row type="flex">
        <Col span="6" class="order-id">订单号：{{ item.order_id }}</Col>
        <Col span="6" class="time">{{ item.created_at }}</Col>
      </Row>
      <div class="list">
        <div class="left">
          <Row
            v-for="i in item.order_detail" :key="i.p_id"
            type="flex" justify="space-between">
            <Col class="poster"><img :src="i.p_image" alt="" /></Col>
            <Col class="title">{{ i.p_name }}</Col>
            <Col class="number center">{{ i.buy_num }}</Col>
            <Col class="price center">￥{{ i.self_price }}</Col>
          </Row>
        </div>
        <div class="right">
          <template v-if="+item.status === 1">
            <div style="display:flex;align-items: center">
              <Button class="pay-btn" type="primary" @click="payWx(item.order_id)">立即支付</Button>
              <Poptip
                transfer
                confirm
                title="是否确认取消订单？"
                @on-ok="cancelOrder(item.order_id)">
                <Button type="text" style="margin-left: 62px;">取消订单</Button>
              </Poptip>
            </div>
          </template>
          <template v-if="+item.status === 2">
            <div style="display:flex;align-items: center">
              <div style="display: flex;flex-direction: column;justify-content: center;">
                <p class="status2">已支付</p>
                <Button class="status2" type="text" @click="$router.push({ name: 'user-center/about-sh/return' })">申请售后</Button>
                <Button
                  class="status2" type="text"
                  @click="$router.push({ name: 'user-center/serve/ask', query: {order_id: item.order_id} })">我要评价</Button>
              </div>
              <Button style="margin-left: 62px;" class="pay-btn" type="primary">我要服务</Button>
            </div>
          </template>
          <p v-if="+item.status === 3">失效</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { orderList, cancelOrder } from './api'
  import { mapGetters } from 'vuex'
  import QRCode from 'qrcode'
  import { checkOrderStatus, wxPay } from "../../buket/api";
  export default {
    components: {
    },
    data() {
      return {
        payDhow: false,
        tab: '1',
        orderList: [],
        pages: {
          page: 1,
          pageNum: 10000
        }
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    mounted () {
      this.getData()
    },
    methods: {
      getData(key) {
        orderList({
          u_id: this.userInfo.id,
          type: key || this.tab,
          ...this.pages
        }).then(res => {
          if (typeof res.data === 'object') {
            this.orderList = []
            res.data.forEach(item => [
              this.orderList.push(item)
            ])
          } else {
            this.orderList = []
            this.$Message.info(res.data)
          }
        })
      },
      cancelOrder (order_id) {
        cancelOrder({
          u_id: this.userInfo.id,
          order_id
        }).then(() => {
          this.$Message.success('取消成功')
          this.getData()
        })
      },
      payWx (order_id) {
        wxPay({
          u_id: this.userInfo.id,
          order_id
        }).then(res => {
          console.log(res)
          if (!res.code_url) {
            this.$Message.info(res.err_code_des)
            return
          }
          var canvas = document.getElementById('canvas')
          QRCode.toCanvas(canvas, res.code_url, function (error) {
            if (error) console.error(error)
          })
          this.payDhow = true
          this.payRes(order_id)
        })
      },
      payRes (order_id) {
        let timer = setInterval(() => {
          checkOrderStatus({
            u_id: this.userInfo.id,
            order_id
          }).then(res => {
            if (res.status === 2) {
              clearInterval(timer)
              this.payDhow = false
              this.$Message.success('支付成功')
              location.reload()
            }
          })
        }, 2000)
      }
    },
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
        >div+div {
          margin-top: 60px;
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
      .pay-btn {
        width: 147px;
        height: 40px;
        border-radius: 25px;
      }
      .right {
        width: 449px;
        font-size: 20px;
        color: #333333;
        display: flex;
        padding-left: 70px;
        p.status2  {
          margin: 3px 0;
          cursor: default;
        }
        .status2 {
          font-size: 20px;
          color: #333333;
          cursor: pointer;
          text-align: center;
        }
      }
    }
    .center {
      display: flex;
      flex-direction:column;
      justify-content:center;
    }
  }
</style>
