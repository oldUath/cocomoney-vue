<template>
<!--  数字面板-->
  <div class="numberPad">
    <div class="output">{{output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class NumberPad extends Vue {
  output = '0';
  inputContent(event: MouseEvent){
    // event.target有可能为空，所以要强制指定类型
    const button = (event.target as HTMLButtonElement);
    //！就是把空排除
    const input = button.textContent !;
    if(this.output.length === 16){return}
    if(this.output === '0'){
      if('123456789'.indexOf(input)>=0){
        this.output = input;
      }else if(input === '0'){
        return;
      }else{
        this.output +=input;
      }
      return;
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {
      return;
    }
    this.output+= input;
  }
//  删除
  remove(){
    if(this.output.length === 1){
      this.output = '0'
    }else{
      this.output =this.output.slice(0,-1)
    }

  }
//  清空
  clear(){
    this.output = '0'
  }
//  ok
  ok(){
    this.$emit('update:value',this.output)
    this.$emit('submit',this.output)
    this.output = '0'
  }
}
</script>


<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.numberPad{
  .output{
    @extend  %innerShadow;
    font-size:36px;
    //等宽编程字体
    font-family: Consolas,monospace;
    padding: 9px 16px;
    text-align:right;
    min-height: 72px;
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
</style>