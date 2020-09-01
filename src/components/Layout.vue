<template>
  <div class="nav-wrapper">
    <div class="content">
      <!-- slot就是将外面的新代码复制过来-->
      <slot></slot>
    </div>
    <Nav></Nav>
  </div>
</template>

<style lang="scss" scoped>
.nav-wrapper{
  display:flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  flex-grow: 1;
  overflow: auto;
}
</style>