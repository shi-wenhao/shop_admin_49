<template>
  <div class="login">
<!-- 表单组件 -->
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <img src="../assets/avatar.jpg" alt="">
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login" class="loginBtn" type="primary">登录</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: ['blur', 'change'] },
          { min: 3, max: 5, message: '长度在3-5个字符', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] },
          { min: 3, max: 12, message: '密码长度在3-12个字符', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    reset () {
      this.$refs.form.resetFields()
    },
    login () {
      this.$refs.form.validate(isValid => {
        if (!isValid) return
        // axios({
        //   url: 'http://localhost:8888/api/private/v1/login',
        //   method: 'post',
        //   data: this.form
        // }).then()
        axios.post('http://localhost:8888/api/private/v1/login', this.form).then(res => {
          const { meta, data } = res.data
          if (meta.status === 200) {
            // console.log(meta.msg)
            localStorage.setItem('token', data.token)
            this.$message({
              type: 'success',
              message: meta.msg,
              duration: 1000
            })
            this.$router.push('/Index')
          } else {
            // console.log(meta.msg)
            this.$message({
              type: 'error',
              message: meta.msg,
              duration: 1000
            })
          }
        })
      })
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
