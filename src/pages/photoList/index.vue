<template>
    <div class='photoList-container'>
        <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item' ,item.id===0 ? 'mui-active':'']" v-for= '(item ) in categories' :key='item.id'>
							{{item.title}}
					</a>
					
				</div>
			</div>

		</div>
    </div>
</template>
<script>
// arguments callee caller在严格模式下无法使用 而webpack默认是采用严格模式打包的
// 所以mui.js无法被打包编译
// 解决方案: 在 .babelrc 文件中配置忽略, 将mui的js文件全部忽略掉
import mui from "../../lib/mui/js/mui.min.js";

  
    export default{
        data(){
            return{
				categories:[]
            }
        },
		created(){
			this.getAllCategory()
		},
        methods:{
			getAllCategory(){
				this.$http.get('api/getimgcategory').then(result=>{
					if(result.body.status===0){
						this.categories=result.body.message
						this.categories.unshift({title:'全部',id:0})
					}
				})
			}
        },
		mounted() {
    // 初始化区域滚动一定要放在mounted钩子函数中
    // 因为初始化操作必须要等DOM元素加载完成后才可以进行
    		mui(".mui-scroll-wrapper").scroll({
     	 deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    	});
  	}
		}
</script>
<style lang='less'>

</style>
