<template>
  <Modal
    title="填写发票信息"
    v-model="modal"
    width="700"
    :styles="{top: '20px'}"
    :mask-closable="false"
    @on-ok="submit">
    <Former
      ref="mainform"
      class="form-info"
      label-position="left"
      :value="formData"
      :submit-button="false"
      :form-label="formLabel"
      style="width: 504px;margin-right: 165px;"
      @on-change="formChange">
    </Former>
  </Modal>
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
      }
    },
    computed: {
      ...mapGetters(['userInfo']),
    },
    methods: {
      formChange () {},
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

<style scoped>

</style>
