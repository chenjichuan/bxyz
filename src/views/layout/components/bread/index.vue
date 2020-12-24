<template>
    <Breadcrumb v-show="showbread">
      <template v-for="(item, index) in breadcrumb">
        <Icon
          :key="item.to + index"
          v-show="item.to !== 'home' && index < breadcrumb.length - 1"
          style="cursor:pointer;"
          type="ios-close-circle-outline" @click.stop="closeBread(item, index)" />
        <BreadcrumbItem
          :key="index" :to="renderTo(item.to, index)">
          {{ item.text }}
        </BreadcrumbItem>
      </template>

    </Breadcrumb>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters(['breadcrumb']),
      showbread () {
        return this.$route.name !== 'home'
      }
    },
    methods: {
      ...mapMutations(['delBreadList']),
      renderTo (to, index) {
        if (this.breadcrumb.length - 1 === index) {
          return ''
        }
        return to && ('/' + to)
      },
      closeBread (item, index) {
        console.log(item, index)
        this.delBreadList([item, index])
      }
    },
    created () {
    }
  }
</script>
