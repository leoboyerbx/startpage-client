import Vue from 'vue'
import App from './App.vue'
import './index.css'

import config from '@/mixins/config'
import store from './store'
import { directive as clickAway } from 'vue-clickaway'
// import axios from 'axios'

Vue.config.productionTip = false
Vue.mixin(config)
Vue.directive('clickAway', clickAway)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
