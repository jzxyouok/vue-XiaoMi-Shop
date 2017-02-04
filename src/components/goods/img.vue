<template>
  <div class="img">
    <div class="control">
      <span class="left" @click="goBackEvent">返</span>
      <span class="right">搜</span>
    </div>
    <img :src="img"/>
  </div>
</template>
<script>
  export default {
    props: ['img'],
    data () {
      return {};
    },
    components: {},
    methods: {
      goBackEvent () {
        this.$router.go(-1);
      }
    }
  };
</script>

<style lang="less">
  .img {
    font-family: "Microsoft YaHei";
    width: 100%;
    position: relative;
    height: 0;
    padding-top: 100%;
    img {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .control {
      width: 100%;
      height: 30px;
      position: absolute;
      top: 10px;
      left: 0;
      z-index: 10;
      padding: 0 10px;
      box-sizing: border-box;
      span {
        width: 30px;
        height: 30px;
        display: block;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
        line-height: 30px;
        color: #fff;
        &.left {
          float: left;
        }
        &.right {
          float: right;
        }
      }
    }
  }
</style>
