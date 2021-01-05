<template>
  <div style="margin-left: 20px;">
    <template v-if="!write">
      <p class="top-title">请选择您要开票的订单</p>
      <section class="lists">
        <CheckboxGroup v-model="order" class="boxs" @on-change="onChange">
          <div v-for="(item, index) in list" :key="index">
            <Checkbox v-for="i in item.order_detail" :key="i.id" :label="i.p_id" class="item">
              <div class="right-content">
                <h3>{{ i.p_name }}</h3>
                <p>
                  <span>订单号{{ item.order_id }}</span>
                  <span>{{ item.created_at }}</span>
                  <span>1</span>
                  <span>¥{{ i.buy_num }}</span>
                </p>
              </div>
            </Checkbox>
          </div>
        </CheckboxGroup>
        <div class="action">
          <p>
            <span>共{{ order.length }}个订单，开票总金额</span><span class="total">¥{{ total }}</span>
          </p>
          <Button
            type="primary" size="large" class="submit" :disabled="!order.length"
            @click="write = true">下一步
          </Button>
        </div>
      </section>
    </template>
    <Info v-else ref="infos" :order-id="orderId" />
  </div>
</template>

<script>
  import Info from './dialog/info'
  import { mapGetters } from 'vuex'
  import { orderList } from './api'
  export default {
    components: { Info },
    data () {
      return {
        write: false,
        order: [],
        orderId: '',
        total: 0,
        list: []
      }
    },
    computed: {
      ...mapGetters(['userInfo']),
    },
    mounted () {
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
    methods: {
      onChange (arr) {
        console.log(arr)
        arr.forEach(id => {
          this.list.forEach(item => {
            item.order_detail.forEach(i => {
              console.log(i)
              if (i.p_id === id) {
                this.total += i.buy_num
                this.orderId = item.order_id
              }
            })
          })
        })
      },
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
