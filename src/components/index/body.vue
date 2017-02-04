<template>
  <div class="body-box">
    <mi-starGoods :body="body"></mi-starGoods>
    <mi-newGoods :body="body"></mi-newGoods>
    <mi-intelligenceGoods :body="body"></mi-intelligenceGoods>
    <mi-newHomeGoods :body="body"></mi-newHomeGoods>
  </div>
</template>
<script>
  import starGoods from './starGoods';
  import newGoods from './newGoods';
  import intelligenceGoods from './intelligenceGoods';
  import newHomeGoods from './newHomeGoods';
  export default{
    props: ['body'],
    components: {
      'mi-starGoods': starGoods,
      'mi-newGoods': newGoods,
      'mi-intelligenceGoods': intelligenceGoods,
      'mi-newHomeGoods': newHomeGoods
    },
    data () {
      return {};
    }
  };
</script>

<style lang="less" scoped>
  .body-box {
    background: #f5f5f5;
  }
</style>
