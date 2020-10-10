<template>
  <!--衣食住行-->
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected:selectedTags.indexOf(tag)>=0}"
        @click="toggle(tag)">{{tag.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';
@Component({
  computed:{
    tagList(){
      return this.$store.state.tagList;
    }
  }
})
export default class Tags extends mixins(TagHelper){
  //选中的标签数组
  selectedTags: string[]=[];
  created(){
    this.$store.commit('fetchTags');
  }
  toggle(tag: string){
    const index = this.selectedTags.indexOf(tag);
    if(index>=0){
      this.selectedTags.splice(index,1);
    }else {
      this.selectedTags.push(tag)
    }
    this.$emit('update:value',this.selectedTags)
  }
//  新增标签方法在mixin里面

}
</script>

<style scoped lang="scss">
.tags{
  background:white;
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
      $bg:#d9d9d9;
      background:$bg;
      line-height: 24px;
      border-radius:(24px/2) ;
      padding: 0 16px;
      margin-right: 12px;
      margin-top:4px;
      &.selected{
        background: darken($bg,30%);
        color: white;
      }
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