// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import VueJsonp from 'vue-jsonp'
//推荐用法：整个document的body的dom中，也就是body下面的所有按钮都没有3秒的延迟
fastclick.attach(document.body)

Vue.use(VueJsonp)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
