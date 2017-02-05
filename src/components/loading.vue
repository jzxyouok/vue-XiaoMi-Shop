<template>
  <div>
    <div class="base load-once" :class="{remove: !loadState}" v-show="loadStatus"></div><!--初始化load，只有一次-->

    <transition name="fade">
      <div class="base load" v-if="load"></div><!--加载等待-->
    </transition>
  </div>
</template>
<script>
  export default {
    props: ['load'],
    data () {
      return {
        loadState: true,
        loadStatus: true
      };
    },
    mounted () {
      var me = this;
      setTimeout(function () {
        me.loadState = false;
        setTimeout(function () {
          me.loadStatus = false;
        }, 500);
      }, 1500);
    }
  };
</script>

<style lang="less">
  .base {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    display: block;
  }
  .load-once {
    background: #F87300 url(../images/mi_load.png) no-repeat center center;
    background-size: 80px;
    opacity: 1;
    transition: all 0.5s;
    &.remove {
      opacity: 0;
    }
  }
  .load {
    background: url(../images/mi_load.png) no-repeat center center;
    background-size: 80px;
    opacity: 1;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
