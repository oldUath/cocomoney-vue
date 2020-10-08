<template>
    <Layout class-prefix="layout">
<!--      数字输入面板-->
     <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
<!--支出收入按钮-->
      <Types :value="record.type" @update:value="onUpdateType"/>
<!--备注-->
      <div class="notes">
        <FormItem field-name="备注"
                  placeholder="在这里输入备注"
                  @update:value="onUpdateNotes" />
      </div>

<!--衣食住行-->
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
{{record}}
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';


@Component({
  components: {FormItem, Tags,  Types, NumberPad}
})
export default class Money extends  Vue{
  tags=window.tagList;
  recordList=window.recordList;
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
    // //进行深拷贝,如果直接把record给push他们的值永远是一样的，因为push的是地址
    // const record2: RecordItem=recordListModel.clone(this.record);
    // record2.createdAt=new Date();
    // this.recordList.push(record2);
    window.createRecord(this.record);
  }


}
</script>

<style lang="scss">

.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>
