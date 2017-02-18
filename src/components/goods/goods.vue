<template>
  <div class="wripper">
    <mi-img :img="img"></mi-img>
    <mi-buyControl :goodsAttr="goodsAttr" ref="control"></mi-buyControl>
    <mi-detail :detailData="detailData"></mi-detail>
    <div class="addCart">
      <div class="home"@click="toHomeEvent"></div>
      <div class="add"><span @click="butEvent">立即购买</span></div>
      <div class="cart"@click="addCartEvent"></div>
    </div>
    <mi-model ref="alert" type="alert" @confirmEvent="alertBtnEvent">
      <div slot="alert" class="alert">
        <h5>您选择的产品</h5>
        <h6>{{ popInfo.title }}</h6>
        <p>{{ popInfo.ram }}　　{{ popInfo.color }}</p>
      </div>
    </mi-model>
  </div>
</template>
<script>
  import img from './img';
  import buyControl from './buyControl';
  import detail from './detail';
  import data from '../../../data';
  import model from '../model';
  export default {
    components: {
      'mi-img': img,
      'mi-buyControl': buyControl,
      'mi-detail': detail,
      'mi-model': model
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
        searchState: false,
        popInfo: {}
      };
    },
    methods: {
      toHomeEvent () {
        this.$router.replace({path: '/index'});
      },
      butEvent () {
        var checkInfo = this.$refs.control.submitBuyInfo();
        var info = {};
        info.title = data.detail.goodsAttr.title;
        info.ram = checkInfo.ram.text;
        info.color = checkInfo.color.text;
        this.popInfo = info;
        this.$refs.alert.modelOpen();
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
      },
      alertBtnEvent () {}
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
  .alert {
    h5 {
      margin: 5px;
      text-align: center;
      font-weight: normal;
      color: #333;
      font-size: 16px;
    }
    h6 {
      margin: 10px;
      color: #ff8a27;
      font-size: 14px;
      font-weight: normal;
    }
    p {
      line-height: 25px;
      font-size: 14px;
      margin: 5px;
      color: #666;
    }
  }
</style>
