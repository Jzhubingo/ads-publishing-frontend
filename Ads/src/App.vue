<!--<script src="main.js"></script>-->
<template>
  <div id="app">
    <v-header></v-header>
    <div class="content">
      <router-view/>
    </div>
    <v-footer class="footer"></v-footer>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import footer from './components/footer/footer.vue'

  export default {
    name: 'app',
    mounted() {
//      this.$alert('xxx')
    },
    components: {
      'v-header': header,
      'v-footer': footer
    }
  }
</script>

<style lang="less">
  #app {
    margin-top: 67px;
    min-width: 500px;
    position: relative;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    /*background-color: #f4f4f4;*/
    .content {
      flex: 1;
    }
    .footer {
      /*height: 185px;*/
    }
  }
</style>
