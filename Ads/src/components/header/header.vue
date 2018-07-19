<template xmlns="">
  <div class="header container">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/home" class="navbar-brand nav-link">网站首页</router-link>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/novice" class="nav-link">新手教程</router-link>
          </li>
          <li>
            <router-link to="/task/vote" class="nav-link">任务大厅</router-link>
          </li>
          <li>
            <router-link to="/publish" class="nav-link">发布任务</router-link>
          </li>
          <li>
            <router-link to="/personal/personalInfo" class="nav-link">个人中心</router-link>
          </li>
          <!--<li class="dropdown">-->
          <!--<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"-->
          <!--aria-expanded="false">-->
          <!--<i class="glyphicon glyphicon-search"></i>-->
          <!--</a>-->
          <!--<ul class="dropdown-menu" style="height: 45px;padding: 0px;margin: 0;">-->
          <!--<li>-->
          <!--<input type="text" class="form-control" placeholder="任务搜索" @keyup.enter="alert('hehe')">-->
          <!--</li>-->
          <!--</ul>-->
          <!--</li>-->
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <!--用户名显示区域-->
          <li @mouseover="mouseover" @mouseout="mouseout" class="dropdown" :class="{open}" v-if="$store.state.userId">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="userInfo" aria-expanded="false"
               style="color: #98978b; text-transform: none;font-size: 18px">
              <i class="glyphicon glyphicon-user" style="padding-right: 10px"></i>{{userName}}
              <span class="caret"></span></a>
            <ul class="dropdown-menu dropdown-menu-left" arial-labelledby="userInfo">
              <li>
                <router-link to="/personal">
                  <i class="glyphicon glyphicon-user" style="padding-right: 10px"></i>
                  个人中心
                </router-link>
              </li>
              <li class="divider"></li>
              <li>
                <a @click="logout">
                  <i class="glyphicon glyphicon-log-out" style="padding-right: 10px"></i>
                  注销登录</a>
              </li>
            </ul>
          </li>
          <!--登录注册显示区域-->
          <template v-else>
            <li>
              <router-link to="/login">登录</router-link>
            </li>
            <li>
              <router-link to="/register">注册</router-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </div>

</template>
<script type="text/ecmascript-6">
  import VLogin from './../login/login.vue'
  import VRegister from './../register/register.vue'
  import api from './../../api'

  export default {

    data() {
      return {
        open: false,
        userName: '',
        showUsername: false,
        showLogOrReg: true
      }
    },
    mounted() {
      api.get('/user?id=' + this.$store.state.userId).then((res) => {
        if (res.data.data.username) {
          this.showLogOrReg = false;
          this.showUsername = true;
          this.userName = res.data.data.username;
        }
      }).catch(function (err) {
        console.log(err);
      })
    },
    computed: {
      userId() {
        return this.$store.state.userId;
      }
    },
    watch: {
      userId() {
        this.showUsername = this.userId;
        this.showLogOrReg = !this.userId;
      }
    },
    methods: {
      alert() {
        alert(arguments[0])
      },
      mouseover() {
        this.open = true
      },
      mouseout() {
        this.open = false
      },
//      退出登录
      logout() {
        this.$confirm('确认退出？', '提示').then(() => {
          window.localStorage.removeItem('vuex');
          this.$store.dispatch('logout');
          this.$router.push('/login');
        })
      }
    },
    components: {
      VLogin,
      VRegister
    }
  }
</script>
<style lang="less" scoped>
  .header {
    padding: 0px;
    margin: 0;
    .nav {
      text-transform: none !important;
    }
    .navbar {
      padding-left: 70px;
      margin-bottom: 0;
      border-radius: 0;
      border: none;
      .navbar-header {
        .navbar-brand {
          height: 67px;
        }
      }
      .nav-link {
        font-size: 16px;
        font-weight: bold;
        &:hover, &:focus {
          border-bottom: 5px solid #fff;
        }
      }
      .navbar-nav {
        .dropdown {
          i {
            font-size: 16px;
          }
          .dropdown-menu {
            /*height: 45px;*/
            .form-control {
              border-radius: 0px;
            }
          }
        }
      }
      .navbar-right {
        margin-right: 10px;
        a {
          font-size: 16px;
          cursor: pointer;
        }
        li.dropdown {
          /*margin-right: 30px;*/
          .dropdown-menu a {
            width: 100%;
          }
        }
      }
    }
  }

</style>
