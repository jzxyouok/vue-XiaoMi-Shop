<template>
  <div ref="index" class="app">
    <mi-load :load="load"></mi-load>
    <mi-header @searchEvent="searchHandle"></mi-header>
    <div v-show="!searchState">
      <div v-if="a"><!--模拟loading效果-->
        <mi-banner :banner="banner"></mi-banner>
        <mi-menu :menu="menu"></mi-menu>
        <mi-body :body="body"></mi-body>
      </div>

    </div>
  </div>
</template>

<script>
  import util from '../../../lib/util';
  import load from '../loading';
  import header from './header';
  import banner from './banner';
  import menu from './menu';
  import body from './body';
  import data from '../../../data';
  export default {
    components: {
      'mi-header': header,
      'mi-banner': banner,
      'mi-menu': menu,
      'mi-body': body,
      'mi-load': load
    },
    created () {
      var me = this;
      setTimeout(function () {
        me.a = true;
      }, 2000);
      me.banner = data.banner;
      me.menu = data.menu;
      me.body = data;
      me.bannerList = data.banner.bannerTop;
    },
    mounted () {
      console.log(util.screenSize());
      this.c_height = 0.711 * util.screenSize().width;
    },
    data () {
      return {
        banner: {},
        menu: {},
        body: {},
        bannerList: [],
        scrollX: 0,
        scrollY: 0,
        searchState: false,
        headOpac: '',
        load: false,
        a: false,
        c_height: 0
      };
    },
    methods: {
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

<style lang="less" scoped>
  .app {
    background: #fff;
  }

  .banner-img {
    width: 100%;
    img {
      width: 100%;
    }
  }
</style>
