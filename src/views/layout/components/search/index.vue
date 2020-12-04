<template>
  <div class="mod-search">
    <Input class="input" search placeholder="法律咨询" @on-search="searchHandler" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      searchHandler (val) {
        this.$emit('onSearch', val)
      }
    }
  }
</script>
<style lang="less">
  .mod-search {
    width: 130px;
    >.input {
      input {
        padding-left: 16px;
      }
    }
  }
</style>
<style lang="less" scoped>
  .mod-search {
    width: 130px;
    >.input {
      border-radius: 15px;
      overflow: hidden;
    }
  }
</style>
