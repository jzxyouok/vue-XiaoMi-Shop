<template>
  <div>
    <div class="buy-control">
      <div class="title">{{ goodsAttr.title }}</div>
      <div class="price">{{ goodsAttr.price }}元</div>
      <div class="desc">
        <span class="tag">【{{ goodsAttr.desc.tag }}】</span>
        <span>{{ goodsAttr.desc.sc }}</span>
      </div>
      <div class="attr">
        <ul>
          <li :class="{active: index === 0}" v-for="(item, index) in goodsAttr.attr.color">{{ item.text }}</li>
        </ul>
        <ul>
          <li :class="{active: index === 0}" v-for="(item, index) in goodsAttr.attr.ram">{{ item.text }}</li>
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    props: ['goodsAttr'],
    data () {
      return {};
    },
    components: {}
  };
</script>

<style lang="less">
  .buy-control {
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    padding: 10px;
    border-top: 1px solid #ddd;
    font-family: 'Microsoft YaHei';
    .title {
      line-height: 25px;
      font-size: 15px;
    }
    .price {
      font-size: 16px;
      color: #FF5722;
      line-height: 25px;
    }
    .desc {
      color: #999;
      font-size: 12px;
      .tag {
        color: #FF5722;
      }
    }
    .attr {
      width: 100%;
      padding: 10px 0 0 0;
      ul {
        width: 100%;
        padding: 0;
        margin: 0;
        li {
          list-style-type: none;
          font-size: 12px;
          border: 1px solid #bbb;
          padding: 6px 10px;
          margin: 5px;
          display: inline-block;
          &.active {
            border: 1px solid #ff5722;
            color: #ff5722;
          }
        }
      }
    }
  }


</style>
