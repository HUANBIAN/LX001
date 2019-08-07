//入口文件
import "./index.html";

import Vue from "vue"

import VueRouter from "vue-router";

Vue.use(VueRouter);

import router from "./router.js";
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

import app from "./App.vue";

// 导入mint-mi
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

//导入mui
import "./lib/mui/css/mui.min.css";
import './lib/mui/css/icons-extra.css'

// 引入 axios
import axios from 'axios';
axios.defaults.baseURL = './apiInterface';
// 将axios绑定给vue成为一个属性
Vue.prototype.$axios = axios;


//导入时间格式化插件
import moment from 'moment'

//缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// Vue.use(preview, {
//   mainClass: 'pswp--minimal--dark',
//   barsSize: {top: 0, bottom: 0},
//   captionEl: false,
//   fullscreenEl: false,
//   shareEl: false,
//   bgOpacity: 0.85,
//   tapToClose: true,
//   tapToToggleControls: false
// })

import './css/index.scss'


Vue.filter('dateFormat', function(datastr, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(datastr).format(pattern)
})

var vm = new Vue({
  el: "#app",
  render: c => c(app),
  router
})