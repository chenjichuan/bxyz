<template>
  <div class="action">
    <Search class="search" @onSearch="onSearch" />
    <div class="infos">
      <Icons type="tel" />
      <p class="number">4000-111-528</p>
      <Icons type="cart" style="margin-right: 39px;" />
      <div class="user">
        <Icons class="user-icon" :url="test" w="40" h="40" style="" />
        <span class="user-name">Jessica</span>
        <Tooltip content="退出" placement="bottom">
          <Icons type="quit" w="20" h="20"  style="cursor: pointer;"/>
        </Tooltip>
      </div>
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
    margin-left: 50px;
  }
  .user {
    display: flex;
    align-items: center;
    transform: translateY(-28px);
    .user-icon {
      border-radius: 100%;
      overflow: hidden;
      border: 2px solid #fff;
    }
    .user-name {
      font-size: 14px;
      font-family: SourceHanSansSC-Normal;
      line-height: 19px;
      color: #FFFFFF;
      margin-left: 15px;
      margin-right: 13px;
    }
  }
}
</style>
