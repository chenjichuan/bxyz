<template>
  <i class="icons" :style="{width: w + 'px', height: h + 'px'}">
    <img v-if="url" :src="url" />
    <img v-if="type === 'cart'" src="../../assets/images/icons/cart.png">
    <img v-if="type === 'tel'" src="../../assets/images/icons/tel.png" style="padding: 4px">
    <img v-if="type === 'quit'" src="../../assets/images/icons/quit.png">
    <img v-if="type === 'law'" src="../../assets/images/icons/law-normal.png">
    <img v-if="type === 'relieved'" src="../../assets/images/icons/relieved-normal.png">
    <img v-if="type === 'safeguard'" src="../../assets/images/icons/safeguard-normal.png">
    <img v-if="type === 'counsel'" src="../../assets/images/icons/counsel-hover.png">
    <img v-if="type === 'order'" src="../../assets/images/icons/order.png">
    <img v-if="type === 'fw'" src="../../assets/images/icons/fw.png">
    <img v-if="type === 'zl'" src="../../assets/images/icons/zl.png">
    <img v-if="type === 'id'" src="../../assets/images/icons/id.png">
    <img v-if="type === 'lock'" src="../../assets/images/icons/lock.png">
    <img v-if="type === 'fp'" src="../../assets/images/icons/fp.png">
    <img v-if="type === 'server'" src="../../assets/images/icons/server.png">
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
      },
      w: {
        type: String,
        default: ''
      },
      h: {
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
