import Vue from 'vue'
import App from './App.vue'
import './index.css'

import config from '@/mixins/config'
import store from './store'
// import axios from 'axios'

Vue.config.productionTip = false
Vue.mixin(config)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
