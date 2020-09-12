<template>
  <!--支出收入按钮-->
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected' " @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected' " @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class Type extends Vue {
  type = '-'; //-号是支出，+号是收入
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }
  @Watch('type')
  onTypeChanged(value: string){
    this.$emit('update:value',this.type)

  }

}

</script>

<style scoped lang="scss">
.types {
  background: #C4C4C4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    line-height: 64px;
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    //  当前被选中的li
    &.selected::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: #333;
      height: 4px;
    }
  }
}
</style>