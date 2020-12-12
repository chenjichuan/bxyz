<template>
  <div class="content">
    <Former
      ref="mainform"
      class="form-info"
      label-position="left"
      :label-width="150"
      :value="formData"
      :submit-button="false"
      :form-label="formLabel"
      style="width: 704px;margin-right: 165px;"
      @on-change="formChange">
      <div slot="foot" class="footer">
        <Button type="primary">保存</Button>
        <Button type="primary">下一步</Button>
      </div>
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
</style>
<style scoped lang="less">
  .footer {
    margin-top: 83px;
    button {
      width: 200px;
      height: 50px;
      border-radius: 25px;
      margin-right: 40px;
    }
  }
</style>
