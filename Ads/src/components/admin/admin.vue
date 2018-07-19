<template>
  <div class="admin-content">
    <el-container style="height:100%;">
      <el-header>
        <el-row>
          <el-col :span="4">
            <span class="sysName" style="width: 200px;">
              <h3>后台管理系统</h3>
            </span>
          </el-col>
          <el-col :span="4" style="float: right;display: inline;">
              <span class="userinfo">
              <ul class="list-unstyled list-inline">
                <li>
                  <router-link to="/admin/personalInfo">
                    <!--<img src="/src/assets/bg.jpg" alt="avatar" class="img-circle">-->
                    <a href="" style="color: #fff;">个人中心</a>
                  </router-link>
                </li>
                <li>
                  <a @click="logout" style="cursor: pointer;color: #fff;">
                    <i class="fa fa-power-off fa-fw"></i>退出</a>
                </li>
              </ul>
            </span>
          </el-col>

        </el-row>
      </el-header>

      <el-container>
        <el-aside width="202px" style="background-color: #323232">
          <el-menu>
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-menu"></i>
                <span>用户信息</span>
              </template>
              <el-menu-item index="1-1">
                <router-link to="/admin/userManage">用户管理</router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-goods"></i>
                <span>广告信息</span>
              </template>
              <el-menu-item index="2-1">
                <router-link to="/admin/publish">发布广告</router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link to="/admin/adsmanage">广告管理</router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-bell"></i>
                <span>系统消息</span>
              </template>
              <el-menu-item index="3-1">
                <router-link to="/admin/noticePublish">发布公告</router-link>
              </el-menu-item>
              <el-menu-item index="3-2">
                <router-link to="/admin/userMessage">用户消息</router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-edit-outline"></i>
                <span>个人信息</span>
              </template>
              <el-menu-item index="4-1">
                <router-link to="/admin/personalInfo">详细资料</router-link>
              </el-menu-item>
              <el-menu-item index="4-2">
                <router-link to="/admin/pwdUpdate">修改密码</router-link>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <!--<h1 style="text-align: center;">欢迎来到系统后台管理页面</h1>-->
          <!--<hr style="border: 2px solid #e2e2e2;">-->
          <!--<img src="../../../src/assets/bg.jpg" alt="">-->
          <transition name="fade" mode="out-in">
            <router-view/>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  //    import 'bootstrap/dist/css/bootstrap.min.css'
  import '../../assets/css/font-awesome.css';
  import api from './../../api'

  export default {
//    name: "admin-header",
    data() {
      return {
        activeIndex: '1',
        username: '',
        pwdUpdate: false

      }
    },
    methods: {
      logout() {
        window.localStorage.removeItem('vuex')
        this.$store.dispatch('logout')
        this.$router.push('/login')
      }
    },
    mounted() {
      api.get('/user?id=' + this.$store.state.userId).then((res) => {
        if (res.data.data.username) {
          this.username = res.data.data.username;
        }
      }).catch(function (err) {
        console.log(err);
      })
    },
    components: {
    }
  }
</script>
<style lang="less" scoped>
  .admin-content {
    z-index: 10000;
    position: fixed;
    top: 2px;
    left: 0;
    width: 100%;
    height: 100%;
    .el-container {
      padding: 0;
      margin: 0;
      .el-header {
        height: 70px;
        line-height: 70px;
        padding: 0px 0;
        background-color: #323232;
        .sysName {
          background-color: rgb(240, 181, 62);
          h3 {
            color: #fff;
          }
        }
      }
      .el-aside {
        .el-menu {
          .el-submenu {
            border-bottom: 1px solid rgba(107, 108, 109, 0.19);
            background-color: #323232;
            .el-submenu__title {
              span {
                color: #fff;
              }
            }
            .el-menu-item {
              background-color: rgb(84, 92, 100);
              a {
                color: #fff;
                &.is-active {
                  color: #409EEF;
                }
              }

            }
          }
        }
      }
    }
  }

</style>
