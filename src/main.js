import Vue from 'vue';
import App from './App';
import Index from './components/index/index.vue';
import Goods from 'components/goods/goods.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {path: '/', redirect: '/index'},
  { path: '/index', component: Index },
  { path: '/goods', component: Goods }
];
const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
});
