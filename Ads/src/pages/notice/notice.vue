<template>
  <div class="notice container">
    <div class="panel-title">
      <h3 class="">历史公告</h3>
      <!--<hr style="border: 1px solid #e2e2e2;">-->
    </div>
    <ul class="list list-unstyled">
      <li>
        <p class="notice-title" style="color: #f00;">【置顶公告】禁止发布恶意违法违规任务的通知</p>
        <p class="notice-content">
          <span style="padding-left: 30px;">平台声明</span>：本平台意在为大家提供一个良好的任务发布平台，一个良好的，有秩序的网络环境需要靠大家一起来创造和维护。因此，本平台禁止任何用户发布任何恶意的违法违规的任务，一但发现存在违法行为，直接封号处理。谢谢大家的理解和合作。
        </p>
      </li>
      <li v-for="item in noticeList">
        <p class="notice-title">{{item.noticeTitle}}
          <span> | </span>
          <span class="publishTime">发布于 {{item.publishTime | formatDate}}</span>
        </p>
        <p class="notice-content"><span style="padding-left: 30px;">{{item.content}}</span></p>
      </li>
    </ul>
  </div>

</template>
<script type="text/ecmascript-6">
  import api from '../../api'

  export default {
    data() {
      return {
        noticeList: []
      }
    },
    mounted() {
      api.get('/notice').then((res) => {
        this.noticeList = res.data.data;
      })
    }
  }
</script>
<style lang="less" scoped>
  .notice {
    ul {
      li {
        display: block;
        height: 150px;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        margin-bottom: 15px;
        .notice-title {
          padding: 8px;
          border-bottom: 2px solid #e2e2e2;
          font-weight: bold;
          .publishTime {
            color: #7c7c7c;
            font-style: italic;
            font-weight: normal;
            font-size: 12px;
          }
        }
        .notice-content {
          padding-left: 10px;
        }
      }
    }
  }
</style>
