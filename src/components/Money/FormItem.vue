<template>
  <!--备注-->
  <div>
    <label class="formItem">
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
export  default class FormItem extends Vue{
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
.formItem{
  font-size:14px;
  padding:0 16px;
  display: flex;
  align-items:  center;
.name{
  padding-right: 16px;
}
input{
  height: 40px;
  flex-grow: 1;
  background: transparent;
  border: none;
  padding-right: 16px;
}
}
</style>