<template>
  <div class='app-container'>
    <!-- 头部 -->
    <mt-header fixed title="vue project"></mt-header>
     <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    <!-- 中间区域 -->
		<transition>
			<router-view>

		  </router-view>
   
		</transition>
    
  </div>
</template>

<script>

</script>

<style lang='less'>
  .app-container{
    padding-top:40px;
		padding-bottom:50px;
		.v-enter{
			opacity:0;
			transform:translateX(100px)
		}
		.v-leave-to{
			position:absolute;
			opacity:0;
			transform:translateX(-100px)
		}
		.v-enter-active,.v-leave-active{
			transition:all 0.6s ease
		}
  }
</style>
