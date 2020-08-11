/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-07-13 17:34:03
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-07-18 12:00:05
 */

import Vue from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css'
import Element from 'element-ui'

import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

Vue.use(Element, {
  size: Cookies.get('size') || 'medium',
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
})
