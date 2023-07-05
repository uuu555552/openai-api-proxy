<template>
  <div class="container">
    <div class="login-box">
      <div class="login__title">用户登录</div>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="0px">
        <el-form-item label="" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="login-button" type="primary" @click="login">登录</el-button>
      <div class="other-button">
        <el-button type="text" @click="register">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// import { login } from "@/api/account";
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    };
  },
  methods: {
    ...mapActions(['Login']),
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.Login(this.loginForm).then(res => {
            // 在这里执行登录逻辑
            this.$router.push('/')
          });
        } else {
          console.log('表单验证失败');
          return false;
        }
      });
    },
    register() {
      this.$router.push('/register')
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #1E242E;
  overflow: hidden;
}
.login-box {
  max-width: 400px;
  margin: 200px auto 0;
  background-color: #fff;
  padding: 30px 20px;
}
.login__title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: bold;
}
.login-button {
  width: 100%;
}
.other-button {
  text-align: right;
  margin-top: 10px;
}
</style>