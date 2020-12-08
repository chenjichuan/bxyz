<template>
  <div class="member-info">
    <Former
      ref="mainform"
      labelPosition="left"
      :value="formData"
      :submitButton="true"
      :form-label="formLabel"
      @on-change="formChange"
    />
  </div>
</template>

<script>
  import Former from '@/components/former'
//  import Icons from '@/components/icon'
  import formLabel from './formLabel'
  export default {
   components: { Former },
    data() {
      return {
        formLabel,
        formData: {}
      }
    },
    methods: {
      formChange () {}
    }
  }
</script>


<style scoped lang="less">
  .member-info {
    margin-left: 30px;
  }
</style>
