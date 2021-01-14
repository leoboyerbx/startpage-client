import Vue from 'vue'
import App from './App.vue'
import './index.css'
// import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// axios.get('http://localhost:1337/categories').then(response => {
//   console.log(response)
// })
