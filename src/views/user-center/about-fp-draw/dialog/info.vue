<template>
  <div>
    <p class="t">填写开票信息</p>
    <Former
      ref="mainform"
      class="form-info"
      label-position="left"
      :value="formData"
      :submit-button="false"
      :form-label="formLabel"
      style="width: 504px;margin-right: 165px;"
      @on-change="formChange">
      <div slot="ness" class="ness" @click="nessHander">
        {{ isHide ? '显示非必填信息' : '收起非必填信息' }}
      </div>
    </Former>
    <Button type="primary" size="large" class="submit" @click="submit">保存</Button>
  </div>

</template>

<script>
  import formLabel from "./formLabel";
  import Former from '@/components/former'
  import { applyForInvoice } from '../api'
  import { mapGetters } from "vuex";

  export default {
    components: { Former },
    props: {
      orderId: {
        type: [String, Number, Array],
        default: ''
      },
      pId: {
        type: [String, Number, Array],
        default: ''
      }
    },
    data () {
      return {
        modal: false,
        agree: false,
        formData: {},
        formLabel,
        isHide: false
      }
    },
    computed: {
      ...mapGetters(['userInfo']),
    },
    methods: {
      formChange () {
      },
      nessHander () {
        this.isHide = !this.isHide
        if (this.isHide) {
          document.querySelector('.mod-phone').style.display = 'none'
          document.querySelector('.mod-opening_back').style.display = 'none'
          document.querySelector('.mod-back_account').style.display = 'none'
        } else {
          document.querySelector('.mod-phone').style.display = 'block'
          document.querySelector('.mod-opening_back').style.display = 'block'
          document.querySelector('.mod-back_account').style.display = 'block'
        }
      },
      submit () {
        const params = {
          u_id: this.userInfo.id,
          order_id: this.orderId.toString(),
          ...this.formData
        }
        applyForInvoice(params).then(res => {
          this.$Message.success(res.message)
        })
      },
    }
  }
</script>

<style scoped lang="less">
  .t {
    font-size: 14px;
    color: #646464;
    margin-bottom: 47px;
    padding-left: 23px;
  }

  .submit {
    width: 200px;
    height: 50px;
    border-radius: 25px;
    margin-top: 62px;
  }
  .ness {
    font-size: 16px;
    color: #82A694;
    margin-top: 43px;
    margin-bottom: 60px;
    cursor: pointer;
  }
</style>
