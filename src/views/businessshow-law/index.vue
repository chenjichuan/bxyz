<template>
  <div class="content">
    <h2>惠法务-单位法律服务</h2>
    <div class="line" />
    <h3>公益价位 专业品质</h3>
    <div class="list">
      <div v-for="item in list" :key="item.title" class="item">
        <div class="top">
          <Icons :type="item.icon" w="60" h="60"/>
          <span>{{ item.title }}</span>
        </div>
        <div class="bottom">
          <p v-html="item.text.toString()" />
          <span>{{ item.price }}</span>
          <Button>了解详情</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Icons from '@/components/icon'
  export default {
    components: { Icons },
    data() {
      return {
        list: [
          {
            icon: 'flzx',
            title: '法律咨询',
            text: ['单位法律咨询 <br> 我来替您操心'],
            price: '109元起'
          },
          {
            icon: 'contract',
            title: '合同服务',
            text: ['找合同BUG？<br>不如找专业人'],
            price: '998元起'
          },
          {
            icon: 'renz',
            title: '人资合同',
            text: ['定制人力资源合同包括<br>劳动合同、劳务合同等 '],
            price: '09元起'
          },
          {
            icon: 'rzmb',
            title: '人资管理',
            text: ['提供单位人力<br>资源常用管理模板'],
            price: '99元起'
          },
          {
            icon: 'xyfw',
            title: '线下服务',
            text: ['现场为您提供<br>谈判、培训等解决方案 '],
            price: '2888元起'
          },
          {
            icon: 'gwfw',
            title: '顾问服务',
            text: ['专业法律服务<br>提供全年保障'],
            price: '6888元起'
          },
        ]
      }
    },
  }
</script>

<style scoped lang="less">
  .content {
    text-align: center;
    padding: 0 166px;
    .line {
      width: 80px;
      height: 2px;
      display: inline-block;
      background: #82A694;
    }
    >h3 {
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      color: #010101;
      margin-top: 8px;
    }
    >h2 {
      font-size: 30px;
      font-weight: 400;
      line-height: 42px;
      color: #82A694;
    }
    .list {
      margin-top: 120px;
      display: flex;
      flex-wrap: wrap;
      .item {
        /*border-radius: 8px;*/
        /*overflow: hidden;*/
        width: 25%;
        padding: 0 48px;
        margin-bottom: 100px;
        .top {
          border-radius: 8px 8px 0px 0px;
          height: 140px;
          background: #82A694;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
           span {
             font-size: 24px;
             line-height: 32px;
             color: #FFFFFF;
             margin-top: 9px;
           }
        }
        .bottom {
          border-radius: 0 0 8px 8px;
          border: 1px solid #82A694;
          >p {
            font-size: 20px;
            line-height: 27px;
            color: #333333;
            margin-top: 40px;
            margin-bottom: 28px;
          }
          >span {
            display: inline-block;
            font-size: 24px;
            color: #82A694;
            margin-bottom: 32px;
          }
          >button {
            display: block;
            width: 150px;
            height: 40px;
            background: #82A694;
            border-radius: 20px;
            color: #fff;
            margin: 0 auto;
            margin-bottom: 32px;
          }
        }
      }
    }
  }
</style>
