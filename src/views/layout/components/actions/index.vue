<template>
  <div class="action">
    <Search class="search" @onSearch="onSearch" />
    <div class="infos">
      <Icons type="tel" />
      <p class="number">4000-111-528</p>
      <Icons type="cart" />
      <Icons :url="test" />
    </div>
  </div>
</template>

<script>
  import Icons from '@/components/icon'
  import Search from '../search'
  import test from '@/assets/images/icons/timg2.jpeg'
  export default {
    components: { Search, Icons },
    data () {
      return {
        test
      }
    },
    methods: {
      onSearch (value) {
        console.log(value)
      }
    }
  }
</script>

<style scoped lang="less">
.action {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .tel {
    flex-shrink: 0;
  }
  .cart {
    flex-shrink: 0;
  }
  .number {
    font-size: 20px;
    color: #fff;
    font-weight: 400;
    line-height: 28px;
    margin-left: 10px;
    margin-right: 30px;
  }
  .search {
    flex-shrink: 0;
    transform: translateY(20px);
    width: 130px;
  }
  .infos {
    width: 100%;
    display: flex;
    padding-top: 6px;
    margin-left: 8%;
  }
}
</style>
