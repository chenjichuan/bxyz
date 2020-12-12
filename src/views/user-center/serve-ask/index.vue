<template>
  <div class="content">
    <Former
      ref="mainform"
      class="form-info"
      label-position="left"
      :label-width="150"
      :value="formData"
      :submit-button="false"
      :form-label="formLabel"
      style="width: 804px;margin-right: 165px;"
      @on-change="formChange">
      <div slot="foot" class="footer">
        <p style="margin-bottom: 36px;">上传资料（选填）</p>
        <Upload
          multiple
          type="drag"
          class="uploader"
          action="//jsonplaceholder.typicode.com/posts/">
          <div style="padding: 20px 0">
            <Icons type="upload" h="48" w="48" />
            <p>点击或将文件拖拽到这里上传</p>
            <p>支持扩展名：.rar .zip .doc .docx .pdf .jpg，限20M以内</p>
          </div>
        </Upload>
        <div style="margin-top: 57px;margin-bottom: 67px;">
          <Checkbox v-model="agree" class="agree">
            <span style="margin: 0 20px 0 17px">我同意</span> 请您确保提交的资料与服务需求相关，个人隐私及不希望披露的信息，请自行处理后上传。
          </Checkbox>
        </div>

        <Button type="primary">保存</Button>
        <Button type="primary">提交</Button>
      </div>
    </Former>
  </div>
</template>

<script>
  import Former from '@/components/former'
  import Icons from '@/components/icon'
  import formLabel from "./formLabel";
  export default {
   components: { Icons, Former },
    data() {
      return {
        agree: false,
        formData: {},
        formLabel,
      }
    },
    methods: {
      formChange () {
      },
    }
  }
</script>

<style lang="less">
 .ivu-upload.ivu-upload-drag {
   width: 600px;
   height: 300px;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
  }
</style>
<style scoped lang="less">
  .footer {
    margin-top: 83px;
    button {
      width: 200px;
      height: 50px;
      border-radius: 25px;
      margin-right: 40px;
    }
  }
</style>
