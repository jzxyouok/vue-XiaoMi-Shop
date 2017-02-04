<template>
  <div :class="{screen: focus}">
    <div class="top" :class="{'focus': focus}">
      <div class="background">
        <div class="left" v-show="!focus">MI</div>
        <div class="left" v-show="focus" @click="goBackEvent">返回</div>
        <div class="center">
          <input type="text" @focus="handleFocus"/>
        </div>
        <div class="right" v-show="!focus">登录</div>
        <div class="right" v-show="focus">搜索</div>
      </div>
    </div>
    <div class="main" v-show="focus">
      <div class="title">热门搜索</div>
      <img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a425e85fa21ed71c2a8d64fe86f833f9.jpg?width=720&heihgt=200">
      <ul>
        <li>红米4 超长续航</li>
        <li>小米Note 2</li>
        <li>小米5s</li>
        <li>笔记本</li>
        <li>小米电视3s</li>
        <li>智能电饭煲</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        focus: false
      };
    },
    components: {},
    methods: {
      handleFocus () {
        this.focus = true;
        this.$emit('searchEvent', true);
      },
      goBackEvent () {
        this.focus = false;
        this.$emit('searchEvent', false);
      }
    }
  };
</script>

<style lang="less" scoped>
  .screen {
    width: 100%;
    height: 100%;
    background: #fff;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .main {
    width: 100%;
    margin: 40px 0 0 0;
    .title {
      line-height: 40px;
      font-size: 12px;
      color: #333;
      text-indent: 20px;
    }
    img {
      width: 100%;
    }
    ul {
      padding: 0 10px;
      li {
        list-style-type: none;
        font-size: 12px;
        border: 1px solid #bbb;
        padding: 8px 10px;
        margin: 5px;
        display: inline-block;
      }
    }
  }

  .top {
    font-family: "Microsoft YaHei";
    width: 100%;
    height: 40px;
    /*background: #E58335;*/
    font-size: 0;
    position: fixed;
    color: #fff;
    &.focus {
      background: #f5f5f5;
      color: #888;
    }
    .left {
      width: 15%;
      line-height: 40px;
      font-size: 16px;
      text-align: center;
      display: inline-block;
    }
    .center {
      width: 70%;
      font-size: 16px;
      display: inline-block;
      vertical-align: top;
      input {
        width: 100%;
        line-height: 30px;
        height: 30px;
        background: #fff;
        border: none;
        padding: 0;
        margin: 5px 0 0 0;
        outline: none;
        text-indent: 10px;
        &:focus {
          background: #fff;
          border: 1px solid #ccc;
        }
      }
    }
    .right {
      width: 15%;
      font-size: 16px;
      display: inline-block;
      line-height: 40px;
      text-align: center;
      margin: -1px 0 0 0;
      padding: 0;
    }
    .background {
      /*background: #E58335;*/
      width: 100%;
      height: 100%;
      display: block;
    }
  }
</style>
