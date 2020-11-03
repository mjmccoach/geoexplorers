import Vue from 'vue'
import App from './App.vue'
import panZoom from 'vue-panzoom'

Vue.config.productionTip = false;

Vue.use(panZoom);

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')