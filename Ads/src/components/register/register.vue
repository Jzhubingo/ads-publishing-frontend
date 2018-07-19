<template>
  <div class="register container">
    <div class="register-form col-md-6 col-lg-offset-3">
      <h3 style="text-align: center;">用户注册</h3>
      <hr style="border: 1px solid #e2e2e2">
      <form class="form" onsubmit="return false">
        <v-form-group v-model="username" type="text" icon="user" fieldName="username"
                      placeholder="用户账号"></v-form-group>
        <v-form-group v-model="password" type="password" icon="lock" fieldName="password"
                      placeholder="登录密码"></v-form-group>
        <v-form-group v-model="password2" type="password" icon="lock" fieldName="pwdConfirm"
                      placeholder="确认密码"></v-form-group>
        <div class="form-group extra">
          <router-link to="/login" class="quickLogin pull-right">已有账号？快速登录</router-link>
        </div>
        <div class="form-group">
          <button @click="submitRegister" type="submit" class="btn btn-success btn-block">立即注册</button>
        </div>
      </form>
    </div>
    <bgImage></bgImage>
  </div>

</template>
<script type="text/ecmascript-6">
  import VFormGroup from './../form-component/FormGroup.vue'
  import bgImage from './../../pages/bgImage/bgImage.vue'
  import api from '../../api'

  export default {
    data() {
      return {
        username: '',
        password: '',
        password2: ''
      }
    },
    methods: {
      submitRegister() {
        if (this.username) {
          if (this.password !== this.password2) {
            return this.$message.error('两次密码输入不一致！')
          } else {
            let {username, password} = this;
            api.post('/user', {
              username,
              password
            }).then((res) => {
              res = res.data;
              if (res.status === 0) {
                this.$message.success('注册成功！');
                this.$router.push('/login')
              } else {
                this.$message.error('注册失败，' + res.message)
              }
            }).catch((error) => {
              this.$message.error(error)
            })
          }
        } else {
          return this.$message.error('用户名不能为空！')
        }
      }
    },
    components: {
      VFormGroup,
      bgImage
    }
  }
</script>
<style lang="less" scoped>
  .register {
    margin-top: 30px;
    .register-form {
      padding: 5px 20px 20px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, .35);
      h3 {
        color: #ffffff;
      }
      .extra {
        padding: 10px 0;
        .quickLogin {
          position: relative;
          top: -10px;
          cursor: pointer;
        }
      }
      button {
        font-size: 18px;
      }
    }
  }

</style>
