import Vue from 'vue'
import App from './App.vue'
import router from './router'
import provedor from './provedor'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import http from '@/http';

Vue.config.productionTip = false;

Vue.prototype.$http = http;

new Vue({
  router,
  render: h => h(App),
  store: provedor,
}).$mount('#app')
