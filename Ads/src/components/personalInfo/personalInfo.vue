<template>
  <div class="personalInfo">
    <div class="header"><h3>我的资料</h3></div>
    <el-col :span="12" :offset="6">
      <el-form ref="form" :model="form" label-width="100px" class="myForm">
        <el-form-item label="用户名称：">
          <span>{{this.form.username}}</span>
        </el-form-item>
        <el-form-item label="用户角色：">
          <span>{{this.form.role | formatRole}}</span>
        </el-form-item>
        <el-form-item label="账户余额：">
          <span>{{this.form.accountBalance}}&nbsp;
            <i class="iconfont icon-gold" style="font-size: 20px;color: #ffa503;"></i>
          </span>
        </el-form-item>
        <el-form-item label="注册时间：">
          <span>{{this.form.registerTime | formatDate}}</span>
        </el-form-item>
        <el-form-item label="您的性别：">
          <el-radio-group v-model="form.gender">
            <el-radio class="radio" :label="1">男</el-radio>
            <el-radio class="radio" :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">修改</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>
<script type="text/ecmascript-6">
  import api from '../../api'

  export default {
    data() {
      return {
        user: '',
        form: {
          _id: this.$store.state.userId,
          username: '',
          password: '',
          role: 0,
          gender: 1,
          accountBalance: '',
          registerTime: '',
          imageUrl: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$confirm('确认修改个人信息？', '提示').then(() => {
          api.put(`/user`, {id: this.user._id, infos: this.form}).then((res) => {
            this.$message.success('修改成功');
            this.getPersonalInfo();
          })
        });
      },
//      获取个人信息
      getPersonalInfo() {
        api.get('/user?id=' + this.$store.state.userId).then((res) => {
//          console.log(res.data.data)
          this.user = res.data.data;
          this.form.username = this.user.username;
          this.form.password = this.user.password;
          this.form.role = this.user.role;
          this.form.gender = this.user.gender;
          this.form.accountBalance = this.user.accountBalance;
          this.form.registerTime = this.user.registerTime;
          this.form.imageUrl = this.user.imageUrl
        })
      }
    },
    mounted() {
      this.getPersonalInfo()
    }
  }
</script>
<style lang="less" scoped>
  .personalInfo {
    margin-top: 20px;
    .header {
      border-bottom: 1px solid lightgray;
      background-color: #e3e3e3;
      h3 {
        padding: 15px 60px;
      }
    }
    .myForm {
      padding: 30px;
      .radio {
        display: inline;
      }
    }
  }
</style>
