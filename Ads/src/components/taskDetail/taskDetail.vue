<template>
  <div class="taskdetail">
    <div class="head-title"><h3>任务详情介绍</h3></div>
    <div class="content-panel">
      <ul class="list list-unstyled">
        <li class="list-item">
          <div><span class="list-title">任务类型：</span>
            <span>{{this.taskDetail.adType}}</span>
          </div>
        </li>
        <li class="list-item">
          <div><span class="list-title">任务标题：</span>
            <span>{{this.taskDetail.adTitle}}</span>
          </div>
        </li>
        <li class="list-item">
          <div><span class="list-title">任务链接：</span>
            <span><a :href="taskDetail.adLink" target="_blank">
            {{this.taskDetail.adLink}}</a></span>
          </div>
        </li>
        <li class="list-item">
          <div><span class="list-title">任务份数：</span>
            <span>{{this.taskDetail.adAmount}}&nbsp;&nbsp;份</span>
          </div>
        </li>
        <li class="list-item">
          <div><span class="list-title">任务奖励：</span>
            <span>{{this.taskDetail.adAward}}&nbsp;&nbsp;金币</span>
          </div>
        </li>
        <!--<li class="list-item">-->
        <!--<div><span class="list-title">任务状态：</span>-->
        <!--<span>{{this.taskDetail.adState | formatAdState}}</span>-->
        <!--</div>-->
        <!--</li>-->
        <li class="list-item">
          <div><span class="list-title">任务要求：</span>
            <span>{{this.taskDetail.requirement}}</span>
          </div>
        </li>
        <li class="list-item">
          <div><span class="list-title">审核要求：</span>
            <span>{{this.taskDetail.auditing}}</span>
          </div>
        </li>
        <li class="list-item">
          <div><span class="list-title">发布时间：</span>
            <span>{{this.taskDetail.publishTime | formatDate}}</span>
          </div>
        </li>
        <li class="list-item">
          <div><span class="list-title">发布者ID：</span>
            <span>{{this.taskDetail.userId}}</span>
          </div>
        </li>
      </ul>
      <div class="button">
        <button @click="taskTaken" class="btn btn-block btn-primary">点击领取任务</button>
      </div>
    </div>
    <div class="taskResult" v-if="taskResult.length>0&isMytask">
      <el-card class="box-card">
        <div v-for="i in taskResult.length" :key="i"
             class="text item itemList" @click="openDialog">
          <h4>{{'结果' + i}}</h4>
        </div>
        <div slot="header" class="clearfix" style="padding: 0;">
          <h3>用户提交结果列表</h3>
        </div>
        <div v-for="item in taskResult" class="text item">
          <!--弹出框-->
          <el-dialog title="用户提交结果" :visible.sync="dialogFormVisible">
            <img :src="item.taskResult[0]" alt="图片" style="width: 500px;height: 300px;">
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取消</el-button>
              <el-button type="primary"
                         :disabled="item.taskState === '已完成'"
                         @click="confirmResult(item._id)">
                通过审核
              </el-button>
            </div>
          </el-dialog>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import api from '../../api'

  export default {
    data() {
      return {
//        任务接受者
        user: {
          _id: '',
          accountBalance: 1
        },
        dialogFormVisible: false,
//        用户提交过来的任务结果
        taskResult: [],
        taskId: '',
        adAmount: '',
        taskDetail: {
          _id: '',
          adType: '',
          adTitle: '',
          adLink: '',
          adAmount: 0,
          adAward: 0,
          adFee: 0,
          requirement: '',
          userId: '',
          adState: 1,
          auditing: '',
          publishTime: ''
        },
//        更新任务完成状态
        newResult: {
          _id: '',
          taskId: '',
          userId: '',
          taskState: '',
          taskResult: ''
        }
      }
    },
    methods: {
      openDialog() {
        this.dialogFormVisible = true;
      },
//      通过任务id获取任务完成结果
      getTaskResult() {
        api.get('/getTaskResult?id=' + this.taskId).then((res) => {
          console.log(res.data.data);
          this.taskResult = res.data.data
        })
      },
//       获取传过来的参数（任务的id）
      getParams() {
        let taskId = this.$route.query.task_id;
        this.taskId = taskId
      },
//       通过任务id获取任务详情
      getDetail() {
        api.get('/findById?id=' + this.taskId).then((res) => {
          this.taskDetail = res.data.data
        })
      },
//       领取任务
      taskTaken() {
        api.post('/taskTaken', {userId: this.$store.state.userId, taskId: this.taskId}).then((res) => {
          this.$message.success('领取成功')
//          this.taskDetail.adAmount = this.taskDetail.adAmount - 1
          this.$router.push('/personal/myTask')
//          console.log(res.data.data)
        }).catch(() => {
          this.$message.error('您已领取过该任务！')
        })
      },
//       提交审核结果
      confirmResult(id) {
        console.log(id);
        api.put('/submitAuditing?id=' + id).then((res) => {
          this.$message.success('提交成功');
          this.dialogFormVisible = false;
//          this.updateAccountBalance()
        })
      }
    },
    computed: {
      isMytask() {
        return this.taskDetail.userId === this.$store.state.userId;
      }
    },
    mounted() {
      this.getParams();
      this.getDetail();
      this.getTaskResult();
    }
  }
</script>
<style lang="less">
  .taskdetail {
    width: 100%;
    height: 100%;
    margin-top: -20px;
    .head-title {
      background-color: #e2e2e2;
      h3 {
        height: 60px;
        line-height: 60px;
        text-align: center;
      }
    }
    .content-panel {
      width: 50%;
      margin: 0 auto;
      .list {
        .list-item {
          display: block;
          padding: 10px 80px;
          .list-title {
            font-weight: bold;
          }
        }
      }
      .button {
        .btn-block {
          width: 500px;
          margin: 0 auto;
          font-size: 15px;
        }
      }
    }
    .taskResult {
      margin-top: 30px;
      border-top: 2px solid #e2e2e2;
      .box-card {
        width: 100%;
        text-align: center;
        .el-card__header {
          padding: 0;
        }
        .el-card__body {
          padding: 0px;
        }
        .text {
          font-size: 14px;
        }

        .item {
          padding: 5px;
        }

        .clearfix:before,
        .clearfix:after {
          display: table;
          content: "";
        }
        .clearfix:after {
          clear: both
        }
        .itemList {
          cursor: pointer;
          &:hover {
            background-color: #325d88;
            color: #fff;
          }
        }
      }
    }
  }
</style>
