import Vue from 'vue'
import axios from 'axios'

import App from './App'

window.jQuery = window.$ = require('jquery/dist/jquery.min')

import 'bootstrap/dist/js/bootstrap.min'

import * as VueFire from 'vuefire'

// Vue.use(VueFire)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
