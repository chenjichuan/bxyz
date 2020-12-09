<template>
  <div class="mod-fp-write">
    <p class="top-title">请选择您要开票的订单</p>
    <Former
      ref="mainform"
      class="form-info"
      label-position="left"
      :value="formData"
      :submit-button="true"
      :form-label="formLabel"
      style="width: 504px;margin-right: 165px;"
      @on-change="formChange">
    </Former>
  </div>
</template>

<script>
  import Former from '@/components/former'
  import formLabel from "./formLabel";
  export default {
   components: { Former },
    data() {
      return {
        agree: false,
        formData: {},
        formLabel,
      }
    },
    methods: {
      formChange () {
      },
    }
  }
</script>

<style lang="less">
  .mod-fp-write {
    .bottom-buttons {
      margin-top: 100px;
    }
  }
</style>
<style scoped lang="less">
  .top-title {
    font-size: 14px;
    line-height: 19px;
    color: #646464;
    margin-bottom: 47px;
  }
</style>
