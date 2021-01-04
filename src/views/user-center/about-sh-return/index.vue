<template>
  <div style="margin-left: 20px;">
    <template v-if="!next">
      <p class="top-title">请选择您要退款的订单</p>
      <section class="lists">
        <RadioGroup v-model="form.p_id" class="boxs" @on-change="onChange">
          <div v-for="(item, index) in list" :key="index">
            <Radio v-for="i in item.order_detail" :key="i.id" :label="i.p_id" class="item">
              <div class="right-content">
                <h3>{{ i.p_name }}</h3>
                <p>
                  <span>订单号{{ item.order_id }}</span>
                  <span>{{ item.created_at }}</span>
                  <span>1</span>
                  <span>¥{{ i.buy_num }}</span>
                </p>
              </div>
            </Radio>
          </div>
        </RadioGroup>
        <div class="action">
          <p>
            <span>申请退款金额</span><span class="total">¥{{ total }}</span>
          </p>
          <Button type="primary" size="large" class="submit" :disabled="!form.p_id" @click="next = true">下一步</Button>
        </div>
      </section>
    </template>
    <section v-else class="choose-reason">
      <Form ref="formInline" :model="form" label-position="left" :label-width="95">
        <FormItem label="退款商品">
          <div class="good">
            <img src="current.p_image" alt="">
            <div>
              <div class="title">{{ current.p_name }}</div>
              <p class="price">¥ {{ current.buy_num }} x 1</p>
            </div>
          </div>
        </FormItem>
        <FormItem label="退款原因" style="margin-bottom: 46px;margin-top: 90px;">
          <Select v-model="form.refund_type" style="width: 200px;">
            <Option value="1">七天无理由</Option>
            <Option value="2">买错了</Option>
            <Option value="3">买多了</Option>
            <Option value="4">其他</Option>
          </Select>
        </FormItem>
        <FormItem label="退款金额">
          <p class="price">¥ {{ +current.buy_num }}</p>
        </FormItem>
      </Form>
      <div style="margin-top: 79px;">
        <Button class="prev" @click="next = false">上一步</Button>
        <Button type="primary" size="large" class="submit" :disabled="!form.p_id" @click="submit">提交</Button>
      </div>
    </section>
  </div>
</template>

<script>
  import { applyForRefund, orderList } from './api'
  import { mapGetters } from "vuex";
  export default {
    data () {
      return {
        next: false,
        form: {},
        pages: {
          page: 1,
          pageNum: 1000
        },
        list: [],
        total: 0,
        current: {}
      }
    },
    computed: {
      ...mapGetters(['userInfo']),
    },
    created () {
      this.getData()
    },
    methods: {
      onChange (pId) {
        this.list.forEach(item => {
          item.order_detail.forEach(i => {
            if (i.p_id === pId) {
              this.total = i.buy_num
              this.current = i
              this.orderId = item.order_id
            }
          })
        })
      },
      getData () {
        orderList({
          u_id: this.userInfo.id,
          type: 3,
          ...this.pages
        }).then(res => {
          if (typeof res.data === 'object') {
            this.list = res.data
          } else {
            this.list = []
            this.$Message.info(res.data)
          }
        })
      },
      submit () {
        const params = {
          u_id: this.userInfo.id,
          order_id: this.orderId,
          ...this.form
        }
        applyForRefund(params).then((res) => {
          this.$Message.success(res.message)
        })
      }
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
    margin-top: 52px;
    .boxs {
      display: flex;
      flex-direction: column;
      .item {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        .right-content {
          height: 80px;
          margin-left: 32px;
          border: 1px solid #B0B0E0;
          border-radius: 1px;
          padding: 14px 48px 16px;
          width: 800px;
          h3 {
            font-size: 16px;
            color: #333333;
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
  }
  .action {
    display: flex;
    align-items: center;
    width: 800px;
    justify-content: flex-end;
    margin-top: 70px;
    p {
      width: 508px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .total {
      margin-left: 45px;
      color: #FF0000;
      font-size: 18px;
    }
  }
  .submit {
    width: 200px;
    height: 50px;
    background: #82A694;
    border-radius: 25px;
  }
  .prev {
    width: 200px;
    height: 50px;
    border-radius: 25px;
    margin-right: 20px;
  }
  .good {
    display: flex;
    img {
      width: 120px;
      height: 120px;
      display: block;
      margin-right: 40px;
    }
    .title {
      font-size: 16px;
      line-height: 21px;
      color: #4C4C4C;
      margin-bottom: 22px;
    }
  }
  p.price {
    font-size: 18px;
    color: #FF0000;
    line-height: 34px;
  }
</style>
