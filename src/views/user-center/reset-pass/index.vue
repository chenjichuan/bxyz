<template>
  <div class="mod-reset-pass">
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
  .mod-reset-pass {
    .bottom-buttons {
      margin-top: 100px;
    }
  }
</style>
<style scoped lang="less">

</style>
