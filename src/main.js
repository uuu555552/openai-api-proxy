import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router/index.js'
import './styles/common.scss'

import './plugins/element.js'

import './common/scss/index.scss' // global css

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
