<template>
<div class="comment-container">
  <h2>发表评论</h2>
  <hr>
  <textarea  v-model='commentContent' placeholder='请输入您要评论的内容，最多评论120字'></textarea>
  <mt-button @click='postComment' type='primary' size='large'>发表评论</mt-button>
  <div class='comment-list'>
    <div class="comment-item" v-for="(item,index) in commentList" :key='index'>
      <div class='comment-title'>第{{index + 1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | dateFormat}}</div>
      <div class='content'> {{item.content=='undefined' ? '此人有点懒':item.content || '此人有点懒'}}</div>
    </div>
  </div>    
  <mt-button @click='loadMore' type='danger' size='large' plain >加载更多</mt-button>
</div>
 
</template>
<script>
import {Toast} from 'mint-ui'
  export default{
    props: ["id"],
    data(){
      return{
        pageIndex:1,
        commentList:[],
        commentContent:''
      }
    },
    created(){
      this.getComments()
    },
    methods:{
        getComments(){
          this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(result =>{
            if(result.body.status===0){
              // this.commentList=result.body.message
              this.commentList= this.commentList.concat(result.body.message)
            }else{
              Toast('获取评论信息失败')
            }
          })
        },
        loadMore(){
      this.pageIndex++
      this.getComments()
    },
        postComment(){
          if(this.commentContent.trim()===''){
            return Toast('评论内容不可为空')
          }
          this.$http.post('api/postcomment/'+this.id,{content:this.commentContent}).then(result=>{
            if(result.body.status===0){
              // console.log(result);
              Toast(result.body.message)
              this.pageIndex=1
              this.commentList=[]
              this.getComments()

            }
          })
        }
    }
    
  }
</script>
<style lang='less'>
  .comment-container {
  .comment-list {
    .comment-item {
      margin: 5px 0;
      .comment-title {
        font-size: 13px;
        background-color: #ccc;
      }
      .comment-content {
        font-size: 13px;
      }
    }
  }
}
</style>
