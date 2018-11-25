import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import VueResource from 'vue-resource'
import moment from 'moment'
Vue.use(VueResource)
// 配置vue-resource的请求根域名
Vue.http.options.root = 'http://www.lovegf.cn:8899/'
// 配置post请求以传统表单形式提交参数
Vue.http.options.emulateJSON = true;
// 导入mui的css样式
import './lib/mui/css/mui.css'
// 导入mui扩展图标样式
import './lib/mui/css/icons-extra.css'
// 导入自己的全局样式
import './css/common.less'
Vue.config.productionTip = false

// 按需导入需要的mint-ui组件
import { 
  Header,
  Swipe, 
  SwipeItem,
  button} 
  from 'mint-ui'

// 注册组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(button.name, button);
// 定义全局过滤器
Vue.filter('dateFormat', function(dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  // 直接调用表示获取当前时间
  return moment(dateStr).format(pattern)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
