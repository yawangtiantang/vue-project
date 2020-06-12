<template>
  <div class="home-container" style="display:flex;margin-top:50px">
    <div v-for="(item, index) in dataList" :key="index">
      <span style="margin-right:20px" @click="changeData(index)">{{
        item.title
      }}</span
      ><span style="margin-right:10px"> > </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        { title: "选项一", id: 1 },
        { title: "选项二", id: 2 },
        { title: "选项三", id: 3 }
      ]
      //  dataList:[{title:'选项一',id:1}]
    };
  },
  methods: {
    changeData(key) {
      for (let i = 0; i < this.dataList.length; i++) {
        if (i > key) {
          this.dataList.splice(i, 1);
        }
      }

      // let obj = {title:'选项aaaaa'}
      // this.dataList.push(obj)
    }
  }
};
</script>
<style lang="less">
</style>
