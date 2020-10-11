<template>
    <ul class="tabs">
      <li v-for="item in dataSource" :key="item.value"
          :class="liClass(item)"
      @click="select(item)">{{item.text}}</li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem={text: string;value: string};
@Component
export default class Tabs extends Vue {
  @Prop({required:true,type:Array}) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  liClass(item: DataSourceItem){
    return {
      [this.classPrefix+'-tabs-item']:this.classPrefix,
      selected: item.value===this.value
    }

  }
  select(item: DataSourceItem){
    this.$emit('update:value',item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
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