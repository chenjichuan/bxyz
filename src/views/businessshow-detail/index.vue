<template>
  <div class="content detail-good">
    <div class="goods">
      <img :src="detail.image" alt="">
      <div class="right">
        <div class="title">{{ title }}</div>
        <div class="lists">
          <CheckboxGroup v-model="good" @on-change="textChange">
            <Checkbox
              v-for="item in list" :key="item.id"
              class="item"
              :label="item.id" border
              @mouseup.native="goodChange(item)"> {{ item.name }}
            </Checkbox>
          </CheckboxGroup>
        </div>
        <div class="price">价格 <span style="margin-right: 27px;">¥ {{ total }}</span>
          <span style="font-size: 18px;color: #8B8B8B;text-decoration: line-through;">¥ {{ detail.market_price }}</span></div>
        <Button class="add" @click="addCarList()">加入购物车</Button>
        <Button class="buy" @click="addCarList('order')">立即下单</Button>
      </div>
    </div>
    <Tabs value="1" class="tabs">
      <TabPane label="产品详情" name="1">
        <div style="display:flex;margin-top: 36px;">
          <div class="right-text">
            <div v-html="detail.detail" />
          </div>
        </div>
      </TabPane>
      <TabPane label="用户评价" name="2">
        <Evaluate />
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import Evaluate from '@/components/evaluate'
  import cartMixin from '@/mixins/cart.js'
  export default {
    components: { Evaluate },
    mixins: [cartMixin],
    methods: {}
  }
</script>

<style lang="less">
  .goods {
    .ivu-checkbox {
      display: none;
    }
    .ivu-checkbox-wrapper-checked {
      /*background-color: #82A694;*/
      /*color: #fff!important;*/
      font-size: 18px;
      color: #82A694!important;
    }
  }

  .detail-good {
    .ivu-tabs-bar {
      background: #E7F4EE;
    }

    .ivu-tabs-tab {
      padding: 18px 33px;
    }

  }
</style>
<style scoped lang="less">
  .content {
    padding: 59px 200px 430px 200px;
    .tabs {
      margin-top: 82px;
    }

    .right-text {
      margin-left: 21px;

      > p {
        font-size: 24px;
        line-height: 32px;
        color: #82A694;
        margin-bottom: 25px;
      }

      ul {
        li {
          color: #333333;
          line-height: 38px;
        }
      }
    }
    .goods {
      display: flex;

      > img {
        width: 400px;
        height: 400px;
        display: block;
        margin-right: 50px;
        flex-shrink: 0;
      }

      .right {
        flex: 1;
        .title {
          font-size: 24px;
          color: #333333;
          margin-bottom: 48px;
        }
      }

      .lists {
        display: flex;
        flex-wrap: wrap;
      }

      .item {
        padding: 8px 44px;
        font-size: 18px;
        height: auto;
        color: #666666;
        margin-bottom: 26px;
        margin-right: 30px;
      }

      .price {
        color: #666;
        margin-bottom: 30px;

        span {
          line-height: 40px;
          color: #000000;
          margin-left: 14px;
          font-size: 30px;
          font-weight: 500;
        }
      }

      .add {
        width: 160px;
        height: 50px;
        border: 1px solid #82A694;
        border-radius: 25px;
        color: #82A694;
      }

      .buy {
        width: 160px;
        height: 50px;
        background: #82A694;
        border: 1px solid #82A694;
        border-radius: 25px;
        color: #fff;
        margin-left: 30px;
      }


      .steps {
        display: flex;
        align-items: center;
        margin-top: 86px;

        .line {
          width: 32px;
          height: 28px;
          border-top: 1px solid #8CAD9C;
          margin: 0 18px;
        }

        > div {
          display: flex;
          flex-direction: column;
          justify-content: center;

          p {
            text-align: center;
            margin-top: 24px;
          }
        }
      }
    }
  }
</style>
