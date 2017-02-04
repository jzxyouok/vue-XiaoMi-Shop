<template>
  <div class="star-box">
    <div class="starBanner">
      <img :src="startGoodsBannerSrc"/>
    </div>
    <div
      v-for="(good, index) in starGoodsList"
      @click="productEvent"
      :class="{'item1': index % 2 === 0, 'item2': index % 2 !== 0}"
    >
      <div class="top">
        <img :src="good.imgSrc"/>
      </div>
      <div class="bottom">
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
      this.starGoodsList = this.body.starGoods.starGoodsList;
      this.startGoodsBannerSrc = this.body.starGoods.img;
    },
    data () {
      return {
        starGoodsList: [],
        startGoodsBannerSrc: ''
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
  .star-box {
    margin-top: 2px;
    overflow: hidden;
    width: 100%;
    background: #fff;
    font-family: "Microsoft Yahei";
    .starBanner {
      padding-top: 7px;
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
      .item-bottom;
      .top {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
