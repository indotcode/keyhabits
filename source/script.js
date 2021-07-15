import "./style.scss";

// Образец

import Vue from 'vue';
// import store from './store.js';
import HighchartsVue from 'highcharts-vue'
import App from './vue/App.vue';
import store from './store';

Vue.use(HighchartsVue);

new Vue({
  el: '#app',
  store,
  render: h => h(App),
})