import { addCart, getcartList, productDetail } from "./api";
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(['userInfo']),
  },
  mounted () {
    // 获取商品详情
    productDetail({ id: this.$route.query.id }).then(res => {
      // todo
      console.log(res)
    })
  },
  methods: {
    ...mapMutations(['setCartList']),
    refreshCart() { // 刷新购物车
      getcartList({ u_id: this.userInfo.id }).then(res => {
        this.setCartList(res || {})
      })
    },
    addCarList () { // 添加购物车
      let pAll = []
      this.good.forEach(item => {
        pAll.push(addCart({ u_id: this.userInfo.id, p_id: item }))
      })
      Promise.all(pAll).then(() => {
        this.refreshCart()
      }, () => {
        this.refreshCart()
      })
    }
  }
}
