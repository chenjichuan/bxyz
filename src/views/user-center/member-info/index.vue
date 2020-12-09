<template>
  <div class="member-info">
    <div class="inner">
      <Former
        ref="mainform"
        class="form-info"
        labelPosition="left"
        :value="formData"
        :submitButton="true"
        :form-label="formLabel"
        @on-change="formChange"
      />
      <div id="upload">
        <div v-for="(item, index) in uploadList" :key="index" class="image-show">
          <template v-if="item.status === 'finished'">
            <img :src="item.url">
          </template>
          <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info/>
          </template>
        </div>
        <Upload
          ref="upload"
          :show-upload-list="false"
          :default-file-list="defaultList"
          :on-format-error="handleFormatError"
          :on-success="handleSuccess"
          :format="['jpg','jpeg','png']"
          :max-size="2048"
          multiple
          type="drag"
          action="//jsonplaceholder.typicode.com/posts/"
          style="display: inline-block;">
          <div class="user-text">
            <p>上传头像</p>
          </div>
        </Upload>
      </div>
    </div>
  </div>
</template>

<script>
  import Former from '@/components/former'
  //  import Icons from '@/components/icon'
  import test from '@/assets/images/bg/icon-holder.png'
  import formLabel from './formLabel'

  export default {
    components: {Former},
    data() {
      return {
        formLabel,
        formData: {},
        uploadList: [],
        defaultList: [
          {
            name: 'a42bdcc1178e62b4694c830f028db5c0',
            url: test
          },
        ],
      }
    },
    mounted() {
      this.uploadList = this.$refs.upload.fileList;
      // this.$refs.upload.fileList = [{
      //   url: test,
      //   name: '7eb99afb9d5f317c912f08b5212fd69a'
      // }]
    },
    methods: {
      formChange() {
      },
      // handleView (name) {
      // this.imgName = name;
      // this.visible = true;
      // },
      handleRemove(file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      handleFormatError() {
        this.$Notice.warning({
          title: '图片类型错误',
          desc: '请上传 jpg,jpeg,png 格式的图片'
        });
      },
      handleSuccess(res, file) {
        file.url = test
        file.name = '7eb99afb9d5f317c912f08b5212fd69a';
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
