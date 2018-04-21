import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
// 解决移动样式不同的问题
import './assets/styles/reset.css'
// 解决移动端1像素问题
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
