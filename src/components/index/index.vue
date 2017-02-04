<template>
  <div ref="index" class="app">
    <mi-header @searchEvent="searchHandle"></mi-header>
    <div v-show="!searchState">
      <mi-banner :banner="banner"></mi-banner>
      <mi-menu :menu="menu"></mi-menu>
      <mi-body :body="body"></mi-body>
    </div>
  </div>
</template>

<script>
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
      'mi-body': body
    },
    created () {
      this.banner = data.banner;
      this.menu = data.menu;
      this.body = data;
    },
    data () {
      return {
        banner: {},
        menu: {},
        body: {},
        scrollX: 0,
        scrollY: 0,
        searchState: false,
        headOpac: ''
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
</style>
