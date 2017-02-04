<template>
  <div class="wripper" ref="goods">
    <mi-img :img="img"></mi-img>
    <mi-buyControl :goodsAttr="goodsAttr"></mi-buyControl>
    <mi-detail :detailData="detailData"></mi-detail>
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
    }
  };
</script>

<style lang="less">

</style>
