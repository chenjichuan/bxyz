import { addCart, getcartList,  productDetail } from "./api";
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(['userInfo']),
    title () {
      return this.$route.query.title
    },
    total () {
      let res = 0
      this.good.forEach(item => {
        let [tar] = this.list.filter(v => v.id === item)
        res += +tar.price
      })
      return res
    }
  },
  mounted () {
    // product()
    // 获取商品列表
    productDetail({ id: this.$route.query.id }).then(res => {
      // todo
      console.log(res)
      const { list } = res.data
      this.list = list
    })
  },
  methods: {
    ...mapMutations(['setCartList']),
    refreshCart() { // 刷新购物车
      getcartList({ u_id: this.userInfo.id }).then(res => {
        this.setCartList(res || {})
      })
    },
    addCarList (states) { // 添加购物车
      console.log(states)
      if (this.good.length === 0) return
      let pAll = []
      this.good.forEach(item => {
        pAll.push(addCart({ u_id: this.userInfo.id, p_id: item }))
      })
      Promise.all(pAll).then(() => {
        if (states) {
          this.$router.push({
            name: 'buket'
          })
        } else {
          this.refreshCart()
        }
      }, () => {
        if (states) {
          this.$router.push({
            name: 'buket'
          })
        } else {
          this.refreshCart()
        }
      })
    }
  }
}
