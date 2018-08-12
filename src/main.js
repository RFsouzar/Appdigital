import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'bootstrap/dist/css/bootstrap.css';



import VueRouter from 'vue-router';
import {routes} from './routes' 
import VueTheMask from 'vue-the-mask'
import VueResource from 'vue-resource';


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(BootstrapVue);
Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(VueTheMask);
Vue.use(VueResource);

const router = new VueRouter({
  routes,
  mode:'history'
});

Vue.config.productionTip = false

Vue.component('modal', {
  template: '#modal-template'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data: {
    showModal: false
  }
  
})
