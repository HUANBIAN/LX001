//入口文件
import "./index.html";

import Vue from "vue"

import VueRouter from "vue-router";

Vue.use(VueRouter);

import router from "./router.js";

import app from "./App.vue";

// 导入mint-mi
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

//导入mui
import mui from"./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";
// Vue.use(mui)

// 引入 axios
import axios from 'axios';
axios.defaults.baseURL = './apiInterface';
// 将axios绑定给vue成为一个属性
Vue.prototype.$axios = axios;


//导入时间格式化插件
import moment from 'moment'

import './css/index.scss'


Vue.filter('dateFormat', function(datastr, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(datastr).format(pattern)
})

var vm = new Vue({
  el: "#app",
  render: c => c(app),
  router,
  mui
})