import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
// 解决移动样式不同的问题
import 'styles/reset.css'
// 解决移动端1像素问题
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
