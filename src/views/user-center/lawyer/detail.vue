<template>
  <div>
    <Editor ref="editor" />
    <Form ref="formItem" :model="formItem" inline>
      <FormItem label="请选择案由分类" style="width: 200px">
        <Select v-model="formItem.b_id">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="是否为残障领域业务" style="width: 200px">
        <Select v-model="formItem.is_disabled">
          <Option value="1">是</Option>
          <Option value="0">否</Option>
        </Select>
      </FormItem>
    </Form>
    <div class="buttons">
      <Button type="primary" @click="submit">提交</Button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Editor from '@/components/editor'
  import { lawReplyQues } from './api'
  export default {
    components: { Editor },
    data ()  {
      return {
        formItem: {
        },
        return_content: ''
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    methods: {
      submit () {
        this.return_content = this.$refs['editor'].value
        console.log(this.return_content)
        lawReplyQues({
          return_content: this.return_content,
          ...this.formItem,
          id: this.$route.params.id,
          u_id: this.userInfo.id
        })
      }
    }
  }
</script>

<style scoped lang="less">
.buttons {
  margin-top: 20px;
  text-align: right;
  button {
    width: 200px;
    height: 50px;
    border-radius: 25px;
  }
}
</style>
