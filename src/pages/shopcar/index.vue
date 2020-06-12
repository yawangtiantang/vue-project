<template>
<!-- 参考链接：https://blog.csdn.net/Smile_ping/article/details/102843887 -->
    <div class="home-container">
       <main class="main">
        <!-- 遍历标题 -->
        <ul class="navMenu">
            <li v-for="(item, index) in navList" :key="index" @click="showModule(index)" :class="{actives: active === index}">{{item.title}}</li>
        </ul>

        <div class="contentWrap">
            <section style="background-color:red;width:100%;height:300px" ref="box1">我是节点1
               <li>111111111111111111111111</li>
                <li>111111111111111111111111</li>
                <li>111111111111111111111111</li>
            </section>
            <section style="background-color:blue;width:100%;height:300px;margin-bottom: 20PX;" ref="box2">
              <ul>
                <li>222222222222222222222222</li>
                <li>222222222222222222222222</li>
                <li>222222222222222222222222</li>
              </ul>
            </section>
            <section style="background-color:yellow;width:100%;height:300px" ref="box3">我是节点3啊啊啊啊啊啊啊
               <ul>
                <li>333333333333333333333333</li>
                <li>333333333333333333333333</li>
                <li>333333333333333333333333</li>
              </ul>
            </section>
        </div>
    </main>
    </div>

</template>
<script>
     export default {
        data(){
            return{
                navList: [
                    {"title": "推荐"},
                    {"title": "科技"},
                    {"title": "时尚"},
                ],
                active: 0,
            }
        },  
        methods: {
          showModule(index){
            // 给当前点击元素添加类名
            this.active = index;
            if(index == '0'){
              var el = this.$refs.box1
            }else if(index == '1'){
              var el = this.$refs.box2
            }else if(index == '2'){
              var el = this.$refs.box3
            }
            // var el = this.$refs.box1
            console.log(el)
                this.$nextTick(function () {
                    // 平滑滑动【这里-55 是当前元素上边界相对body的上偏移量】,可根据需求修改
                    window.scrollTo({"behavior":"smooth","top":el.offsetTop - 110});
                })
          },
        }
    }
</script>
<style lang="less">
.main {
      overflow-x : hidden;
      overflow-y : hidden;
       .navMenu {
         margin-top:40px;
           display: flex;
           position: fixed;
           top: 0;
           left: 0;
           height: 55PX;
           width: 100%;
           background-image: linear-gradient(90deg, #fe650b 0%, #ff8451 100%);
           li {
               display: flex;
               align-items: center;
               justify-content: center;
               flex: 1;
               color: #fff;
           }
           .actives {
               color: red;
           }
       }
       .contentWrap {
           margin-top: 70PX;
           height:1200px;
           overflow-y:hidden;
           .commSty{
               width: 100%;
               height: 500PX;
           }
       }
   }
</style>
