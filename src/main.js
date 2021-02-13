import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/bootstrap'
import { store } from './store'


Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import VueResource from 'vue-resource'

Vue.use(VueResource);


//Vue.http.options.root = 'http://localhost:8001/api/';
//Vue.http.headers.common['Authorization'] = 'Bearer '+ JSON.parse(localStorage.getItem('token'));



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
