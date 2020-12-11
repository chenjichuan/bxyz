<template>
  <div>
    <div v-html="his" class="his">
    </div>
    <Editor ref="editor" />
    <Button type="primary" @click="submit">提交</Button>
  </div>
</template>

<script>
  import Editor from '@/components/editor'
  export default {
    components: { Editor },
    data ()  {
      return {
        his: ''
      }
    },
    computed: {
    },
    methods: {
      submit () {
        this.his = this.$refs['editor'].value
        console.log(this.his)
      }
    }
  }
</script>

<style scoped>

</style>
