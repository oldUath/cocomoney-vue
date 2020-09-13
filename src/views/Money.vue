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
import model from '@/model';


const recordList=model.fetch();


@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends  Vue{
  tags=['衣','食','住','行'];
  recordList: RecordItem[]=recordList;
  //数据类型初始值，记录Money页面的数据
  record: RecordItem={
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
    const record2: RecordItem=model.clone(this.record);

    record2.createdAt=new Date();
    this.recordList.push(record2);
  }
@Watch('recordList')
  onRecordListChange(){
  model.save(this.recordList);
  }

}
</script>

<style lang="scss">

.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>
