<template>
  <nav>
    <!-- 底部导航栏   -->
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"></Icon>
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"></Icon>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"></Icon>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav",
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav{
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,0.3);
  flex-direction: row;
  font-size: 12px;
  >.item{
    padding: 2px 0;
    width: 33.33%;
    display: flex;
    //改变方向
    flex-direction: column;
    //中间对齐
    align-items: center;
    .icon{
      width: 32px;
      height: 32px;
    }
  }
  >.item.selected{
    color: $color-heighlight;
  }

}
</style>