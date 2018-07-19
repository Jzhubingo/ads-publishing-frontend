<template>
  <div class="novice container">
    <div class="ordinary">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <div class="page-header">
            <h1>
              使用教程
            </h1>
          </div>
          <h2>
            普通用户
          </h2>
          <p>
            此处普通用户为接收任务的用户。普通用户可在任务大厅中选择各类任务，在任务完成后会获得相应的报酬
          </p>
        </div>
      </div>
      <div class="row clearfix process">
        <div class="col-md-2 column col-box">
          <h2>
            选择任务
          </h2>
          <p>
            用户在任务列表中选择想完成的任务
          </p>
          <p>
            <router-link to="/task" class="nav-link btn">前往任务大厅 »</router-link>
          </p>
        </div>
        <div class="col-md-1  column hidden-sm hidden-xs">
          <span class="glyphicon glyphicon-menu-right icon-right"></span>
        </div>
        <div class="col-md-1 visible-sm visible-xs row">
          <span class="glyphicon glyphicon-menu-down icon-down"></span>
        </div>
        <div class="col-md-2 column col-box">
          <h2>
            完成任务
          </h2>
          <p>
            用户按要求完成已选择的任务
          </p>
          <p>
            <router-link to="/personal/myTask" class="nav-link btn">前往完成任务 »</router-link>
            <!--<a class="btn" href="#">前往完成任务 »</a>-->
          </p>
        </div>
        <div class="col-md-1  column hidden-sm hidden-xs">
          <span class="glyphicon glyphicon-menu-right icon-right"></span>
        </div>
        <div class="col-md-1 visible-sm visible-xs row">
          <span class="glyphicon glyphicon-menu-down icon-down"></span>
        </div>
        <div class="col-md-2 column col-box">
          <h2>
            提交任务
          </h2>
          <p>
            用户提供任务已完成的证明
          </p>
          <p>
            <router-link to="/personal/myTask" class="nav-link btn">查看任务 »</router-link>
          </p>
        </div>
        <div class="col-md-1  column hidden-sm hidden-xs">
          <span class="glyphicon glyphicon-menu-right icon-right"></span>
        </div>
        <div class="col-md-1 visible-sm visible-xs row">
          <span class="glyphicon glyphicon-menu-down icon-down"></span>
        </div>
        <div class="col-md-2 column col-box">
          <h2>
            等待审核
          </h2>
          <p>
            待审核通过后，用户会获得相应报酬
          </p>
          <p>
            <router-link to="/personal/myTask" class="nav-link btn">查看审核结果 »</router-link>
            <!--<a class="btn" href="#">查看审核结果 »</a>-->
          </p>
        </div>
      </div>
    </div>
    <div class="business">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <h2>
            商家用户
          </h2>
          <p>
            商家用户为发布任务的一方。商家在本平台上发布任务需求，由其他用户帮忙完成。任务完成时，商家须向完成任务的一方支付相应的报酬
          </p>
        </div>
      </div>
      <div class="row clearfix process">
        <div class="col-md-2 column col-box">
          <h2>
            发布任务
          </h2>
          <p>
            用户在发布任务功能中选择发布任务的类型
          </p>
          <p>
            <router-link to="/publish" class="nav-link btn">前往发布任务 »</router-link>
            <!--<a class="btn" href="#">前往发布任务 »</a>-->
          </p>
        </div>
        <div class="col-md-1  column hidden-sm hidden-xs">
          <span class="glyphicon glyphicon-menu-right icon-right"></span>
        </div>
        <div class="col-md-1 visible-sm visible-xs row">
          <span class="glyphicon glyphicon-menu-down icon-down"></span>
        </div>
        <div class="col-md-2 column col-box">
          <h2>
            等待审核
          </h2>
          <p>
            商家等待系统审核其发布内容的合法性
          </p>
          <p>
            <router-link to="/personal/myPublish" class="nav-link btn">查看审核结果 »</router-link>
            <!--<a class="btn" href="#">查看审核结果 »</a>-->
          </p>
        </div>
        <div class="col-md-1  column hidden-sm hidden-xs">
          <span class="glyphicon glyphicon-menu-right icon-right"></span>
        </div>
        <div class="col-md-1 visible-sm visible-xs row">
          <span class="glyphicon glyphicon-menu-down icon-down"></span>
        </div>
        <div class="col-md-2 column col-box">
          <h2>
            查看任务
          </h2>
          <p>
            商家查看任务是否有人接受以及完成情况
          </p>
          <p>
            <router-link to="/personal/myPublish" class="nav-link btn">查看任务 »</router-link>
            <!--<a class="btn" href="#">查看任务 »</a>-->
          </p>
        </div>
        <div class="col-md-1  column hidden-sm hidden-xs">
          <span class="glyphicon glyphicon-menu-right icon-right"></span>
        </div>
        <div class="col-md-1 visible-sm visible-xs row">
          <span class="glyphicon glyphicon-menu-down icon-down"></span>
        </div>
        <div class="col-md-2 column col-box">
          <h2>
            任务结算
          </h2>
          <p>
            商家按照任务的完成度给任务接受方结算报酬
          </p>
          <p>
            <router-link to="/personal/myPublish" class="nav-link btn">前往任务结算 »</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">


</script>
<style lang="less">
  .ordinary, .business {
    padding-bottom: 10px;
    border-bottom: 1px solid #dddddd;
    .process {
      margin-left: 10px;
      .col-box {
        height: 170px;
        border: 1px solid #dddddd;
        border-radius: 5px;
        h2, p {
          text-align: center;
        }
        .nav-link:hover {
          color: #f00;
        }
      }
    }
    .icon-right {
      display: block;
      position: relative;
      top: 70px;
      left: 15px;
      font-size: 25px;
    }
    .icon-down {
      display: block;
      position: relative;
      /*top: 70px;*/
      left: 50%;
      font-size: 25px;
    }
  }


</style>
