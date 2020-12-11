<template>
  <i class="icons" :style="{width: w + 'px', height: h + 'px'}">
    <img v-if="type === 'cart'" src="../../assets/images/icons/cart.png">
    <img v-if="type === 'tel'" src="../../assets/images/icons/tel.png" style="padding: 4px">
    <img v-if="type === 'quit'" src="../../assets/images/icons/quit.png">
    <img v-if="type === 'law'" src="../../assets/images/icons/law-normal.png">
    <img v-if="type === 'relieved'" src="../../assets/images/icons/relieved-normal.png">
    <img v-if="type === 'safeguard'" src="../../assets/images/icons/safeguard-normal.png">
    <img v-if="type === 'counsel'" src="../../assets/images/icons/counsel-hover.png">
    <img v-if="type === 'play'" src="../../assets/images/icons/play-icon.png">
    <img v-if="type === 'location'" src="../../assets/images/icons/location.png">
    <img v-if="type === 'email'" src="../../assets/images/icons/email.png">
    <img v-if="type === 'phone'" src="../../assets/images/icons/phone.png">
    <img v-if="type === 'net'" src="../../assets/images/icons/net.png">
    <img v-if="type === 'order'" src="../../assets/images/icons/order.png">
    <img v-if="type === 'fw'" src="../../assets/images/icons/fw.png">
    <img v-if="type === 'zl'" src="../../assets/images/icons/zl.png">
    <img v-if="type === 'id'" src="../../assets/images/icons/id.png">
    <img v-if="type === 'lock'" src="../../assets/images/icons/lock.png">
    <img v-if="type === 'fp'" src="../../assets/images/icons/fp.png">
    <img v-if="type === 'server'" src="../../assets/images/icons/server.png">
    <img v-if="type === 'flzx'" src="../../assets/images/icons/flzx.png">
    <img v-if="type === 'contract'" src="../../assets/images/icons/contract.png">
    <img v-if="type === 'renz'" src="../../assets/images/icons/renz.png">
    <img v-if="type === 'rzmb'" src="../../assets/images/icons/rzmb.png">
    <img v-if="type === 'xyfw'" src="../../assets/images/icons/xyfw.png">
    <img v-if="type === 'gwfw'" src="../../assets/images/icons/gwfw.png">
    <img v-if="type === 'step1'" src="../../assets/images/icons/step1.png">
    <img v-if="type === 'step2'" src="../../assets/images/icons/step2.png">
    <img v-if="type === 'step3'" src="../../assets/images/icons/step3.png">
    <img v-if="type === 'pass'" src="../../assets/images/icons/pass.png">
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
