import Vue from 'vue'
import App from './App'
import store from './store'

import './main.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store,
})
