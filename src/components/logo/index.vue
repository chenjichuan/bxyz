<template>
  <div class="mod-logo" :style="{width: w + 'px', height: h + 'px'}">
    <img :src="src" alt="">
  </div>
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
        default: ''
      },
      w: {
        type: String,
        default: ''
      },
      h: {
        type: String,
        default: ''
      },
    }
  }
</script>

<style scoped lang="less">
.mod-logo {
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
}
</style>
