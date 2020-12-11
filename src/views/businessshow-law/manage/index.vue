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
                <p>人资管理模板产品说明</p>
                <ul>
                  <li> 录用阶段模板：含录用条件告知书、员工录用通知书、员工信息登记表、入职声明书。</li>
                  <li>日常管理模板：订立书面劳动合同通知书、劳动合同签收单、职业名册一览表。 </li>
                  <li> 合同履行阶段模板：劳动合同变更协议书、续签劳动合同通知书。 </li>
                  <li> 合同解除阶段模板：解除劳动合同通知书、解除劳动合同协议书、离职申请表、离职证明。</li>
                  <li> 全套管理模板：包含以上全部定制化人力资源管理模板。</li>
                </ul>
              </div>
            </div>
            <div style="display:flex;margin-top: 36px;">
              <Icon
                type="md-arrow-forward" color="#fff" size="20"
                style="width: 30px;height: 30px;background: #82A694;border-radius: 100%;padding: 5px;" />
              <div class="right-text">
                <p>定制人力资源管理模板服务流程</p>
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
