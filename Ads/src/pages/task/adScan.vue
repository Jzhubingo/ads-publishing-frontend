<template>
  <div class="adScan">
    <el-card class="box-card">
      <el-row class="title">
        <el-col :span="8">任务标题</el-col>
        <el-col :span="8">任务奖励</el-col>
        <el-col :span="8">审核要求</el-col>
      </el-row>
      <el-row class="content">
        <div v-for="item in ads" class="text item">
          <el-col :span="8" class="list">
            <router-link :to="{path:'/taskDetail/',
                               query:{task_id:item._id}}"
                         :title="item.adTitle">
              {{item.adTitle}}
            </router-link>
          </el-col>
          <el-col :span="8" class="list">
            {{item.adAward}}&nbsp;&nbsp;金币
          </el-col>
          <el-col :span="8" class="list">
            {{item.auditing}}
          </el-col>
        </div>
      </el-row>
    </el-card>
  </div>
</template>
<script type="text/ecmascript-6">
  import api from '../../api'

  export default {
    data() {
      return {
        adType: '广告浏览',
        ads: []
      }
    },
    methods: {
      findAdType() {
        api.get('/findAdType?adType=' + this.adType).then((res) => {
//          console.log(res.data.data);
          this.ads = res.data.data
        }).catch((err) => {
          console.log(err);
        })
      }
    },
    mounted() {
      this.findAdType()
    }
  }
</script>

<style lang="less">
  .adScan {
    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
      display: inline-block;
      content: "";
    }
    .clearfix:after {
      clear: both
    }

    .box-card {
      width: 100%;
      .el-card__body {
        padding: 0;
        .title {
          padding: 10px;
          background-color: #325d88;
          color: #fff;
          text-align: left;
        }
        .content {
          text-align: left;
          .list {
            padding: 10px;
          }
        }
      }
    }
  }
</style>
