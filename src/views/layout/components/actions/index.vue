<template>
  <div class="action">
    <Search class="search" @onSearch="onSearch" />
    <div class="infos">
      <Icons type="tel" />
      <p class="number">4000-111-528</p>
      <Badge
        :count="cartList.length" class-name="badge" :offset="[18, 2]" style="cursor:pointer;width: 32px;height: 32px;"
        @click.native="goBuket">
        <Icons type="cart" style="cursor:pointer;position:absolute;" />
      </Badge>
      <div class="user" v-if="userInfo.id">
        <Avatar
          class="user-icon" size="40"
          style="cursor:pointer;"
          :src="userInfo.image"
          @click.native="$router.push({ name: 'user-center' })"
        />
        <span class="user-name">{{ userInfo.username }}</span>
        <Icons type="quit" w="20" h="20"  style="cursor: pointer;" @click.native="logOut"/>
      </div>
      <div v-else class="user">
        <a v-if="$route.name !== 'auth/login'" href="javascript:;" @click="$router.push({name: 'auth/login'})">登录</a>
        <span v-if="$route.name !== 'auth/register' && $route.name !== 'auth/login'" class="line"/>
        <a v-if="$route.name !== 'auth/register'" href="javascript:;" @click="$router.push({name: 'auth/register'})">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
  import Icons from '@/components/icon'
  import Search from '../search'
  import test from '@/assets/images/icons/timg2.jpeg'
  import { cartList as getCartList } from '@/common/api'
  import { mapMutations, mapGetters } from 'vuex'
  export default {
    components: { Search, Icons },
    data () {
      return {
        test,
      }
    },
    computed: {
      ...mapGetters(['userInfo', 'cartList'])
    },
    created () {
      // 先从本地提取userinfo
      this.setUserInfo(this.$ls.get('userInfo') || {})
      this.getCarlist()
    },
    watch: {
      '$route' () {
        let userInfo = this.$ls.get('userInfo') || {}
        if (!Object.keys(userInfo).length) {
          this.clearUserInfo()
        }
      }
    },
    methods: {
      ...mapMutations(['setUserInfo', 'clearUserInfo', 'setCartList']),
      onSearch (value) {
        console.log(value)
      },
      getCarlist() {
        getCartList({ u_id: this.userInfo.id }).then(res => {
          this.setCartList(res || {})
        })
      },
      goBuket () {
        if (this.$route.name === 'buket') return
        this.$router.push({ name: 'buket' })
      },
      logOut () {
        this.$Notice.success({
          title: '退出成功'
        });
        this.clearUserInfo(() => {
          if (this.$route.name !== 'auth/login') {
            location.replace( '/#/auth/login')
          }
        })
      },
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
    margin-left: 39px;
    a {
      color: #fff;
      &:hover {
        color: #D4FFE9;
      }
    }
    .line {
      height: 14px;
      display: inline-block;
      width: 1px;
      background-color: #fff;
      margin: 0 10px;
    }
    .user-icon {
      border-radius: 100%;
      overflow: hidden;
      border: 2px solid #fff;
    }
    .user-name {
      font-size: 14px;
      line-height: 19px;
      color: #FFFFFF;
      margin-left: 15px;
      margin-right: 13px;
    }
  }
}
</style>
