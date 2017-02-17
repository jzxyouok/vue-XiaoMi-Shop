<template>
  <div class="wripper">
    <mi-img :img="img"></mi-img>
    <mi-buyControl :goodsAttr="goodsAttr"></mi-buyControl>
    <mi-detail :detailData="detailData"></mi-detail>
    <div class="addCart">
      <div class="home"@click="toHomeEvent"></div>
      <div class="add"><span @click="butEvent">立即购买</span></div>
      <div class="cart"@click="addCartEvent"></div>
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
        goodsAttr: {},
        searchState: false
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
      },
      searchHandle (Boolean) {
        if (Boolean) {
          this.searchState = true;
        } else {
          this.searchState = false;
        }
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
        font-size: 0;
        overflow: hidden;
        height: 50px;
        &.home {
          width: 15%;
          color: #333;
          background: url("../../images/svg/home.svg") no-repeat center center;
          background-size: 25px;
        }
        &.cart {
          width: 15%;
          color: #333;
          background: url("../../images/svg/cart.svg") no-repeat center center;
          background-size: 25px;
        }
        &.add {
          width: 70%;
          color: #fff;
          height: 50px;
          span {
            text-align: center;
            line-height: 40px;
            background: #FF5722;
            width: 94%;
            height: 40px;
            display: block;
            margin: 5px auto 0 auto;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>
