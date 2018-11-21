# vue-cli-study

> 这是一个vue-project项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
##修改首页tabBar图标
1.找到mui的扩展图标库
2.将扩展图标拷贝到项目中
3.在main.js中引入扩展图标的样式
4.使用扩展图标
##设置当前选中tab栏高亮
## 配置路由规则实现路由跳转

- 项目文件的结构注意事项, 可以参考现有的开源项目, 更方便的管理自己的文件结构

- 参考结构:

  src => pages => home => index.vue

配置路由规则:

  ```javascript
  import HomeComponent from '../pages/home/'
  import MemberComponent from '../pages/member/'
  import ShopcarComponent from '../pages/shopcar/'
  import SearchComponent from '../pages/search/'

  Vue.use(Router)

  export default new Router({
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: HomeComponent },
      { path: '/member', component: MemberComponent },
      { path: '/shopcar', component: ShopcarComponent },
      { path: '/search', component: SearchComponent },
    ],
    linkActiveClass: 'mui-active'
  })
  ```

## 制作首页轮播图

1. 通过mint-ui的swipe组件完成样式
2. 使用vue-resource获取接口中的数据, 进行渲染

## 首页九宫格的样式改造

- 由于mint-ui没有合适的组件可供参考, 所以我们使用mui的代码片段作为改造的基础模板
- 修改结构并覆盖mui的默认样式
- 抽取全局的common.less样式, 通过main.js引入

## 添加组件切换动画

- 切换动画的起点和终点不同, 所以单独设置v-enter和v-leave-to的样式

```css
.v-enter {
  transform: translateX(100%);
  opacity: 0;
}

.v-leave-to {
  position: absolute;
  transform: translateX(-100%);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
