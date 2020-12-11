<template>
  <div class="content">
    <h2>惠法务-单位法律服务</h2>
    <div class="line" />
    <h3>公益价位 专业品质</h3>
    <div class="list">
      <div v-for="(item, index) in list" :key="index" class="item">
        <template v-if="item.title">
          <div class="top">
            <Icons :type="item.icon" w="60" h="60"/>
            <span>{{ item.title }}</span>
          </div>
          <div class="bottom">
            <p v-html="item.text.toString()" />
            <span>{{ item.price }}</span>
            <Button @click="$router.push({ name: item.go })">了解详情</Button>
          </div>
        </template>
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
            title: '惠安心指导方案',
            text: ['贴合家庭 <br> 基本情况及需求'],
            price: '1980元起',
            go: "business-show/safe/zdfa",
          },
          {
            icon: 'contract',
            title: '特殊家庭生前遗嘱',
            text: ['医疗指示等<br>定制化服务'],
            price: '1980元起',
            go: 'business-show/safe/sqyz'
          },
          {
            icon: 'renz',
            title: '意定监护',
            text: ['定制人力为自己选择<br>监护人的法律文件'],
            price: '1980元起',
            go: 'business-show/safe/ydjh'
          },
          {
            icon: 'renz',
            title: '遗嘱指定监护人',
            text: ['为子女选择<br>监护人的法律文件'],
            price: '1980元起',
            go: 'business-show/safe/zdjhr'
          },
          {
            icon: 'renz',
            title: '遗嘱指定监护人',
            text: ['定制化遗嘱服务'],
            price: '1980元起',
            go: 'business-show/safe/jtyz'
          },
          {
            icon: 'renz',
            title: '遗嘱指定监护人',
            text: ['特殊需要<br>信托等法律文件'],
            price: '1980元起',
            go: 'business-show/safe/cfhl'
          },
          {
            icon: 'renz',
            title: '民事行为能力认定',
            text: ['代为向法院<br>申请行为能力'],
            price: '1980元起',
            go: 'business-show/safe/nlrd'
          },
          {
            icon: 'renz',
            title: '遗产监护人',
            text: ['遗嘱的执行<br>遗产的管理和监护'],
            price: '1980元起',
            go: 'business-show/safe/ycglr'
          },
          {
            icon: 'renz',
            title: '家庭法律顾问',
            text: ['解决家庭成员法律诉求'],
            price: '1980元起',
            go: 'business-show/safe/flgw'
          },
          {},
          {},
          {},
        ]
      }
    },
  }
</script>

<style scoped lang="less">
  .content {
    text-align: center;
    padding: 0 214px;
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
      justify-content: space-between;
      .item {
        /*border-radius: 8px;*/
        /*overflow: hidden;*/
        width: 300px;
        /*padding: 0 48px;*/
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
