<template>
    <div class='photoList-container'>
        <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
					</a>
					<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
					</a>
					<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
					</a>
					<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
					</a>
					<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
					</a>
					<a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
						科技
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

            }
        },
        methods:{

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
