<template>
  <div id="app">
    <!--  主题内容在router-view里  -->
    <router-view></router-view>
  </div>
</template>
<script lang="js">
  import store from "@/store/index2";

  export default {
    data(){
      return{
        store:store
      }
    }
  }
</script>
<style lang="scss">
//引入scss文件
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";

body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height: 1.5;
  font-family: $font-hei;
  background:#f5f5f5;
}




</style>
