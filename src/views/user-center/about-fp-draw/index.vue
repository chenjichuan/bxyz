<template>
  <div style="margin-left: 20px;">
    <p class="top-title">请选择您要开票的订单</p>
    <section class="lists">
      <CheckboxGroup v-model="order" class="boxs">
        <Checkbox class="item" v-for="item in list" :label="item.orderId" :key="item.orderId">
          <div class="right-content">
            <h3>{{ item.title }}</h3>
            <p>
              <span>{{ item.orderId }}</span>
              <span>{{ item.time }}</span>
              <span>{{ item.num }}</span>
              <span>¥{{ item.price }}</span>
            </p>
          </div>
        </Checkbox>
      </CheckboxGroup>
      <div class="action">
        <p>
          <span>共{{ order.length }}个订单，开票总金额</span><span class="total">¥{{ total }}</span>
        </p>
        <Button
          type="primary" size="large" class="submit" :disabled="!order.length"
          @click="$refs['infos'].modal = true">下一步
        </Button>
      </div>
    </section>
    <Info ref="infos" :order-id="order" />
  </div>
</template>

<script>
  import Info from './dialog/info'
  import { mapGetters } from 'vuex'
  import { applyInvoiceList } from './api'
  export default {
    components: { Info },
    data () {
      return {
        order: [],
        list: [
          {
            title: '金卡顾问服务',
            orderId: 'GB1590045695-51',
            time: '2020-06-08 15:36:08',
            num: 1,
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
      ...mapGetters(['userInfo']),
      total () {
        let total = 0
        this.order.forEach(item => {
          let [res] = this.list.filter(l => l.orderId === item)
          total += +res.price
        })
        return total
      }
    },
    mounted () {
      applyInvoiceList({
        u_id: this.userInfo.id
      }).then(res => {
        console.log(res)
      })
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
      color: #82A694;
      font-size: 18px;
    }

    .submit {
      width: 200px;
      height: 50px;
      background: #82A694;
      opacity: 1;
      border-radius: 25px;
    }
  }
</style>
