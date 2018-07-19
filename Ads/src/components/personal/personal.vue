<template>
  <div class="personal container-fluid">
    <nav class="navbar-default navbar-side" role="navigation">
      <div class="sidebar-collapse">
        <ul class="nav" id="main-menu">
          <li>
            <router-link to="/personal/myTask">
              <i class="
glyphicon glyphicon-fire"></i>我的任务</router-link>
          </li>
          <li>
            <router-link to="/personal/myPublish">
              <i class="glyphicon glyphicon-send"></i>我的发布</router-link>
          </li>
          <li class="second-level">
            <router-link to="/personal/personalInfo">
              <i class="glyphicon glyphicon-edit"></i> 个人中心
              <i class="fa fa-angle-left"></i>
            </router-link>
            <ul class="nav nav-second-level">
              <li>
                <router-link to="/personal/personalInfo">详细资料</router-link>
              </li>
              <li>
                <router-link to="/personal/pwdupdate">修改密码</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <div id="page-wrapper">
      <div id="page-inner">
        <router-view></router-view>
      </div>
      <!-- /. PAGE INNER  -->
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    },
    methods: {},
    components: {}
  }
</script>
<style lang="less" scoped>
  .personal {
    margin: 0;
    padding: 0;
    .navbar-side {
      z-index: 10;
      position: fixed;
      width: 200px;
      height: 100%;
      border: none;
      background: #323232;
      .sidebar-collapse {
        background: none;
        .nav {
          padding: 0;
          background: none;
          li {
            border-bottom: 1px solid rgba(107, 108, 109, 0.19);
            a {
              padding: 12px 10px;
              color: #FFFFFF;
              background: transparent;
              text-shadow: none;
              text-align: left;
              &:hover, &:focus {
                background-color: #373f48;
              }
              i {
                color: #FFFFFF;
                width: 30px;
                margin-right: 10px;
                padding: 8px;
                text-align: center;
                &.fa-angle-left {
                  float: right;
                }
              }
            }
            .nav-second-level {
              display: none;
              li {
                border-bottom: none !important;
                a {
                  padding-left: 37px;
                }
              }
            }
            &:hover {
              a {
                i.fa-angle-left {
                  transform: rotate(-90deg);
                }
              }
              .nav-second-level {
                display: block;
              }
            }
          }
        }
      }
    }
  }

  #page-wrapper {
    position: relative;
    margin: -20px 0 0 200px;
    #page-inner {
      width: 100%;
      background-color: transparent;
      min-height: 1200px;
    }
  }
</style>
