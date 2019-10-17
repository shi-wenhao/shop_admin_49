<template>
  <div class="login">
<!-- 表单组件 -->
    <el-form ref="form" :model="form" label-width="80px">
      <img src="../assets/avatar.jpg" alt="">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="loginBtn" type="primary">登录</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss">
  .login {
    width: 100%;
    height: 100%;
    background: #2d434c;
    overflow: hidden;
    .el-form {
      width: 400px;
      background-color: #fff;
      padding: 20px;
      border-radius: 20px;
      padding-top: 75px;
      margin: 200px auto;
      position: relative;
    }
    img {
      border-radius: 50%;
      border: 5px solid #fff;
      position: absolute;
      left: 50%;
      top: -70px;
      transform: translateX(-50%);
    }
    .loginBtn {
      margin-right: 70px;
    }
  }
</style>
