<template>
  <div class="myPublish">
    <div class="header">
      <h3>我发布的任务
        <i class="badge">{{this.personalAds.length}}</i></h3>
    </div>
    <div class="adsList">
      <ul class="list-unstyled">
        <li v-for="item in personalAds">
          <div class="adBox">
            <div class="time">发布时间： {{item.publishTime | formatDate}}</div>
            <div class="datails">
              <p>任务类型：{{item.adType}}</p>
              <p class="requirement" :title="item.requirement">
                任务要求：{{item.requirement}}</p>
              <p>任务链接：<a :href="item.adLink" target="_blank">{{item.adLink}}</a></p>
            </div>
            <div class="toDetail">
              <!--<button class="btn btn-block btn-primary">-->
              <router-link :to="{path:'/taskDetail/',query:{task_id:item._id}}">
                <button class="btn btn-block btn-primary">前往详情页面 >></button>
              </router-link>
              <!--</button>-->
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
  import api from '../../api'

  export default {
    data() {
      return {
        personalAds: []
      }
    },
    methods: {
      getPersonalAds() {
        api.get('/personalAds?userId=' + this.$store.state.userId).then((res) => {
          this.personalAds = res.data.data;
        })
      }
    },
    mounted() {
      this.getPersonalAds();
    }
  }
</script>
<style lang="less">
  .myPublish {
    min-height: 1200px;
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
    .adsList {
      li {
        display: block;
        padding: 20px;
        .adBox {
          border: 1px solid #e2e2e2;
          border-radius: 5px;
          .time {
            padding: 10px;
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
                width: 100%;
              }
            }
          }
          .toDetail {
            width: 250px;
            margin: 10px;
            a {
              color: #fff;
            }
          }
        }
      }

    }
  }

</style>
