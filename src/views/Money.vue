<template>

    <Layout class-prefix="layout">
<!--      数字输入面板-->
     <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
<!--支出收入按钮-->
      <Types :value="record.type" @update:value="onUpdateType"/>
<!--备注-->
      <Notes @update:value="onUpdateNotes" />
<!--衣食住行-->
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
{{recordList}}
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';

window.localStorage.setItem('version','0.0.1');

//定义一种类型
type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date;
}
@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends  Vue{
  tags=['衣','食','住','行'];
  recordList: Record[]=JSON.parse(window.localStorage.getItem('recordList') || '[]');
  //数据类型初始值，记录Money页面的数据
  record: Record={
    tags:[],notes:'',type:'-',amount:0
  }
  onUpdateTags(value: string[]){
    this.record.tags=value
  }
  onUpdateNotes(value: string){
    this.record.notes=value

  }
  onUpdateType(value: string){
    this.record.type=value

  }
  onUpdateAmount(value: string){
    this.record.amount=parseFloat(value)

  }
  saveRecord(){
    //进行深拷贝,如果直接把record给push他们的值永远是一样的，因为push的是地址
    const record2=JSON.parse(JSON.stringify(this.record));
    record2.createAt=new Date();
    this.recordList.push(record2)
    console.log(this.recordList);
  }
@Watch('recordList')
  onRecordListChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  }

}
</script>

<style lang="scss">

.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>
