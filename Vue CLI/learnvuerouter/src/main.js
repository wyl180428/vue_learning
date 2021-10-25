import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// 前置收尾
router.beforeEach((to, from, next) => {
  document.title=to.meta.title
  console.log(to);
  next()
})
router.afterEach((to,from)=>{
  console.log('-------')
})
