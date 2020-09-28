<template>
  <button class="button" @click="$emit('click',$event)">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class Button extends Vue{

}
</script>

<style scoped lang="scss">
.button{
  background-color: #767676;
  color: white;
  border-radius:4px ;
  height: 40px;
  padding: 0 16px;
  &-wrapper{
   text-align: center;
   padding: 16px;
   margin-top: 28px;
 }
}
</style>