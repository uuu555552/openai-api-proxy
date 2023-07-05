<template>
  <div class="container">
    <div class="register-box">
      <div class="register__title">用户注册</div>
      <el-form ref="registerForm" :model="registerForm" :rules="registerRules" label-width="0px">
        <el-form-item label="" prop="email">
        <el-input v-model="registerForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="" prop="username">
          <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input type="password" v-model="registerForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="" prop="confirmpassword">
          <el-input type="password" v-model="registerForm.confirmpassword" placeholder="请输入确认密码"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="register-button" type="primary" @click="register">注册</el-button>
      <div class="other-button">
        <el-button type="text" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "@/api/account";

export default {
  name: 'Register',
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.registerForm.confirmpassword !== '') {
          this.$refs.registerForm.validateField('confirmpassword');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      registerForm: {
        email: '',
        username: '',
        password: '',
        confirmpassword: ''
      },
      registerRules: {
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' },
          { min: 6, message: '密码最少六位', trigger: 'blur' }
        ],
        confirmpassword: [{ required: true, validator: validatePass2, trigger: 'blur' }]
      }
    };
  },
  methods: {
    register() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          const params = {
            email: this.registerForm.email,
            username: this.registerForm.username,
            password: this.registerForm.password
          }
          register(params).then(res => {
            console.log(res.data);
            this.$message.success('注册成功');
            this.$router.push('/login')
          });
        } else {
          console.log('表单验证失败');
          return false;
        }
      });
    },
    login() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #1E242E;
  overflow: hidden;
}
.register-box {
  max-width: 400px;
  margin: 200px auto 0;
  background-color: #fff;
  padding: 30px 20px;
}
.register__title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: bold;
}
.register-button {
  width: 100%;
}
.other-button {
  text-align: right;
  margin-top: 10px;
}
</style>