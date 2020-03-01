import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/GlobalComponent'
// 引入样式格式化
import './assets/styles/reset.css'

import axios from './http'
Vue.prototype.$axios = axios

// 使用轮播图
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
