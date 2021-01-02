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
          ref="upload"
          class="uploader"
          :on-success="handleSuccess"
          action="//zhucan.209.qiyundongli.cn/api/uploadFile">
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

        <Button type="primary" @click="submit">提交</Button>
      </div>
    </Former>
  </div>
</template>

<script>
  import Former from '@/components/former'
  import Icons from '@/components/icon'
  import formLabel from "./formLabel";
  import { subQuiz } from "./api"
  import { mapGetters } from "vuex";
  export default {
   components: { Icons, Former },
    data() {
      return {
        agree: false,
        formData: {},
        formLabel,
        uploadList: []
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    mounted () {
      this.uploadList = this.$refs.upload.fileList;
    },
    methods: {
      formChange () {},
      handleSuccess (res, file) {
        file.url = res.path
      },
      handleRemove (file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      submit () {
        console.log(this.formData)
        subQuiz({
          ...this.formData,
          p_id: 0,
          u_id: this.userInfo.id,
          order_id: this.$route.query.order_id,
          resource: this.uploadList.map(item => item.url)
        }).then(res => {
          console.log(res)
          this.$Message.success('提交成功')
          this.$router.go(-1)
        })
      }
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
