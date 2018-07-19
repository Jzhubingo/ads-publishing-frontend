<template>
  <div class="home container-fluid">
    <!--轮播图模块-->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="5000">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="./1.jpg" alt="1.jpg" class="carousel-picture">
          <!--<div class="carousel-caption">-->
          <!--<h3>slide label</h3>-->
          <!--<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>-->
          <!--</div>-->
        </div>
        <div class="item">
          <img src="./2.jpg" alt="2.jpg" class="carousel-picture">
          <!--<div class="carousel-caption">-->
          <!--<h3>slide label</h3>-->
          <!--<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>-->
          <!--</div>-->
        </div>
        <div class="item">
          <img src="./3.jpg" alt="3.jpg" class="carousel-picture">
          <!--<div class="carousel-caption">-->
          <!--<h3>slide label</h3>-->
          <!--<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>-->
          <!--</div>-->
        </div>
      </div>
      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!--轮播图模块结束-->
    <div class="row section main-content">
      <!--最新任务模块 -->
      <div class="latest-task col-sm-8 col-md-8 col-lg-9">
        <div class="tips">
          <h3 class=""><i style="color:#f00;">最新</i><i>任务</i></h3>
          <span class="navbar-text navbar-right">
            <router-link to="/task/vote" class="navbar-link">更多>></router-link>
          </span>
        </div>
        <ul class="list list-unstyled">
          <li class="list-content" v-for="item in adList">
            <i class="el-icon-loading" style="color: #f00;"></i>
            <router-link :to="{path:'/taskDetail/',
                               query:{task_id:item._id}}"
                         :title="item.adTitle">
              {{item.adTitle}}
            </router-link>
          </li>
        </ul>
      </div>
      <!--最新任务模块结束 -->
      <!--公告模块-->
      <div class="notice col-sm-4 col-md-4 col-lg-3">
        <div class="tips">
          <h3 class=""><i style="color:#f00;">最新</i><i>公告</i></h3>
          <span class="navbar-text navbar-right">
            <router-link to="/notice" class="navbar-link">更多>></router-link>
          </span>
        </div>
        <ul class="list list-unstyled">
          <li>
            <router-link to="/notice" style="color: #f00;" title="【置顶公告】禁止发布恶意违法违规任务的通知">
              【置顶公告】禁止发布恶意违法违规任务的通知
            </router-link>
          </li>
          <li v-for="item in noticeList">
            <router-link to="/notice" target="_blank" :title="item.noticeTitle">
              {{item.noticeTitle}}{{item.content}}
            </router-link>
          </li>
        </ul>
      </div>
      <!--公告模块结束-->
    </div>
    <!--友情链接-->
    <div class="row fr-link col-md-12">
      <h3>友情链接</h3>
      <ul class="list list-unstyled">
        <li v-for="item in frLinks">
          <a :href="item.linkUrl" target="_blank" class="col-lg-1 col-md-2 col-sm-2 col-xs-3">{{item.linkName}}</a>
        </li>
      </ul>
    </div>
    <!--友情链接结束-->
    <div class="row foot-wrap">
      <div class="row-content col-lg-4 col-sm-4 col-xs-4">
        <h3>用户帮助</h3>
        <ul>
          <li><a href="#">Help</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Gallery</a></li>
        </ul>
      </div>
      <div class="row-content col-lg-4 col-sm-4 col-xs-4">
        <h3>关于我们</h3>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Themes</a></li>
        </ul>
      </div>
      <div class="row-content col-lg-4 col-sm-4 col-xs-4">
        <h3>更多信息</h3>
        <ul>
          <li><a href="#">More</a></li>
          <li><a href="#">Advertise</a></li>
          <li><a href="#">Product Hunt</a></li>
        </ul>
      </div>

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import api from '../../api'

  export default {
    data() {
      return {
        adList: [],
        noticeList: [],
        frLinks: []
      }
    },
    methods: {
      getNotices() {
        api.get('/notice').then((res) => {
          this.noticeList = res.data.data;
        });
      },
      getFrLink() {
        api.get('/frLink').then((res) => {
//          console.log(res.data.data);
          this.frLinks = res.data.data;
        });
      },
      getAds() {
        api.get('/ad').then((res) => {
          this.adList = res.data.data;
        });
      }
    },
    mounted() {
      this.getAds();
      this.getNotices();
      this.getFrLink();
    }
  }
</script>
<style lang="less" scoped>
  .home {
    .carousel-picture {
      width: 100%;
      height: 300px;
    }
    .main-content {
      /*公共部分*/
      .tips {
        h3 {
          display: inline-block;
        }
        span {
          /*display: inline-block;*/
          float: right;
          a {
            position: relative;
            top: 5px;
            right: 15px;
          }
        }

      }
      .latest-task, .notice {
        .list {
          padding: 10px 5px;
          border: 1px solid #e2e2e2;
        }
      }
      /*最新任务*/

      .notice, .latest-task {
        ul {
          width: 100%;
          height: 200px;
          overflow: hidden;
          li {
            /*padding: 5px 0;*/
            line-height: 20px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            a {
              color: #000;
              &:hover {
                text-decoration: none;
                color: #cd0e11;
              }
            }
          }
        }
      }
      .latest-task {
        li.list-content {
          display: inline-block;
          width: 160px;
          padding: 5px 7px;
        }
      }
      .notice {
        li {
          padding: 5px 0;
        }
      }
      /*友情链接*/
    }
    .fr-link {
      /*margin-bottom: 20px;*/
      padding-bottom: 20px;
      border-bottom: 1px solid #e2e2e2;
      li {
        line-height: 25px;
        a {
          color: dimgray;
          &:hover {
            color: #f00;
          }
        }
      }
    }
    .foot-wrap {
      width: 100%;
      /*border-top: 1px solid #e2e2e2;*/
      /*background-color: #f6f6f6;*/
      /*opacity: 0.7;*/
      .row-content {
        text-align: center;
        > h3 {
          color: #4d4d4d;
          font-size: 16px;
          font-weight: bold;
          margin-left: 35px;
        }
        > ul {
          font-size: 15px;
          line-height: 24px;
          > li {
            list-style: none;
            > a {
              /*font-size: 18px;*/
              color: #555555;
              &:hover {
                text-decoration: none;
                color: #c1ba62;
              }
            }
          }
        }
      }
    }
  }
</style>
