<template>
  <div class="content">
    <div class="goods">
      <img src="./poster.png" alt="">
      <div class="right">
        <div class="title">{{ title }}</div>
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
                <p>人资合同类产品说明</p>
                <ul>
                  <li>标准劳动合同：即普通劳动合同，通用性强，条款清晰，适用于一般合同签定。 </li>
                  <li>精品劳动合同：精品劳动合同是在标准劳动合同内，增加培训期、保密、知识产权、竞业限制条款，方便单位根据不同需要搭配使用。</li>
                  <li> 小时工合同：非全日制用工，是指以小时计酬为主的劳动合同。</li>
                  <li> 劳务合同：劳务合同是指以雇佣退休人员为主的民事合同。</li>
                  <li> 实习生合同：在校生参加社会实践学习，从事实践工作的合同。</li>
                  <li> 志愿者合同：志愿者与单位签订的服务合同。</li>
                  <li> 劳务派遣合同：由实际用工单位和劳务派遣公司及劳动者三方签订的合同。</li>
                  <li> 全套合同模板：包括以上所有的合同模板，单位可根据实际需要灵活搭配使用，为您省时省力。</li>
                </ul>
              </div>
            </div>
            <div style="display:flex;margin-top: 36px;">
              <Icon
                type="md-arrow-forward" color="#fff" size="20"
                style="width: 30px;height: 30px;background: #82A694;border-radius: 100%;padding: 5px;" />
              <div class="right-text">
                <p>定制人力资源合同服务流程</p>
                <ul>
                  <li>在“我的订单”里点击“我要服务”。 </li>
                  <li>请您在输入问题时将购买合同具体需求进行描述，将定制需要写清并提交即可。 </li>
                  <li>工作人员收到您的请求后，会尽快将您所购买合同文件发送给您，请您到会员中心“我的问题”中查看回复。 </li>
                </ul>
              </div>
            </div>
          </TabPane>
          <TabPane label="用户评价" name="2">
            <Evaluate />
          </TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
  //  import Icons from '@/components/icon'
  import Evaluate from '@/components/evaluate'
  export default {
    components: { Evaluate },
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
      title () {
        return this.$route.meta.title
      },
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

    .ivu-tabs-nav {
      color: #888888;

      .ivu-tabs-tab-active {
        color: #82A694;
      }

      .ivu-tabs-tab:hover {
        color: #82A694;
      }

      .ivu-tabs-ink-bar {
        background-color: #82A694;
      }
    }
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
          margin-right: 84px;
          span {
            text-align: center;
          }
          p {
            text-align: center;
            width: 100px;
            height: 100px;
            border: 2px solid #82A694;
            border-radius: 50%;
            line-height: 100px;
            font-size: 24px;
            color: #82A694;
            margin-bottom: 24px;
          }
        }
      }
    }
  }
</style>
