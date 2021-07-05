<template>
  <div class="form-app">
    <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
      <a-form-model-item has-feedback required label="邮箱" prop="email">
        <a-input v-model="ruleForm.email" type="Emeil" autocomplete="off" placeholder="Email" />
      </a-form-model-item>
      <a-form-model-item has-feedback required label="密码" prop="password">
        <a-input
          v-model="ruleForm.password"
          type="密码"
          autocomplete="off"
          placeholder="Password"
        />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('ruleForm')">
          登录
        </a-button>
        <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
          注册
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import api from '../api/login';

export default {
  data() {
    const validatePass = (rule, value, callback) => {
      const Rex = /^\w+@\w*.(com|cn)/g;
      if (value === '') {
        callback(new Error('请输入邮箱'));
      } else if (Rex.test(value)) {
        callback();
      } else {
        callback(new Error('邮箱格式不正确！'));
      }
    };
    const validatePass2 = (rule, value, callback) => {
      const Rex = /\w*/g;
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (Rex.test(value)) {
        callback();
      } else {
        callback(new Error('密码格式不正确！'));
      }
    };
    return {
      ruleForm: {
        email: '',
        password: '',
      },
      rules: {
        email: [{ validator: validatePass, trigger: 'change' }],
        password: [{ validator: validatePass2, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.postLogin(this.ruleForm).then(
            (res) => {
              if (res.status !== 'fail') {
                this.$store.dispatch('loginNamelogin', res);
                this.$router.push('/');
              }
            },
            (error) => Promise.reject(error),
          );

          return true;
        }
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
@import url("~@/assets/css/login.less");
</style>
