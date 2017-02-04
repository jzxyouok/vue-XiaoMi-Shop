<template>
  <div class="menu-box">
    <div class="menu">
      <div class="left">
        <img :src="menu.img1"/>
      </div>
      <div class="right">
        <img :src="menu.img2"/>
        <img :src="menu.img3"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: ['menu'],
    data () {
      return {};
    }
  };
</script>

<style lang="less" scoped>

  .img100 {
    img {
      width: 100%;
    }
  }

  .menu-box {
    width: 100%;
    font-size: 0;
    .menu {
      overflow: hidden;
      .left {
        width: 50%;
        float: left;
        .img100;
      }
      .right {
        width: 50%;
        float: right;
        .img100;
      }
    }
  }
</style>
