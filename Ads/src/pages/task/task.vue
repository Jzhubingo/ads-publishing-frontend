<template>
  <div class="task container-fluid">
    <nav class="navbar-default navbar-side" role="navigation">
      <div class="sidebar-collapse">
        <ul class="nav" id="main-menu">
          <h3 style="color: #fff;padding-left: 20px;">任务类别</h3>
          <li>
            <router-link to="/task/vote">
              <i class="glyphicon glyphicon glyphicon-thumbs-up"></i> 线上投票
            </router-link>
          </li>
          <li>
            <router-link to="/task/reg">
              <i class="glyphicon glyphicon-heart-empty"></i> 会员注册
            </router-link>
          </li>
          <li>
            <router-link to="/task/reprint">
              <i class="glyphicon glyphicon-hand-right"></i> 发帖转载
            </router-link>
          </li>
          <li>
            <router-link to="/task/adScan">
              <i class="glyphicon glyphicon-eye-open"></i> 广告浏览
            </router-link>
          </li>
          <li>
            <router-link to="/task/questionnaire">
              <i class="glyphicon glyphicon-eye-open"></i> 问卷调查
            </router-link>
          </li>
          <li>
            <router-link to="/task/others">
              <i class="glyphicon glyphicon-asterisk"></i> 其他类型
            </router-link>
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
  .task {
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
              }
            }
          }
        }
      }
    }
  }

  #page-wrapper {
    position: relative;
    margin: 0 0 0 200px;
    padding: 15px 15px;
    #page-inner {
      width: 100%;
      /*margin: 10px 20px 10px 0;*/
      background-color: transparent;
      /*padding: 15px 30px;*/
      min-height: 1200px;
    }
  }

  .nav-second-level li,
  .nav-third-level li {
    border-bottom: none !important;
  }

  .nav-second-level li a {
    padding-left: 37px;
  }

  .nav-third-level li a {
    padding-left: 55px;
  }
</style>
