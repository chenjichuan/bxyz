<template>
  <div class="content">
    <div class="top">
      <span>我的购物车</span>
      <span>共 {{ cartList.length }} 件商品， 已选择 {{ checked.length }} 件商品</span>
    </div>
    <div>
      <Checkbox
        :indeterminate="indeterminate"
        :value="checkAll"
        :disabled="choosePay"
        style="display: flex;align-items: center; margin-bottom: 17px;"
        @click.prevent.native="handleCheckAll">
        <div class="table">
          <Row type="flex" justify="space-between">
            <Col span="1">全选</Col>
            <Col span="2"></Col>
            <Col span="4" style="text-align: left;">商品名称</Col>
            <Col span="4">单价</Col>
            <Col span="4">数量</Col>
            <Col span="4">总价</Col>
            <Col span="2">操作</Col>
          </Row>
        </div>
      </Checkbox>
      <CheckboxGroup v-model="checked" class="my-favor" @on-change="checkAllGroupChange">
        <Checkbox v-for="(item, index) in cartList" :key="item.id" :label="item.id" :disabled="choosePay" style="display:flex;align-items: center">
          <div v-if="item.id" class="table item">
            <Row type="flex" justify="space-between">
              <Col span="1" />
              <Col span="2" class="poster"><img :src="item.image" alt=""></Col>
              <Col span="4" class="name">{{ item.name }}</Col>
              <Col span="4" class="price colom">￥{{ item.price }}</Col>
              <Col span="4" class="colom">
                <InputNumber v-model="item.number" :min="1" :editable="false" @on-change="updCartNumChange(item.p_id, item.number)" />
              </Col>
              <Col span="4" class="colom">￥{{ +item.number * +item.price }}</Col>
              <Col span="2" class="colom">
                <Poptip
                  confirm
                  width="210"
                  transfer
                  word-wrap
                  title="是否确定删除这个商品?"
                  @on-ok="del(index, item.p_id)">
                  <Icon type="ios-trash" size="28" color="#82A694" style="cursor:pointer;" @click="preventDefault" />
                </Poptip>
              </Col>
            </Row>
          </div>
        </Checkbox>
      </CheckboxGroup>
    </div>
    <div class="bottom">
      <p>共 {{ checked.length }} 件商品，商品总金额 <span> ¥{{ totalPrice }}</span></p>
      <Button v-if="!choosePay" type="primary" :disabled="!checked.length" @click="getOrderId">提交订单</Button>
    </div>
    <div v-if="choosePay" class="pay">
      <p>请选择支付方式</p>
      <div class="wx" :class="{active: active === 'wx'}" @click="active = 'wx'"><div /><img src="./wx.png" alt=""></div>
      <div class="ali" :class="{active: active === 'ali'}" @click="active = 'ali'"><div /><img src="./zfb.png" alt=""></div>
      <div>
        <Button type="primary" :disabled="!active" @click="pay">立即支付</Button>
      </div>
    </div>
    <Modal v-model="payDhow" width="720" scrollable title="请支付" :closable="false" footer-hide :mask-closable="false">
      <div class="codeQr"><canvas id="canvas" height="210" width="200" /></div>
      <img src="./pay.png" style="display: block;width: 100%;">
    </Modal>
  </div>
</template>

