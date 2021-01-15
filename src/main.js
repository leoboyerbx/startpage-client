import Vue from 'vue'
import App from './App.vue'
import './index.css'

import config from '@/mixins/config'
// import axios from 'axios'

Vue.config.productionTip = false
Vue.mixin(config)

new Vue({
  render: h => h(App)
}).$mount('#app')
