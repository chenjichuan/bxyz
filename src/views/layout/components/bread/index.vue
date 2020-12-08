<template>
  <Breadcrumb v-show="breadcrumb.length > 1">
    <BreadcrumbItem
      v-for="(item, index) in breadcrumb" :key="index" :to="renderTo(item.to, index)">
      {{ item.text }}
    </BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters(['breadcrumb'])
    },
    methods: {
      renderTo (to, index) {
        if (this.breadcrumb.length - 1 === index) {
          return ''
        }
        return to && ('/' + to)
      }
    },
    created () {
    }
  }
</script>
