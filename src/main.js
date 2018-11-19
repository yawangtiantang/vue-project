import Vue from 'vue'
import App from './App'
// 导入mui的css样式
import './lib/mui/css/mui.css'

Vue.config.productionTip = false

// 按需导入需要的mint-ui组件
import { Header} from 'mint-ui'

// 注册组件
Vue.component(Header.name, Header)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  
  render: h => h(App)
})
