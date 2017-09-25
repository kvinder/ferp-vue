// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import 'script-loader!foamtec-css/assets/js/jquery-2.1.4.min.js'
import 'script-loader!foamtec-css/assets/js/bootstrap.min.js'
import 'script-loader!foamtec-css/assets/js/ace-elements.min.js'
import 'script-loader!foamtec-css/assets/js/ace.min.js'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