<script>
  import { delCart, updCartNum, createOrder, checkOrderStatus, wxPay, cartList as getCartList } from './api'
  import { mapMutations, mapGetters } from "vuex";
  import QRCode from 'qrcode'
  export default {
    data () {
      return {
        checked: [],
        indeterminate: false,
        payDhow: false,
        checkAll: false,
        choosePay: false,
        active: '',
      }
    },
    computed: {
      ...mapGetters(['cartList', 'userInfo']),
      totalPrice () {
        let totalPrice = 0
        this.checked.forEach(item => {
          let [res] = this.cartList.filter(v => v.id === item)
          totalPrice += +res.price * +res.number
        })
        return totalPrice
      }
    },
    mounted () {
      // this.payDhow = true
      getCartList({ u_id: this.userInfo.id }).then(res => {
        this.setCartList(res || {})
      })
    },
    methods: {
      ...mapMutations(['setCartList']),
      handleCheckAll () {
        if (this.indeterminate) {
          this.checkAll = false;
        } else {
          this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;

        if (this.checkAll) {
          this.checked = this.cartList.map(item => item.id)
        } else {
          this.checked = [];
        }
      },
      checkAllGroupChange (data) {
        if (data.length === this.cartList.length) {
          this.indeterminate = false;
          this.checkAll = true;
        } else if (data.length > 0) {
          this.indeterminate = true;
          this.checkAll = false;
        } else {
          this.indeterminate = false;
          this.checkAll = false;
        }
      },
      preventDefault (e) {
        e.preventDefault()
      },
      updCartNumChange (p_id, number) {
        console.log(p_id, number)
        updCartNum({
          u_id: this.userInfo.id,
          p_id,
          number
        })
      },
      del (index, id) {
        delCart({
          u_id: this.userInfo.id,
          p_id: id,
        }).then(() => {
          // 删除成功更新购物车
          let idx = this.checked.indexOf(id)
          if (idx > -1) {
            this.checked.splice(idx, 1)
          }
          this.$nextTick(() =>  {
            this.cartList.splice(index, 1)
            this.checkAllGroupChange(this.checked)
          })
        })
      },
      getOrderId () {
        createOrder({
          u_id: this.userInfo.id,
          cart_id: this.checked.toString()
        }).then(res => {
          if (res.orderId) {
            this.choosePay = true
            this.orderId = res.orderId
          }
        })
      },
      pay () {
        wxPay({
          u_id: this.userInfo.id,
          order_id: this.orderId
        }).then(res => {
          console.log(res)
          var canvas = document.getElementById('canvas')
          QRCode.toCanvas(canvas, res.code_url, { width: 210, errorCorrectionLevel: 'H' })
          this.payDhow = true
          this.payRes()
        })
      },
      payRes () {
        let timer = setInterval(() => {
          checkOrderStatus({
            u_id: this.userInfo.id,
            order_id: this.orderId
          }).then(res => {
            console.log(res)
            if (res.status === 2) {
              clearInterval(timer)
              this.payDhow = false
              this.$Message.success('支付成功')
              location.reload()
            }
          })
        }, 2000)
      }
    }
  }
</script>

<style scoped lang="less">
  .content {
    padding: 0 200px;
    .top {
      height: 60px;
      background: #F5FFFA;
      display: flex;
      align-items:center;
      padding-top: 17px;
      padding-left: 31px;
      padding-bottom: 19px;
      margin-bottom: 64px;
      span {
        font-size: 18px;
        line-height: 24px;
        color: #82A694;
      }
      span + span {
        margin-left: 40px;
        font-size: 14px;
      }
    }
    .my-favor {
      display: flex;
      flex-direction: column;
    }
    .table {
      flex: 1;
      text-align: center;
      margin-left: 24px;
      cursor: default;
      .poster {
        img {
          width: 100px;
          height: 100px;
          display: block;
        }
      }
      .name {
        font-size: 18px;
        color: #333333;
        text-align: left;
      }
      .price {
        font-size: 24px;
        color: #333333;
      }
      &.item {
        background: #FAFAFA;
        padding-top: 27px;
        padding-bottom: 23px;
        margin-bottom: 30px;
      }
    }
    .colom {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .bottom {
      margin-top: 144px;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 80px;
      align-items:center;
      p {
        font-size: 20px;
        color: #333333;
        display: flex;
        align-items: center;
        span {
          font-size: 36px;
          color: #333333;
          margin-left: 50px;
          color: #FF0000;
        }
      }
      button {
        width: 200px;
        height: 50px;
        border-radius: 25px;
        margin-left: 152px;
      }
    }
    .pay {
      p {
        margin-bottom: 40px;
        font-size: 20px;
        color: #333333;
      }
      margin-bottom: 400px;
      .wx, .ali {
        width: 208px;
        height: 95px;
        display: inline-block;
        margin-right: 27px;
        margin-bottom: 26px;
        position: relative;
        &.active {
          > div {
            position: absolute;
            z-index: 11;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            background: url("./chosePay.png");
            background-size: 100% 100%;
          }
        }
        img {
          width: 100%;
          height: 100%;
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }
      button {
        width: 200px;
        height: 50px;
        border-radius: 25px;
        float: right;
      }
    }
  }
  .codeQr {
    text-align: center;
    position: absolute;
    /*background: #333333;*/
    width: 200px;
    height: 210px;
    left: 28%;
    top: 200px;
    #canvas {
    }
  }
</style>
