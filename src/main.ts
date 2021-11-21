import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import router from './router';

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import vuetify from './plugins/vuetify'

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

console.log('🌳🌲');
