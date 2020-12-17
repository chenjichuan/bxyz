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
      <Form
        ref="formCustom"
        :model="formCustom"
        :rules="ruleValidate"
        :label-width="100" label-position="left" class="form">
        <FormItem label="手机号码" prop="phone">
          <div style="display: flex;justify-content: space-between">
            <Input v-model="formCustom.phone" type="tel" maxlength="11" style="width: 300px" />
            <Button @click="sendCodeHandler">发送验证码</Button>
          </div>
        </FormItem>
        <FormItem label="登录密码" prop="password">
          <Input v-model="formCustom.password" type="password" />
        </FormItem>
        <FormItem label="确认密码" prop="password_confirmation">
          <Input v-model="formCustom.password_confirmation" type="password" />
        </FormItem>
        <FormItem label="验证码" prop="code">
          <Input v-model="formCustom.code" />
        </FormItem>
        <template v-if="tab === '2'">
          <FormItem label="单位类型" prop="company_type">
            <Select v-model="formCompany.company_type" placeholder="选择单位类型">
              <Option v-for="item in options" :key="item.value" :value="item.value">
                {{ item.text }}
              </Option>
            </Select>
          </FormItem>
          <FormItem label="单位全称" prop="company_name">
            <Input v-model="formCompany.company_name" />
          </FormItem>
          <FormItem label="联系人" prop="company_linkman">
            <Input v-model="formCompany.company_linkman" />
          </FormItem>
        </template>
        <template v-if="tab === '3'">
          <FormItem label="真实姓名" prop="real_name">
            <Input v-model="formLaw.real_name" />
          </FormItem>
          <FormItem label="执业证号" prop="practice_number">
            <Input v-model="formLaw.practice_number" />
          </FormItem>
          <FormItem label="职业年限" prop="working_years">
            <Input v-model="formLaw.working_years" />
          </FormItem>
          <FormItem label="专业领域" prop="specialty">
            <Input v-model="formLaw.specialty" />
          </FormItem>
          <FormItem label="所在律所" prop="law_office">
            <Input v-model="formLaw.law_office" />
          </FormItem>
        </template>
        <FormItem>
          <Checkbox v-model="agree" class="agree">
            <span style="margin: 0 20px 0 17px">我同意</span> <a href="javascript:;">《用户协议及隐私条款》</a>
          </Checkbox>
        </FormItem>
        <FormItem class="">
          <Button class="sure" :loading="posting" :disabled="!agree" @click="handleSubmit">确认注册</Button>
          <a href="javascript:;" class="login-go" @click="$router.push({ name: 'auth/login' })">已有账号，请直接登录</a>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
  import { register, companyRegister, lawyerRegister } from "./api";
  import { sendCode } from "../../common/api";
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
        posting: false,
        agree: false,
        tab: '1',
        formCustom: {},
        formCompany: {},
        formLaw: {},
        options: [
          { value: '1', text: '民办非企业' },
          { value: '2', text: '基金会' },
          { value: '3', text: '社会团体' },
          { value: '4', text: '见外非政府组织' },
          { value: '5', text: '企业' },
          { value: '6', text: '其他单位' },
        ],
        ruleValidate: {
          phone: [
            { validator: checkPhone, message: '请输入正确的手机号码', trigger: 'blur' }
          ]
        }
      }
    },
    mounted () {
    },
    methods: {
      label: (h) => {
        return h('div', [
          h('span', { style: { marginRight: '9px' } }, '个人注册'),
          h('Tooltip', { attrs: { transfer: true, placement: 'top', content: '限残障者本人及其亲友' } }, [
            h('Icon', { attrs: { type: 'ios-alert-outline' } })
          ]),
        ])
      },
      sendCodeHandler () {
        this.$refs['formCustom'].validateField('phone', (fail) => {
          if (!fail) {
            sendCode({ tel: this.formCustom.phone }).then(res => {
              this.$Message.success(res.message)
            })
          }
        })
      },
      handleSubmit () {
        this.$refs['formCustom'].validate((valid) => {
          if (valid) {
            this.registerHandler()
          }
        })
      },
      registerHandler () {
        let params = {}
        let api = register
        if (this.tab === '1') {
          api = register
          params = { ...this.formCustom }
        } else if (this.tab === '2') {
          api = companyRegister
          params = {
            ...this.formCustom,
            ...this.formCompany,
          }
        } else {
          api = lawyerRegister
          params = {
            ...this.formCustom,
            ...this.formLaw,
          }
        }
        this.posting = true
        api(params).then(res => {
          this.$Message.success(res.message)
          setTimeout(() => {
            this.$router.replace({ name: 'auth/login' })
          }, 1000)
        }).finally(() => {
          setTimeout(() => {
            this.posting = false
          }, 1000)
        })
      }
    },
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
        margin: 0 !important;
      }
    }
  }
</style>
