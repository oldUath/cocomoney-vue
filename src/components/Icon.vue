
<template>
  <svg class="icon" @click="$emit('click',$event)">
    <use :xlink:href="'#'+name"></use>
  </svg>
</template>
<script lang="ts">
// import  x from '@/assets/icons/label.svg'
//加载全部的svg
const importAll = (RequireContext: __WebpackModuleApi.RequireContext) => RequireContext.keys().forEach(RequireContext);
try {
  importAll(require.context('../assets/icons',true,/\.svg$/));
}catch (error){
  console.log(error)
}
export default {
  name: "Nav",
  props:['name']
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>