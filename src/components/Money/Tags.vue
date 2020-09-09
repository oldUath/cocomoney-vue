<template>
  <!--衣食住行-->
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script>
export default {
name: "Tags"
}
</script>

<style scoped lang="scss">
.tags{
  font-size: 14px;
  padding: 16px;
  //让衣食住行在上面
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
  > .current{
    display: flex;
    //自动换行
    flex-wrap: wrap;

    > li{
      background:#d9d9d9;
      line-height: 24px;
      border-radius:(24px/2) ;
      padding: 0 16px;
      margin-right: 12px;
      margin-top:4px;
    }
  }
  > .new {
    padding: 16px  0;
    button{
      background: transparent;
      border: none;
      color:#999;
      border-bottom: 1px solid ;
    }
  }
}
</style>