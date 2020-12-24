<template>
  <div class="mod-login">
    <div class="content-box">
      <div class="top">
        <span>登录</span>
        <span>请选择您的登录方式</span>
      </div>
      <Tabs v-model="tab" class="tabs">
        <TabPane label="账号登录" name="1" />
        <TabPane label="微信登录" name="2" />
      </Tabs>
      <Form
        v-show="tab === '1'"
        ref="formCustom"
        :model="formCustom"
        :rules="ruleValidate"
        :label-width="100" label-position="left" class="form">
        <FormItem label="手机号码" prop="phone" style="width: 500px;">
          <Input type="tel" v-model="formCustom.phone" maxlength="11" />
        </FormItem>
        <FormItem label="密码" prop="password" style="width: 500px;">
          <Input type="password" v-model="formCustom.password"></Input>
        </FormItem>
        <FormItem label="验证码" prop="captcha">
          <div style="display: flex;">
            <Input type="password" v-model="formCustom.captcha" style="width: 220px;margin-right: 20px;" />
            <div style="position:relative;width: 120px;height: 47px;">
              <img :src="codeImg" />
              <Icon
                type="ios-refresh" size="20"
                style="position:absolute;right: 0;cursor:pointer;"
                @click="getCode" />
            </div>
          </div>
        </FormItem>
        <FormItem class="">
          <Button class="sure" @click="handleSubmit">登录</Button>
          <Button class="register" @click="$router.push({ name: 'auth/register' })">注册</Button>
          <a href="javascript:;" style="margin-left: 37px;">忘记密码</a>
        </FormItem>
      </Form>
      <section v-show="tab === '2'" class="wx">
        <div class="wx-qr"></div>
        <p>请使用微信扫码登录</p>
      </section>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from "vuex"
  import { loadJs } from "../../common/js/utils"
  import { getCaptcha, cartList as getCartList } from '../../common/api'
  import { login } from './api'
  function checkPhone (rule, value, callback) {
    if (/^1[3456789]\d{9}$/.test(value)) {
      callback()
      return true
    } else {
      callback(new Error(rule.message));
    }
  }
  export default {
    data () {
      return {
        tab: '1',
        codeImg: '',
        formCustom: {},
        ruleValidate: {
          phone: [
            { validator: checkPhone, message: '请输入正确的手机号码', trigger: 'blur' }
          ]
        }
      }
    },
    beforeCreate () {
      if (this.$ls.get('token')) {
        this.$router.push({ name: 'home' })
      }
    },
    mounted () {
      loadJs('https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js', () => {
        console.log(window.WxLogin)
      })
      this.getCode()
    },
    methods: {
      ...mapMutations(['setUserInfo', 'setCartList']),
      getCode () {
        getCaptcha().then(res => {
          this.codeImg = res.url.img
        })
      },
      login () {
        login({
          ...this.formCustom
        }).then(res => {
          const userInfo = {
            ...res.data,
            phone: this.formCustom.phone,
          }
          // 更新本地userInfo
          this.$ls.set('userInfo', userInfo)
          this.setUserInfo(userInfo)
          this.$Notice.success({
            title: res.message
          });
          getCartList({ u_id: res.data.id }).then(res => {
            this.setCartList(res || {})
            setTimeout(() => {
              location.href = '/#/home'
            }, 1000)
          })

        })
      },
      handleSubmit () {
        this.$refs['formCustom'].validate((valid) => {
          if (valid) {
            this.login()
          }
        })
      },
    }
  }
</script>

<style lang="less">
  .mod-login {
    .ivu-tabs-nav .ivu-tabs-tab-active {
      color: #82A694;
    }

    .ivu-tabs-ink-bar {
      background-color: #82A694;
    }

    .ivu-tabs-nav .ivu-tabs-tab:hover {
      color: #82A694;
    }

    .ivu-tabs-nav {
      width: 100%;

      .ivu-tabs-tab {
        text-align: center;
        width: 50%;
      }
    }
  }
</style>
<style lang="less" scoped>
  .mod-login {
    padding-top: 82px;
    background: url("../../assets/images/bg/register.jpg");
    background-size: 100% 100%;
    padding-bottom: 100px;
    min-height: 1080px;
  }

  .content-box {
    width: 1200px;
    margin: 0 auto;
    padding: 80px 256px 146px;
    background-color: #fff;

    .top {
      span:first-child {
        font-size: 24px;
        line-height: 32px;
        color: #666666;
      }

      span + span {
        font-size: 14px;
        line-height: 19px;
        color: #666666;
        margin-left: 26px;
      }
    }

    .tabs {
      margin-top: 78px;
      margin-bottom: 54px;
    }

    .form {
      .sure {
        width: 200px;
        height: 50px;
        background: #82A694;
        border-radius: 25px;
        color: #fff;
      }
      .register {
        width: 200px;
        height: 50px;
        background: #CDE2D7;
        border-radius: 25px;
        margin-left: 50px;
        color: #82A694;
      }
    }
    .wx {
      .wx-qr {
        width: 260px;
        height: 260px;
        background-color: #000;
        margin: 0 auto;
      }
      p {
        text-align: center;
        margin-top: 29px;
      }
    }
  }
</style>
