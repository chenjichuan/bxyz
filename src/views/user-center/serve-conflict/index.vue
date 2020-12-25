<template>
  <div class="content asdaw">
    <pre>
      利益冲突：
      利益冲突是指本服务平台代理的委托事项与其他相关客户之间有利益上的冲突，继续代理会直接影响到先合作客户利益的情形。</pre>
    <div>
      <Form :model="formItem" :label-width="160">
        <FormItem class="colomn" label="是否披露利益冲突信息" style="width:160px;">
          <Select v-model="formItem.is_show">
            <Option value="1">是</Option>
            <Option value="2">否</Option>
          </Select>
        </FormItem>
        <div style="display:flex;margin-top: 47px;">
          <FormItem class="colomn" :label-width="200" label="我方实名（姓名/单位名称）" style="width:300px;margin-right: 120px;">
            <Input v-model="formItem.my_name" placeholder="请输入您的姓名或单位名称" />
          </FormItem>
          <FormItem class="colomn" :label-width="200" label="对方实名（姓名/单位名称）" style="width:300px;">
            <Input v-model="formItem.you_name" placeholder="请输入对方的姓名或单位名称" />
          </FormItem>
        </div>
      </Form>
      <Checkbox v-model="agree" class="agree">
        <span style="margin: 0 20px 0 17px">我同意</span> <a href="javascript:;">《用户协议及隐私条款》</a>
      </Checkbox>
      <Button type="primary" size="large" class="submit" :disabled="!agree" @click="sub">保存</Button>
    </div>
  </div>
</template>

<script>
  import { conflict } from './api'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        agree: '',
        formItem: {}
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    methods: {
      sub () {
        conflict({
          u_id: this.userInfo.id,
          ...this.formItem
        })
      }
    }
  }
</script>

<style lang="less">
  .asdaw {
    .ivu-form-item-content {
      margin-left: 0!important;
    }
    .ivu-form-item-label {
      text-align: left;
    }
  }
</style>
<style scoped lang="less">
  .content {
    padding: 0 48px;
    pre {
      white-space: pre-line;
      font-size: 16px;
      line-height: 51px;
      color: #333333;
    }
  }
  .colomn {
    display: flex;
    flex-direction: column;
  }
  .agree {
    margin-top: 112px;
    margin-bottom: 37px;
  }
  .submit {
    width: 200px;
    height: 50px;
    background: #82A694;
    border-radius: 25px;
    display: block;
    margin-top: 40px;
  }
</style>
