<template>
  <div class="mod-id-check">
    <div class="top">
      <h3>实名认证</h3>
      <p>认证信息与账号唯一绑定，我们会对实名信息进行严格保密</p>
    </div>
    <Former
      ref="mainform"
      class="form-info"
      label-position="left"
      :value="formData"
      :submit-button="true"
      :form-label="formLabel"
      style="width: 504px;margin-right: 165px;"
      @on-submit="submit"
      @on-change="formChange">
      <template #foot>
        <Checkbox v-model="agree" class="agree">
          <span style="margin: 0 20px 0 17px">我同意</span> <a href="javascript:;">《用户协议及隐私条款》</a>
        </Checkbox>
      </template>
    </Former>
  </div>
</template>

<script>
  import Former from '@/components/former'
  import formLabel from "./formLabel";
  import { smrz } from './api'
  import { mapGetters } from "vuex";
  export default {
   components: { Former },
    data() {
      return {
        agree: false,
        formData: {},
        formLabel,
      }
    },
    computed: {
      ...mapGetters(['userInfo']),
    },
    methods: {
      formChange () {
      },
      submit () {
        if (!this.agree) {
          return
        }
        smrz({
          u_id: this.userInfo.id,
          ...this.formData
        }).then(res => {
          console.log(res)
          this.$Message.success('绑定成功')
        })
      }
    }
  }
</script>

<style scoped lang="less">
.top {
  padding-left: 20px;
  margin-bottom: 68px;
  h3 {
    font-size: 16px;
    line-height: 21px;
    color: #333333;
  }
  p {
    font-size: 12px;
    line-height: 16px;
    color: #333333;
    margin-top: 19px;
  }
}
  .agree {
    margin-top: 112px;
    margin-bottom: 37px;
  }
</style>
