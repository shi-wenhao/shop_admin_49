  <template>
    <el-container class="index">
      <el-header>
        <div class="logo">
          <img src="../assets/logo.ec55f206.png" alt="">
        </div>
        <div class="title">
          <h1>Eコマースのバックグラウンド管理</h1>
        </div>
        <div class="logout">
          ようこそ~
          <a @click="logout" href="javascript:;">ログアウト</a>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            unique-opened
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>ユーザー管理</span>
              </template>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                <span slot="title">ユーザーリスト</span>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>権利管理</span>
              </template>
              <el-menu-item index="2-1">
                <i class="el-icon-menu"></i>
                <span slot="title">役割リスト</span>
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-menu"></i>
                <span slot="title">許可リスト</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$confirm('亲，你确定要退出系统吗？', '温馨提示', {
        // confirmButtonText: '确定',
        // cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('token')
        this.$router.push('/login')
        this.$message.success('退出成功')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
  .el-header {
    background-color: #d8d8d8;
    display: flex;
    .logo {
      width: 180px;
      img {
        height: 40px;
        margin:10px;
      }
    }
    .title {
      flex:1;
      color: #545c64;
      line-height: 60px;
      text-align: center;
      h1 {
        height: 60px;
      }
    }
    .logout {
      width: 180px;
      text-align: right;
      line-height: 60px;
      a {
        color: orange;
      }
    }
  }
  .el-aside{
    background-color: #545c64;
    .el-menu {
      border-right: none;
    }
  }
  .el-main {
    background: #ecf0f1;
  }
}
</style>
