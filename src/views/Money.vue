<template>
    <Layout class-prefix="layout">

<!--      数字输入面板-->
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">OK</button>
          <button class="zero">0</button>
          <button>.</button>
        </div>
      </div>

<!--支出收入按钮-->
      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>

<!--备注-->
      <div>
        <label class="notes">
          <span class="name">备注</span>

          <input type="text" placeholder="在这里输入备注">
        </label>
      </div>

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

    </Layout>
</template>

<script lang="ts">
export default {
  name: "Money",
}
</script>
<style lang="scss">

.layout-content{
  border: 3px solid red;
  display: flex;
  flex-direction: column-reverse;
}

</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad{
  .output{
    @extend  %innerShadow;
    font-size:36px;
    //等宽编程字体
    font-family: Consolas,monospace;
    padding: 9px 16px;
    text-align:right;

  }
  .buttons{
    @extend %clearFix;
    height: 64px;
    flex-wrap: wrap;
    >button{
      width: 25%;
      height: 64px;
      float: left;
      &.ok{
        height: 64*2px;
        float:right;
      }
      &.zero{
        width: 25*2%;
        float: left;
      }

      border: none;
      background: none;
      $bg:#f2f2f2;
      &:nth-child(1){
        background: $bg;
      }
      &:nth-child(2), &:nth-child(5){
        background: darken($bg,4%);
      }
      &:nth-child(3), &:nth-child(6),&:nth-child(9){
        background: darken($bg,4*2%);
      }
      &:nth-child(4), &:nth-child(7),&:nth-child(10){
        background: darken($bg,4*3%);
      }
      &:nth-child(8), &:nth-child(11),&:nth-child(13){
        background: darken($bg,4*4%);
      }
      &:nth-child(14){
        background: darken($bg,4*5%);
      }
      &:nth-child(12){
        background: darken($bg,4*6%);
      }
    }
  }
}
.types{
  background: #C4C4C4;
  display: flex;
  text-align: center;
  font-size:24px;
  >li{
    width: 50%;
    line-height: 64px;
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
  //  当前被选中的li
    &.selected::after{
      content: '';
      position:absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: #333;
      height: 4px;
    }
  }

}
.notes{
  font-size:14px;
  background: #f5f5f5;
  padding:0 16px;
  display: flex;
  align-items:  center;
  .name{
    padding-right: 16px;
  }
  input{
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;

  }

}
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
      height: 24px;
      line-height: 24px;
      border-radius:(24px/2) ;
      padding: 0 10px;
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

