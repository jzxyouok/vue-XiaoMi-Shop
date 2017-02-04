<template>
  <div class="new-box">
    <div class="newHomeGoodsBanner">
      <img :src="newHomeGoodsBannerSrc"/>
    </div>
    <div
      v-for="(good, index) in newHomeGoodsList"
      @click="productEvent"
      :class="{'item1': index % 2 === 0, 'item2': index % 2 !== 0}"
    >
      <div class="top" v-if="index !== 0">
        <img :src="good.imgSrc"/>
      </div>
      <div class="top" v-if="index === 0" style="margin-bottom: 2px;">
        <img src="../../images/mitugongzai.png"/>
      </div>
      <div class="bottom" v-if="index !== 0">
        <span class="title">{{ good.title }}</span>
        <span class="desc">{{ good.desc }}</span>
        <span class="price">￥{{ good.price }}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: ['body'],
    created () {
      this.newHomeGoodsList = this.body.newHomeGoods.newHomeGoodsList;
      this.newHomeGoodsBannerSrc = this.body.newHomeGoods.img;
    },
    data () {
      return {
        newHomeGoodsList: [],
        newHomeGoodsBannerSrc: ''
      };
    },
    methods: {
      productEvent () {
        this.$router.push({path: '/goods'});
      }
    }
  };
</script>

<style lang="less" scoped>
  .item-bottom {
    .bottom {
      width: 100%;
      display: block;
      padding: 5px 10px;
      box-sizing: border-box;
      font-size: 14px;
      .title {
        width: 100%;
        display: block;
        color: #333;
        line-height: 25px;
      }
      .desc {
        width: 100%;
        display: block;
        color: #666;
        font-size: 12px;
      }
      .price {
        width: 100%;
        display: block;
        font-size: 14px;
        color: #ff601e;
        line-height: 20px;
      }
    }
  }
  .img100 {
    img {
      width: 100%;
    }
  }

  .new-box {
    margin-top: 10px;
    overflow: hidden;
    width: 100%;
    background: #fff;
    font-family: "Microsoft Yahei";
    .newHomeGoodsBanner {
      width: 100%;
      font-size: 0;
      .img100;
      border-bottom: 2px solid #fff;
    }
    .item1 {
      width: 50%;
      float: left;
      box-sizing: border-box;
      border-right: 1px solid #fff;
      font-size: 0;
      .top {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .item-bottom;
    }
    .item2 {
      width: 50%;
      float: right;
      box-sizing: border-box;
      border-left: 1px solid #fff;
      font-size: 0;
      .top {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .item-bottom;
    }
  }
</style>
