<template>
  <div class="mod-evaluate">
    <div class="title">评价详情</div>
    <div v-for="(item, index) in list" :key="index" class="detail">
      <Row type="flex" justify="space-between" class="inner">
        <Row type="flex" justify="space-between" :gutter="64" class="text-css">
          <Col>{{ item.phone }}</Col>
          <Col>{{ item.type }}</Col>
          <Col>{{ item.date }}</Col>
        </Row>
        <Col span="2">
          好评率
        </Col>
      </Row>
      <Row type="flex" justify="space-between" class="remark-css">
        <Row type="flex" justify="space-between">
          <Col>{{ item.remark }}</Col>
        </Row>
        <Col span="2">
          {{ item.rate }}
        </Col>
      </Row>
      <Row class="btns">
        <Button ghost>服务态度好</Button>
        <Button ghost>专业程度高</Button>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
    },
    data () {
      return {
        list: [
          {
            phone: '139****6789',
            type: '劳动争议',
            date: '2020-05-07',
            rate: '100%',
            remark: '帮助很大，谢谢！'
          },
          {
            phone: '139****6789',
            type: '劳动争议',
            date: '2020-05-07',
            rate: '100%',
            remark: '帮助很大，谢谢！'
          },
          {
            phone: '139****6789',
            type: '劳动争议',
            date: '2020-05-07',
            rate: '100%',
            remark: '帮助很大，谢谢！'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .title {
    border: 1px solid #DCDCDC;
    font-size: 16px;
    color: #333333;
    padding: 18px 40px;
  }
  .detail {
    padding: 37px 0 37px 44px;
  }
  .text-css {
    color: #969696;
  }
  .remark-css {
    font-size: 14px;
    color: #333333;
    margin-bottom: 49px;
    margin-top: 27px;
  }
  .btns {
    button {
      width: 120px;
      height: 30px;
      border: 1px solid #979797;
      border-radius: 20px;
      margin-right: 30px;
      color: #333;
    }
  }
</style>
