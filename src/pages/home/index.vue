<template>
    <div class="home-container">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
                <a :href="item.url">
                    <img :src="item.img">
                </a>
            </mt-swipe-item>
           
        </mt-swipe>
    </div> 
</template>
<script>
    import {Toast} from 'mint-ui';
    export default{
        data(){
            return{
                bannerList:[]
            }
       
        },
        created(){
             this.getBannerData();
        },
         methods:{
             getBannerData(){
                 this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then(result =>{
                    //  console.log(result)
                     if(result.body.status===0){
                         this.bannerList=result.body.message
                     }else{
                         Toast('获取轮播图失败')
                     }
                 })
             }
        }
    }
</script>
<style lang='less'>
    .home-container{
        .mint-swipe{
            height: 300px;
           
                .mint-swipe-item{
                    &:nth-child(1){
                        background-color:pink;
                    }
                     &:nth-child(2){
                        background-color:rgb(202, 100, 202);
                    }
                     &:nth-child(3){
                        background-color:skyblue;
                    }
                    a{
                        display:block;
                        width:100%;
                        height:100%;
                        img{
                           width:100%;
                        }
                    }
                }
            
        }
    }
</style>
