<template>
  <div class="img">
    <div class="control">
      <div class="left hook" @click="goBackEvent"></div>
      <div class="right hook" @click="goodSearchEvent"></div>
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
      },
      goodSearchEvent () {
        this.$router.push({path: '/index', query: { sign: 1 }});
      }
    }
  };
</script>

<style lang="less" scoped>
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
      position: fixed;
      top: 10px;
      left: 0;
      z-index: 10;
      padding: 0 10px;
      box-sizing: border-box;
      div.hook {
        width: 30px;
        height: 30px;
        display: block;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        color: #fff;
        &.left {
          float: left;
          background: rgba(0, 0, 0, 0.5) url("../../images/svg/back1.svg") no-repeat center center;
          background-size: 15px;
        }
        &.right {
          float: right;
          background: rgba(0, 0, 0, 0.5) url("../../images/svg/search1.svg") no-repeat center center;
          background-size: 15px;
        }
      }
    }
  }
</style>
