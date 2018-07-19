<template>
  <div class="form-group" :class="{'has-feedback': icon}">
    <label v-if="labelName" v-text="labelName" :for="fieldName"></label>
    <span v-if="icon" :class="icon ? 'glyphicon-' + icon : ''" class="glyphicon form-control-icon"></span>
    <input :type="type"
           required
           v-model="value"
           :id="fieldName"
           :placeholder="placeholder"
           :class="{'pl': icon}"
           class="form-control"/>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      type: {
        type: String,
        'default': 'text'
      },
      icon: {
        type: String,
        'default': ''
      },
      labelName: {
        type: String,
        'default': ''
      },
      fieldName: {
        type: String
      },
      placeholder: {
        type: String
      }
    },
    data() {
      return {value: ''}
    },
    watch: {
      value(n) {
        this.$emit('input', n)
      }
    }
  }
</script>
<style lang="less">
  .form-group {
    position: relative;
    .form-control-icon {
      position: absolute;
      top: 0;
      /*left: 0;*/
      z-index: 2;
      display: block;
      width: 38px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      pointer-events: none;
    }
    .form-control {
      &:focus{
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
      }
      &.pl {
        padding-left: 35px;
      }
    }
  }
</style>
