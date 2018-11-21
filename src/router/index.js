import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from '../pages/home/index.vue'
import memberComponent from '../pages/member/index.vue'
import searchComponent from '../pages/search/index.vue'
import shopcarComponent from '../pages/shopcar/index.vue'
import newsListComponent from '../pages/newsList/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'./home'},
    {path:'/home',component:homeComponent},
    {path:'/member',component:memberComponent},
    {path:'/search',component:searchComponent},
    {path:'/shopcar',component:shopcarComponent},
    {path:'/home/newsList',component:newsListComponent}
  ],
  linkActiveClass:'mui-active'
  
})
