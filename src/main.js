import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 导入mui的css样式
import './lib/mui/css/mui.css'
// 导入mui扩展图标样式
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false

// 按需导入需要的mint-ui组件
import { Header,Swipe, SwipeItem} from 'mint-ui'

// 注册组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
