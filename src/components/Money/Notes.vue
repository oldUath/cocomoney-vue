<template>
  <!--备注-->
  <div>
    <label class="notes">
      <span class="name">{{this.fieldName}}</span>
      <input type="text"  v-model="value"
             :placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator';
@Component
export  default class Notes extends Vue{
  value = '';
  //required：true 是必须要传一个
  @Prop({required:true}) fieldName!: string;

  @Prop() placeholder?: string;


  @Watch('value')
  onValueChanged(value: string){
    this.$emit('update:value',this.value)
  }
}

</script>

<style scoped lang="scss">
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
</style>