<template>
  <div class="member-info">
    <div class="inner">
      <Former
        ref="mainform"
        class="form-info"
        label-position="left"
        :value="formData"
        :submit-button="true"
        :form-label="formLabel"
        @on-change="formChange"
        @on-submit="submit"
      />
      <div id="upload">
        <Upload
          ref="upload"
          :show-upload-list="false"
          :default-file-list="defaultList"
          :before-upload="handleUploadicon"
          :on-format-error="handleFormatError"
          :format="['jpg','jpeg','png']"
          :max-size="2048"
          multiple
          type="drag"
          action=""
          style="display: inline-block;">
          <div class="user-text">
            <p>上传头像</p>
          </div>
          <Icon v-if="uploadList.length === 0" type="md-camera" size="20" style="margin-top: 40px;" />
          <img v-else :src="formData.image" style="width: 100%;height: 100%;">
        </Upload>
      </div>
    </div>
  </div>
</template>

<script>
  import Former from '@/components/former'
  import test from '@/assets/images/bg/icon-holder.png'
  import formLabel from './formLabel'
  import { updUserInfo } from "./api";
  import { mapGetters } from "vuex";

  export default {
    components: { Former },
    data () {
      return {
        formLabel,
        formData: {},
        uploadList: [],
        defaultList: [],
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    watch: {
      userInfo: {
        deep: true,
        immediate: true,
        handler (v) {
          console.log(v)
          this.formLabel[0].items[0].value = v.phone
        }
      }
    },
    mounted () {
      this.uploadList = this.$refs.upload.fileList;
    },
    methods: {
      formChange () {
      },
      // handleRemove (file) {
      //   const fileList = this.$refs.upload.fileList;
      //   this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      // },
      handleUploadicon (file) {
        const fileList = this.$refs.upload.fileList;
        const newFile = window.URL.createObjectURL(file)
        this.formData.image = newFile
        fileList.pop()
        fileList.push({
          url: test,
          name: file.name
        })
      },
      handleFormatError () {
        this.$Notice.warning({
          title: '图片类型错误',
          desc: '请上传 jpg,jpeg,png 格式的图片'
        });
      },
      submit () {
        updUserInfo(this.formData).then(res => {
          console.log(res)
          this.clearUserInfo(() => {
            if (this.$route.name !== 'auth/login') {
              location.replace( '/#/auth/login')
            }
          })
        })
      },
    }
  }
</script>

<style lang="less">
  .member-info {
    #upload {
      width: 140px;
      height: 140px;

      .ivu-upload {
        width: 140px;
        height: 140px;
        background: transparent;
      }
    }

    .bottom-buttons {
      margin-top: 100px;
    }
  }

</style>
<style scoped lang="less">
  .member-info {
    .inner {
      display: flex;

      .form-info {
        width: 504px;
        margin-right: 165px;
      }

      #upload {
        position: relative;

        .user-text {
          width: 100%;
          position: absolute;
          bottom: 0;
          line-height: 30px;
          background-color: #000;
          opacity: 0.7;
          font-size: 14px;
          color: #FFFFFF;
        }
      }

      .image-show {
        position: absolute;
        width: 140px;
        height: 140px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
