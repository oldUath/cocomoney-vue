<template>
  <div id="app">
    <!--  主题内容在router-view里  -->
    <router-view></router-view>
  </div>
</template>

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
#app{
  max-width:500px;
  margin: 0 auto;
}

</style>
