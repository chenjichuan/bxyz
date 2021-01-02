<template>
  <div class="content common">
    <div class="top">
      请您对律师服务的满意度进行评价
    </div>
    <div style="display: flex;align-items: center;margin-top: 47px;">
      <Icons type="pingjia" w="16" h="16" />
      <p class="ttt" style="margin-left: 9px;">请为给您提供服务的律师点亮小星星</p>
    </div>
    <ul>
      <li v-for="(item, index) in rates" :key="index">
        <p>{{ item.left }}</p>
        <Rate v-model="item.rate" />
      </li>
    </ul>
    <RadioGroup v-model="level" class="lever" size="large">
      <Radio label="1" true-value="1">好评</Radio>
      <Radio label="2" true-value="1">中评</Radio>
      <Radio label="3"  true-value="1">差评</Radio>
    </RadioGroup>
    <Input
      v-model="content" type="textarea" :autosize="{minRows: 10,maxRows: 20}"
      class="text"
      placeholder="写下您意见或建议，便于我们更好的为您提供帮助。" />
    <Radio v-model="is_anonymity" true-value="1" class="anonymity" size="large">匿名评价</Radio>
    <Button class="sub" type="primary" @click="submit">提交</Button>
  </div>
</template>

<script>
  import Icons from '@/components/icon'
  import { orderComment } from "./api"
  import { mapGetters } from "vuex";
  export default {
   components: { Icons },
    data() {
      return {
        content: '',
        is_anonymity: '',
        level: '',
        rates: [
          { left: '解答专业程度', rate: 0 },
          { left: '回复服务态度', rate: 0 },
          { left: '问题解决能力', rate: 0} ,
        ]
      }
    },
    computed: {
      ...mapGetters(['userInfo']),
      star1 () {
        return this.rates[0].rate
      },
      star2 () {
        return this.rates[1].rate
      },
      star3 () {
        return this.rates[2].rate
      }
    },
    methods: {
      formChange () {},
      submit () {
        orderComment({
          star1: this.star1,
          star2: this.star2,
          star3: this.star3,
          level: this.level,
          is_anonymity: this.is_anonymity,
          content: this.content,
          p_id: 0,
          u_id: this.userInfo.id,
          order_id: this.$route.query.order_id
        }).then(res => {
          console.log(res)
          this.$Message.success('提交成功')
          this.$router.go(-1)
        })
      }
    }
  }
</script>

<style lang="less">
  .common {
    .ivu-radio {
      margin-right: 10px;
    }
    .ivu-rate-star {
      background-image: url("./star-gary.png");
      background-size: 100% 100%;
      height: 23px;
      width: 24px;
      margin-right: 10px;
      &.ivu-rate-star-full {
        background-image: url("./star.png");
      }
      &:before {
        display: none;
      }
    }
    .ivu-radio-default {
      font-size: 14px;
      color: #333333;
    }
  }
</style>
<style scoped lang="less">
  .top {
    height: 60px;
    background: #F5FFFA;
    border-left: 4px solid #82A694;
    line-height: 60px;
    padding-left: 38px;
    font-size: 16px;
    color: #333333;
  }
  .content {
    padding: 0 50px;
  }
  p.ttt {
    line-height: 16px;
    color: #333333;
  }
  ul {
    list-style: none;
    margin-top: 32px;
    li {
      display: flex;
      align-items:center;
      margin-bottom: 27px;
      >div {
        font-size: 32px;
      }
      p {
        margin-right: 28px;
        font-size: 16px;
        color: #333333;
      }
    }
  }
  .lever {
    margin-top: 80px;
    margin-bottom: 34px;
    >label {
      margin-right: 42px;
      font-size: 16px;
      color: #333333;
    }
  }
  .anonymity {
    margin-top: 18px;
    margin-bottom: 48px;
  }
  .sub {
    width: 200px;
    height: 50px;
    border-radius: 25px;
    display: block;
  }
  .text {
    width: 800px;
    display: block;
  }
</style>
