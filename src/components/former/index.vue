<template>
  <Form
    ref="form"
    :model="form"
    :hide-required-mark="hideRequiredMark"
    :label-width="100"
    :label-position="labelPosition"
    class="form">
    <template v-for="(item, index) in formLabel">
      <Divider v-if="index" :key="'divider' + index" />
      <Alert v-if="item.key" :key="'alert' + index" class="sub-titles"><strong>{{ item.title }}</strong></Alert>
      <template v-for="(formItem, indexform) in item.items">
        <FormItem
          v-if="!formItem.hide"
          :key="indexform"
          :label-width="formItem.labelWidth"
          :prop="formItem.key"
          :label="formItem.label"
          :rules="formItem.rules"
          :style="formItem.style">
          <template v-if="formItem.type === 'number'">
            <Input
              v-model.number="form[formItem.key]"
              :disabled="formItem.disabled"
              :max="formItem.max || 9999999999999"
              type="number"
              @on-change="$emit('on-change', formItem.key, form[formItem.key])" />
          </template>

          <template v-else-if="formItem.type === 'radio'">
            <p v-if="!formItem.children.length" class="no-data">{{ formItem.noData }}</p>
            <RadioGroup
              v-else
              v-model="form[formItem.key]"
              @on-change="$emit('on-change', formItem.key, form[formItem.key], form, formItem)">
              <Radio
                v-for="(radio, indexchild) in formItem.children"
                :key="indexchild"
                :disabled="radio.disabled"
                :label="formItem.resetKey && radio[formItem.resetKey.value] || radio.value">
                {{ formItem.resetKey && radio[formItem.resetKey.label] || radio.label }}
              </Radio>
            </RadioGroup>
          </template>

          <template v-else-if="formItem.type === 'select'">
            <Select
              v-model="form[formItem.key]"
              :multiple="formItem.multiple"
              clearable
              filterable
              @on-change="$emit('on-change', formItem.key, form[formItem.key], form, formItem)">
              <Option
                v-for="(menu, indexOp) in formItem.children"
                :key="indexOp"
                :value="formItem.resetKey && menu[formItem.resetKey.value] || menu.value"
              >{{ formItem.resetKey && menu[formItem.resetKey.label] || menu.label }}</Option>
            </Select>
          </template>

          <template v-else-if="formItem.type === 'checkbox'">
            <p v-if="!formItem.children.length" class="no-data">{{ formItem.noData }}</p>
            <CheckboxGroup
              v-else v-model="form[formItem.key]"
              @on-change="$emit('on-change', formItem.key, form)">
              <Checkbox
                v-for="(checkbox, indexCheck) in formItem.children"
                :key="indexCheck"
                :disabled="checkbox.disabled"
                :label="checkbox.value">
                {{ checkbox.label }}
              </Checkbox>
            </CheckboxGroup>
          </template>

          <template v-else-if="formItem.type === 'textarea'">
            <Input
              v-model="form[formItem.key]" :autosize="{minRows: 3}" type="textarea"
              :maxlength="formItem.maxlength || 1000"
              @on-change="$emit('on-change', formItem.key, form[formItem.key], form)" />
          </template>

          <template v-else-if="formItem.type === 'twins'">
            <template v-for="sub in formItem.subItem">
              <Select
                v-if="sub.type === 'select'"
                :key="sub.key"
                v-model="form[formItem.key][sub.key]"
                :multiple="formItem.multiple"
                :style="sub.style"
                filterable
                @on-change="$emit('on-change', formItem.key, form[formItem.key], formItem.subItem)">
                <Option
                  v-for="menu in sub.children"
                  :key="menu.value"
                  :value="menu.value">{{ menu.label }}</Option>
              </Select>
            </template>
          </template>

          <template v-else-if="formItem.type === 'datePicker'">
            <DatePicker
              v-model="form[formItem.key]"
              show-week-numbers
              type="date" :options="formItem.options" placeholder="请选择时间"
              @on-change="$emit('on-change', formItem.key, form[formItem.key], form, formItem)" />

            <TimePicker
              v-if="formItem.time"
              v-model="form[formItem.key + 'time']"
              class="ml5"
              type="time" placeholder="Select time" />
          </template>

          <template v-else>
            <Input
              v-model="form[formItem.key]"
              :type="formItem.inputType || 'text'"
              :disabled="formItem.disabled"
              :maxlength="formItem.maxlength || 100" />
          </template>
        </FormItem>
      </template>
      <div :key="item.key" v-html="item.tips">{{ item.tips }}</div>
    </template>
    <slot name="foot" />
    <FormItem v-if="submitButton">
      <Button v-if="cancelButton" type="text" size="large">取消</Button>
      <Button type="primary" size="large" id="submit" @click="handleSubmit">保存</Button>
    </FormItem>
  </Form>
</template>

<script>
  export default {
    props: {
      hideRequiredMark: {
        type: Boolean,
        default: false
      },
      labelPosition: {
        type: String,
        default: 'right'
      },
      value: {
        type: Object,
        default: () => ({})
      },
      formLabel: {
        type: Array,
        default: () => ([])
      },
      submitButton: {
        type: Boolean,
        default: false
      },
      cancelButton: {
        type: Boolean,
        default: false
      }
    },
    data () {
      const form = {}
      this.formLabel.forEach((item) => {
        item.items.forEach((obj) => {
          if (obj.hide) return
          if (obj.type === 'twins') {
            form[obj.key] = {}
            obj.subItem.forEach(sub => {
              form[obj.key][sub.key] = ''
            })
          } else {
            form[obj.key] = obj.value
          }
        })
      })
      return {
        form,
      }
    },
    watch: {
      form: {
        deep: true,
        immediate: true,
        handler (val) {
          for (let key in val) {
            this.$set(this.value, key, val[key])
          }
        },
      }
    },
    created () {
    },
    methods: {
      /** 可外部调用，可手动更改某个字段 **/
      setFormValue (key, value) {
        if (typeof this.form[key] === 'object') {
          for (let k in this.form[key]) {
            this.$set(this.form[key], k, value[k])
          }
        } else {
          this.$set(this.form, key, value)
        }
      },
      /** 可外部调用，隐藏某个字段 **/
      setHide (key, status) {
        this.formLabel.forEach(p => {
          p.items.forEach(v => {
            if (v.key === key) {
              this.$set(v, 'hide', status)
              if (status) { // 隐藏状态清除数值
                this.setFormValue(key, '')
              }
            }
          })
        })
      },
      /** 可外部调用，设置chilren **/
      setChildren (key, arr) {
        this.formLabel.forEach(p => {
          p.items.forEach(v => {
            if (v.key === key) {
              this.$set(v, 'children', arr)
            }
          })
        })
      },
      handleSubmit (cb, errorCb) {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            cb && cb()
          } else {
            errorCb && errorCb()
          }
        })
      },
    },
  }
</script>

<style scoped lang="less">
  .form {
    padding: 0 20px;
    background-color: #fff;
  }

  .no-data {
    margin: 0;
    line-height: 32px;
  }

  .sub-titles {
    font-size: 16px;
  }
  #submit {
    width: 200px;
    height: 50px;
    background: #82A694;
    opacity: 1;
    border-radius: 25px;
  }
</style>
