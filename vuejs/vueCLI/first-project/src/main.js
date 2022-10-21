import Vue from 'vue'
import App from './App.vue'
import router from './router'
import commonStyle from './assets/css/common.css'

Vue.config.productionTip = false

new Vue({
  router,
  commonStyle,
  render: function (h) { return h(App) }
}).$mount('#app')
