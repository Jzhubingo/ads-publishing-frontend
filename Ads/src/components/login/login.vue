<template>
  <div class="login container">
    <div class="login-form col-lg-6 col-lg-offset-3 ">
      <h3 style="text-align: center;">用户登录</h3>
      <hr style="border: 1px solid #e2e2e2">
      <form class="form" onsubmit="return false">
        <v-form-group v-model="username" type="text" icon="user" fieldName="username"
                      placeholder="用户名">
        </v-form-group>
        <v-form-group v-model="password" type="password" icon="lock" fieldName="password"
                      placeholder="密码" class="">
        </v-form-group>
        <div class="form-group extra">
          <a class="pwd-forget">忘记密码？</a>
          <router-link to="/register" class="register pull-right">免费注册</router-link>
        </div>
        <div class="form-group">
          <button @click="login" type="submit" class="btn btn-success btn-block">登录</button>
        </div>
      </form>
    </div>
    <!--<div class="backstretch">-->
    <!--</div>-->
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
        password: ''
      }
    },
    methods: {
      login() {
        api.post('/session', {
          username: this.username,
          password: this.password
        }).then((res) => {
          if (res.data.status === 0) {
            this.$store.commit('userId', res.data.data.userId)
            this.$store.commit('token', res.data.data.token)
//            console.log(this.$store.state.userId);
            this.$message.success('登录成功')
//            this.$alert('登录成功！')
//            跳到首页
            this.$router.push(this.$route.query.redirect || '/')
          } else {
            this.$message.error('登录失败！，请确认用户名和密码是正确！')
          }
        }).catch(() => {
          this.$message.error('用户名或密码输入错误！')
        })
      }
    },
    components: {
      VFormGroup,
      bgImage
    }
  }
</script>
<style lang="less" scoped>
  .login {
    margin-top: 0;
    .login-form {
      margin-top: 30px;
      padding: 5px 20px 20px;
      background-color: rgba(0, 0, 0, .35);
      border-radius: 5px;
      h3 {
        color: #fff;
      }
      .extra {
        .pwd-forget {
          &:hover {
            color: #ac3911;
            cursor: pointer;
          }
        }
        .register {
          cursor: pointer;
        }
      }
      button {
        font-size: 18px;
      }
    }
  }


</style>
