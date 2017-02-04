<template>
  <div>
    <router-view></router-view>
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
