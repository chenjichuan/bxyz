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
      @on-submit="submit"
      @on-change="formChange">
    </Former>
  </div>
</template>

<script>
  import Former from '@/components/former'
  import formLabel from "./formLabel";
  import { changePwd } from './api'
  import { mapMutations } from "vuex";
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
      ...mapMutations(['clearUserInfo']),
      formChange () {
      },
      submit () {
        changePwd(this.formData).then(res => {
          console.log(res)
          this.clearUserInfo(() => {
            if (this.$route.name !== 'auth/login') {
              location.replace( '/#/auth/login')
            }
          })
        })
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
