import Vue from 'vue'
import App from './App.vue'
import panZoom from 'vue-panzoom'
var VueScrollTo = require('vue-scrollto');

Vue.config.productionTip = false;

Vue.use(panZoom);
Vue.use(VueScrollTo);

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')