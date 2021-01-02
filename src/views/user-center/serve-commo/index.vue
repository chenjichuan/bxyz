<template>
  <div class="content">
11
  </div>
</template>

<script>
//  import Former from '@/components/former'
//  import Icons from '@/components/icon'
  import { subQuiz } from "./api"
  import { mapGetters } from "vuex";
  export default {
//   components: { Icons, Former },
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    methods: {
      formChange () {},
      submit () {
        console.log(this.formData)
        subQuiz({
          ...this.formData,
          u_id: this.userInfo.id,
          order_id: this.$route.query.order_id
        }).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped lang="less">
</style>
