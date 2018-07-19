<template>
  <div class="myTask">
    <div class="header">
      <h3>我领取的任务
        <i class="badge">{{this.myTask.length}}</i></h3>
    </div>
    <div class="taskList">
      <ul class="list-unstyled">
        <li v-for="item in myTask">
          <div class="taskBox">
            <div class="tips">
              <p>任务状态：
                <template v-if="item.taskState==='已完成'">
                  <i style="color: #0f0;font-weight: bold;font-size: 18px">{{item.taskState}}</i>
                </template>
                <template v-else-if="item.taskState==='待审核'">
                  <i style="color: orange;font-weight: bold;font-size: 18px">{{item.taskState}}</i>
                </template>
                <template v-else>
                  <i style="color: #f00;font-weight: bold;font-size: 18px">{{item.taskState}}</i>
                </template>
              </p>
              <p>审核方式：{{item.taskId.auditing}}</p>
            </div>
            <div class="datails">
              <p>任务类型：{{item.taskId.adType}}</p>
              <p>任务标题：{{item.taskId.adTitle}}</p>
              <p class="requirement" :title="item.taskId.requirement">
                任务要求：{{item.taskId.requirement}}</p>
              <p>任务链接：<a :href="item.taskId.adLink" target="_blank">
                {{item.taskId.adLink}}</a></p>
            </div>
            <div class="button">
              <template v-if="item.taskState==='未完成'">
                <button class="btn btn-block btn-primary"
                        @click="openDialog(item._id,item.taskId,item.userId)">提交任务结果
                </button>
              </template>
              <template v-else-if="item.taskState==='已完成'">
                <button class="btn btn-block btn-primary" disabled>任务已完成</button>
              </template>
              <template v-else>
                <button class="btn btn-block btn-primary" disabled>待审核</button>
              </template>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <el-dialog title="提交任务结果" :visible.sync="dialogFormVisible">
      <el-upload
        class="upload-demo"
        action="http://127.0.0.1:3000/upload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :file-list="fileList2"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitResult">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>
<script type="text/ecmascript-6">
  import api from '../../api'

  export default {
    data() {
      return {
        myTask: [],
        dialogFormVisible: false,
        currentTask: {
          _id: '',
          taskId: '',
          userId: '',
          taskState: '',
          taskResult: ''
        },
        fileList2: [],
        imageUrl: ''
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleSuccess(response, file, fileList) {
        console.log(response, file, fileList);
        this.imageUrl = response.filepath;
        console.log(this.imageUrl);
      },
      openDialog(id, taskId, userId) {
        this.dialogFormVisible = true;
        this.currentTask._id = id;
        this.currentTask.taskId = taskId;
        this.currentTask.userId = userId;
      },
//      通过userId获取已领取的任务详情列表
      getMyTask() {
        api.get('/myTask?userId=' + this.$store.state.userId).then((res) => {
          this.myTask = res.data.data;
        })
      },
//      提交任务结果
      submitResult() {
        this.currentTask.taskState = '待审核';
        this.currentTask.taskResult = this.imageUrl;
        api.put(`/submitResult`, {id: this.currentTask._id, infos: this.currentTask}).then((res) => {
          this.$message.success('提交成功');
          this.dialogFormVisible = false;
          this.getMyTask()
        })
      }
    },
    mounted() {
      this.getMyTask()
    }
  }
</script>
<style lang="less">
  .myTask {
    .header {
      padding: 10px 0 5px;
      background-color: #b5b5b5;
      h3 {
        text-align: center;
        .badge {
          background-color: #9c9c9c;
          padding: 6px 10px 5px 8px;
          font-size: 16px;
        }
      }
    }
    .taskList {
      li {
        display: block;
        padding: 20px;
        .taskBox {
          border: 1px solid #e2e2e2;
          border-radius: 5px;
          .tips {
            padding: 10px 10px 0px;
            border-bottom: 2px solid #cbcbcb;
            background-color: #e2e2e2;
          }
          .datails {
            padding: 10px;
            p {
              a:hover {
                color: #f00;
              }
              &.requirement {
                width: 250px;
              }
            }
          }
          .button {
            width: 250px;
            margin: 10px;
          }
        }
      }
    }
    .upload-demo {
      .el-upload__input {
        display: none;
      }
    }
  }
</style>
