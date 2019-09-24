import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Routes from './routes'

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
