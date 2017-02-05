<template>
  <div class="wripper">
    <mi-img :img="img"></mi-img>
    <mi-buyControl :goodsAttr="goodsAttr"></mi-buyControl>
    <mi-detail :detailData="detailData"></mi-detail>
    <div class="addCart">
      <div class="home"@click="toHomeEvent">首页</div>
      <div class="add"><span @click="butEvent">立即购买</span></div>
      <div class="cart"@click="addCartEvent">购物车</div>
    </div>
  </div>
</template>
<script>
  import img from './img';
  import buyControl from './buyControl';
  import detail from './detail';
  import data from '../../../data';
  export default {
    components: {
      'mi-img': img,
      'mi-buyControl': buyControl,
      'mi-detail': detail
    },
    created () {
      this.img = data.detail.img;
      this.detailData = data.detail;
      this.goodsAttr = data.detail.goodsAttr;
    },
    data () {
      return {
        img: '',
        detailData: [],
        goodsAttr: {}
      };
    },
    methods: {
      toHomeEvent () {
        this.$router.replace({path: '/index'});
      },
      butEvent () {
        console.log('立即购买');
      },
      addCartEvent () {
        console.log('添加到购物车成功');
      }
    }
  };
</script>

<style lang="less">
  .wripper {
    font-family: "Microsoft YaHei";
    .addCart {
      width: 100%;
      height: 50px;
      background: #fff;
      position: fixed;
      bottom: 0;
      left: 0;
      font-size: 0;
      border-top: 1px solid #efefef;
      div {
        text-align: center;
        line-height: 50px;
        display: inline-block;
        height: 100%;
        font-size: 16px;
        &.home, &.cart {
          width: 15%;
          color: #333;
        }
        &.add {
          width: 70%;
          color: #fff;
          span {
            text-align: center;
            line-height: 40px;
            background: #FF5722;
            width: 94%;
            height: 40px;
            display: block;
            margin: 5px auto 0 auto;
          }
        }
      }
    }
  }
</style>
