<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  import index from './components/index/index';
  export default {
    name: 'app',
    components: {
      'mi-index': index
    },
    data () {
      return {};
    }
  };
</script>

<style lang="less" scoped>

</style>
