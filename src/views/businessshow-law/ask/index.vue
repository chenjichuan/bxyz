<template>
  <div class="content">
    <div class="goods">
      <img src="../../../assets/images/bg/good-poster.png" alt="">
      <div class="right">
        <div class="title">法律咨询</div>
        <div class="lists">
          <CheckboxGroup v-model="good">
            <Checkbox
              v-for="item in list" :key="item.id"
              class="item"
              :label="item.id" border> {{ item.text }}
            </Checkbox>
          </CheckboxGroup>
        </div>
        <div class="price">价格 <span>¥ {{ total }}</span></div>
        <Button class="add">加入购物车</Button>
        <Button class="buy">立即下单</Button>
        <Tabs value="1" class="tabs">
          <TabPane label="产品详情" name="1">
            <div style="display:flex;margin-top: 36px;">
              <Icon
                type="md-arrow-forward" color="#fff" size="20"
                style="width: 30px;height: 30px;background: #82A694;border-radius: 100%;padding: 5px;" />
              <div class="right-text">
                <p>法律咨询服务流程</p>
                <ul>
                  <li>在“我的订单”里点击“我要服务”。</li>
                  <li>根据提示对所需要咨询的法律问题进行描述，同时提交咨询涉及到的相关资料。</li>
                  <li>律师会在三个工作日内为您做出解答，请您到会员中心“我的问题”中查看回复。</li>
                </ul>
              </div>
            </div>
            <div class="steps">
              <div>
                <Icons type="step1" h="100" w="100" />
                <p>下单付款</p>
              </div>
              <div class="line" />
              <div>
                <Icons type="step2" h="100" w="100" />
                <p>提交问题</p>
              </div>
              <div class="line" />
              <div>
                <Icons type="step3" h="100" w="100" />
                <p>受到回复</p>
              </div>
            </div>
          </TabPane>
          <TabPane label="用户评价" name="2">标签二的内容</TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import Icons from '@/components/icon'
  export default {
    components: { Icons },
    data () {
      return {
        good: [],
        list: [
          { id: 1, text: '劳动争议', price: 100 },
          { id: 2, text: '劳动争议', price: 100 },
          { id: 3, text: '劳动争议', price: 100 },
          { id: 4, text: '劳动争议', price: 100 },
          { id: 5, text: '劳动争议', price: 100 },
          { id: 6, text: '特殊咨询（提供法律依据）', price: 100 },
          { id: 7, text: '深度咨询（提供法律依据+相似案例）', price: 100 },
        ]
      }
    },
    computed: {
      total () {
        let res = 0
        this.good.forEach(item => {
          let [tar] = this.list.filter(v => v.id === item)
          res += tar.price
        })
        return res
      }
    }
  }
</script>

<style lang="less">
  .goods .ivu-checkbox {
    display: none;
  }

  .goods {
    .ivu-tabs-bar {
      background: #E7F4EE;
    }

    .ivu-tabs-tab {
      padding: 18px 33px;
    }

    /*.ivu-tabs-nav {*/
    /*  color: #888888;*/

    /*  !*.ivu-tabs-tab-active {*!*/
    /*  !*  color: #82A694;*!*/
    /*  !*}*!*/

    /*  !*.ivu-tabs-tab:hover {*!*/
    /*  !*  color: #82A694;*!*/
    /*  !*}*!*/

    /*  !*.ivu-tabs-ink-bar {*!*/
    /*  !*  background-color: #82A694;*!*/
    /*  !*}*!*/
    /*}*/
  }
</style>
<style scoped lang="less">
  .content {
    padding: 59px 200px 430px 200px;
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
          font-size: 30px;
          line-height: 40px;
          color: #000000;
          margin-left: 14px;
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
        >div {
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
