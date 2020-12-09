<template>
  <div class="mod-register">
    <div class="content-box">
      <div class="top">
        <span>注册</span>
        <span>请选择您的注册类型</span>
      </div>
      <Tabs v-model="tab" class="tabs">
        <TabPane :label="label" name="1" />
        <TabPane label="单位注册" name="2" />
        <TabPane label="律师注册" name="3" />
      </Tabs>
      <Form ref="formCustom" :model="formCustom" :label-width="100" label-position="left" class="form">
        <FormItem label="手机号码" prop="phone">
          <Input type="tel" v-model="formCustom.phone" maxlength="11" />
        </FormItem>
        <FormItem label="登录密码" prop="passwd">
          <Input type="password" v-model="formCustom.passwd"></Input>
        </FormItem>
        <FormItem label="确认密码" prop="passwdCheck">
          <Input type="password" v-model="formCustom.passwdCheck"></Input>
        </FormItem>
        <template v-if="tab === '2'">
          <FormItem label="单位类型" prop="city">
            <Select v-model="formCustom.city" placeholder="选择单位类型">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
          <FormItem label="单位全称" prop="sss">
            <Input v-model="formCustom.phone" />
          </FormItem>
          <FormItem label="联系人" prop="ffff">
            <Input v-model="formCustom.phone" />
          </FormItem>
        </template>
        <template v-if="tab === '3'">
          <FormItem label="真实姓名" prop="namerr">
            <Input v-model="formCustom.namerr" />
          </FormItem>
          <FormItem label="执业证号" prop="addd">
            <Input v-model="formCustom.addd" />
          </FormItem>
          <FormItem label="职业年限" prop="fadsd">
            <Input v-model="formCustom.fadsd" />
          </FormItem>
          <FormItem label="专业领域" prop="ff1ff">
            <Input v-model="formCustom.fadsd" />
          </FormItem>
          <FormItem label="所在律所" prop="ff1ff">
            <Input v-model="formCustom.phone" />
          </FormItem>
        </template>
        <FormItem label="">
          <div id="smoth"></div>
        </FormItem>
        <FormItem>
          <Checkbox v-model="agree" class="agree">
            <span style="margin: 0 20px 0 17px">我同意</span> <a href="javascript:;">《用户协议及隐私条款》</a>
          </Checkbox>
        </FormItem>
        <FormItem class="">
          <Button class="sure" :disabled="!allow || !agree">确认注册</Button>
          <a href="javascript:;" class="login-go" @click="$router.push({ name: 'auth/login' })">已有账号，请直接登录</a>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>

  import '../../common/js/jigsaw.min.js'
  export default {
    data () {
      return {
        agree: false,
        allow: false,
        tab: '1',
        formCustom: {}
      }
    },
    mounted () {
      const _this = this
      window.jigsaw.init({
        el: document.getElementById('smoth'),
        width: 310, // 可选, 默认310
        height: 155, // 可选, 默认155
        onSuccess: function () {
          _this.allow = true
        },
        onFail: function () {
          _this.allow = false
        },
        onRefresh: function () {
          _this.allow = false
        }
      })
    },
    methods: {
      label: (h) => {
        return h('div', [
          h('span', { style: { marginRight: '9px' } }, '个人注册'),
          h('Tooltip', { attrs: { transfer: true, placement: 'top', content: '限残障者本人及其亲友' } }, [
            h('Icon', { attrs: { type: 'ios-alert-outline' } })
          ]),
        ])
      }
    }
  }
</script>

<style lang="less">
  .mod-register {
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
        width: 30%;
      }
    }
  }
</style>
<style lang="less" scoped>
  .mod-register {
    padding-top: 82px;
    background: url("../../assets/images/bg/register.jpg");
    background-size: 100% 100%;
    padding-bottom: 100px;
    min-height: 1080px;
  }

  .content-box {
    width: 1200px;
    margin: 0 auto;
    padding: 80px 216px 146px;
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
      padding-right: 160px;

      .sure {
        width: 200px;
        height: 50px;
        background: #82A694;
        border-radius: 25px;
        color: #fff;
      }

      .login-go {
        font-size: 16px;
        line-height: 21px;
        color: #82A694;
        margin-left: 40px;
      }
      #smoth {
        margin: 0!important;
      }
    }
  }
</style>
