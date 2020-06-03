import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './plugins/vee-validate';


import './assets/css/styles.scss';

Vue.config.productionTip = false;

var app = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');

global.app = app;
