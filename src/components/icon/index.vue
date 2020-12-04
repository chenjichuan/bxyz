<template>
  <i class="icons">
    <img v-if="type === 'cart'" src="../../assets/images/icons/cart.png" alt="">
    <img v-if="type === 'tel'" src="../../assets/images/icons/tel.png" alt="">
    <img v-if="url" :src="url" alt="">
  </i>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="less">
.icons {
  width: 32px;
  height: 32px;
  display: inline-block;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
