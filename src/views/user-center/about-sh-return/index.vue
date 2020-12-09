<template>
  <div style="margin-left: 20px;">
    <template v-if="!next">
      <p class="top-title">请选择您要退款的订单</p>
      <section class="lists">
        <RadioGroup v-model="order" class="boxs">
          <Radio class="item" v-for="item in list" :label="item.orderId" :key="item.orderId">
            <div class="right-content">
              <h3>{{ item.title }}</h3>
              <p>
                <span>{{ item.orderId }}</span>
                <span>{{ item.time }}</span>
                <span>{{ item.num }}</span>
                <span>¥{{ item.price }}</span>
              </p>
            </div>
          </Radio>
        </RadioGroup>
        <div class="action">
          <p>
            <span>申请退款金额</span><span class="total">¥{{ total }}</span>
          </p>
          <Button type="primary" size="large" class="submit" :disabled="!order" @click="next = true">下一步</Button>
        </div>
      </section>
    </template>
    <section v-else class="choose-reason">
      <Form ref="formInline" :model="form" label-position="left" :label-width="95">
        <FormItem label="退款商品">
          <div class="good">
            <img src="../../../assets/images/bg/good.png" alt="">
            <div>
              <div class="title">{{ current.title }}</div>
              <p class="price">¥ {{ current.price }} x {{ current.num }}</p>
            </div>
          </div>
        </FormItem>
        <FormItem label="退款原因" style="margin-bottom: 46px;margin-top: 90px;">
          <Select v-model="form.reason" style="width: 200px;">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="退款金额">
          <p class="price">¥ {{ +current.price * +current.num }}</p>
        </FormItem>
      </Form>
      <div style="margin-top: 79px;">
        <Button class="prev" @click="next = false">上一步</Button>
        <Button type="primary" size="large" class="submit" :disabled="!order">提交</Button>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        next: false,
        order: '',
        form: {},
        list: [
          {
            title: '金卡顾问服务',
            orderId: 'GB1590045695-51',
            time: '2020-06-08 15:36:08',
            num: 2,
            price: '9880.00'
          },
          {
            title: '惠法务法律咨询-合同纠纷',
            orderId: 'GB1590045695-53',
            time: '2020-06-08 15:36:08',
            num: 1,
            price: '398.00'
          },
          {
            title: '惠法务线下服务-线下培训',
            orderId: 'GB1590045695-57',
            time: '2020-06-08 15:36:08',
            num: 1,
            price: '9880.00'
          }
        ]
      }
    },
    computed: {
      total () {
        let [res] = this.list.filter(l => l.orderId === this.order)
        if (!res) return 0
        return +res.price * (+res.num)
      },
      current () {
        let [res] = this.list.filter(l => l.orderId === this.order)
        return res || {}
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
