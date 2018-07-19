import Vue from 'vue'
import Router from 'vue-router'
import novice from './../pages/novice/novice.vue'
import task from './../pages/task/task.vue'
import vote from './../pages/task/vote.vue'
import reg from './../pages/task/reg.vue'
import reprint from './../pages/task/reprint.vue'
import adScan from './../pages/task/adScan.vue'
import questionnaire from './../pages/task/questionnaire.vue'
import others from './../pages/task/others.vue'
import personal from '../components/personal/personal.vue'
import myTask from './../components/personal/myTask.vue'
import myPublish from './../components/personal/myPublish.vue'
import pwdUpdate from './../components/pwdUpdate/pwdUpdate.vue'
import publish from './../components/publish/publish.vue'
import home from './../pages/home/home.vue'
import login from '@/components/login/login'
import register from '@/components/register/register'
import notice from '../pages/notice/notice.vue'
import store from './../store/store'
import Alert from './../components/Alert/Alert'
import personalInfo from './../components/personalInfo/personalInfo.vue'
import taskDetail from '../components/taskDetail/taskDetail.vue'

Vue.use(Router)
Vue.use(Alert)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: '首页',
      component: home
    },
    {
      path: '/novice',
      name: '新手教程',
      component: novice
    },
    {
      path: '/task',
      name: '任务大厅',
      component: task,
      children: [
        {
          path: 'vote',
          name: '线上投票',
          component: vote
        },
        {
          path: 'reg',
          name: '会员注册',
          component: reg
        },
        {
          path: 'reprint',
          name: '发帖转载',
          component: reprint
        },
        {
          path: 'adScan',
          name: '广告浏览',
          component: adScan
        },
        {
          path: 'questionnaire',
          name: '问卷调查',
          component: questionnaire
        },
        {
          path: 'others',
          name: '其它类型',
          component: others
        }
      ]
    },
    {
      path: '/publish',
      name: '发布任务',
      component: publish
    },
    {
      path: '/personal',
      name: '个人中心',
      component: personal,
      children: [
        {
          path: 'myTask',
          name: '我的任务',
          component: myTask
        },
        {
          path: 'myPublish',
          name: '我的发布',
          component: myPublish
        },
        {
          path: 'personalInfo',
          name: '详细资料',
          component: personalInfo
        },
        {
          path: 'pwdUpdate',
          name: '修改密码',
          component: pwdUpdate
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {
      path: '/register',
      name: '注册',
      component: register
    },
    {
      path: '/notice',
      name: '平台公告',
      component: notice
    },
    {
      path: '/taskDetail',
      name: '任务详情',
      component: taskDetail
    }
  ]
});
router.beforeEach((to, from, next) => {
  const nextRoute = ['/publish', '/personal', '/personal/personalInfo']
  // console.log(nextRoute.indexOf(to.path))
  if (nextRoute.indexOf(to.path) >= 0 && !store.state.userId) {
    // Vue.prototype.$alert({message: '请先登录', type: 'danger'})
    Vue.prototype.$message.error('请先登录！')
    router.push({path: '/login'})
  } else {
    next()
  }
})
router.afterEach((to) => {
  window.document.title = `${to.name} - 任务发布网`
})
export default router
