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
      <div v-show="+userInfo.type === 1" id="upload" >
        <Upload
          ref="upload"
          name="image"
          :show-upload-list="false"
          :default-file-list="defaultList"
          :before-upload="handleBeforeUpload"
          :on-format-error="handleFormatError"
          :on-success="handleSuccess"
          :on-error="handleError"
          :format="['jpg','jpeg','png']"
          :max-size="2048"
          type="drag"
          action="//zhucan.209.qiyundongli.cn/api/uploadImg"
          style="display: inline-block;">
          <div class="user-text">
            <p>上传头像</p>
          </div>
          <img v-if="uploadList.length === 0" src="./icon.png" style="display: block;width: 100%;">
          <img v-else :src="'https://bxyz.oss-cn-beijing.aliyuncs.com/' + this.uploadList[0].url" style="width: 100%;height: 100%;">
        </Upload>
      </div>
    </div>
  </div>
</template>

<script>
  import Former from '@/components/former'
  import formLabel from './formLabel'
  import { updUserInfo } from "./api";
  import { mapGetters } from "vuex";
  import { getUserInfo } from "../../../common/api";

  export default {
    components: { Former },
    data () {
      const userInfo = this.$ls.get('userInfo') || {}
      return {
        formLabel: formLabel(userInfo),
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
          this.formLabel[0].items[0].value = v.phone
        }
      }
    },
    mounted () {
      this.uploadList = this.$refs.upload.fileList;
    },
    methods: {
      formChange () {},
      handleBeforeUpload () {
        return true
      },
      handleSuccess (res, file) {
        this.$set(file, 'url', res.path)
        if(this.uploadList.length > 1) {
          this.uploadList.shift()
        }
      },
      handleFormatError () {
        this.$Notice.warning({
          title: '图片类型错误',
          desc: '请上传 jpg,jpeg,png 格式的图片'
        });
      },
      handleError (error) {
        this.$Notice.warning({
          title: '上传失败',
          desc: error
        })
      },
      getUser () {
        getUserInfo({
          u_id: this.userInfo.id,
          token: this.userInfo.token,
        }).then(info => {
          const userInfo = {
            ...this.userInfo,
            ...info.data,
            token: this.userInfo.token,
          }
          // 更新本地userInfo
          this.$ls.set('userInfo', userInfo)
          this.setUserInfo(userInfo)
        })
      },
      submit () {
        let urlList = this.uploadList[0] || {}
        const params = {
          ...this.formData,
          u_id: this.userInfo.id,
          image: urlList.url
        }
        delete params.phone
        updUserInfo(params).then(() => {
         this.getUser()
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
