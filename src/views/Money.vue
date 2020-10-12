<template>
    <Layout class-prefix="layout">
<!--字输入面板-->
     <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
<!--支出收入按钮-->
      <Tabs :data-source="recordTypeList"
            :value.sync="record.type"></Tabs>
<!--备注-->
      <div class="notes">
        <FormItem field-name="备注"
                  placeholder="在这里输入备注"
                  :value.sync="record.notes" />
      </div>

<!--衣食住行-->
      <Tags @update:value="record.tags = $event" />
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constant/recordTypeList';
@Component({
  components: {FormItem, Tags, Tabs, NumberPad},
})
export default class Money extends  Vue{
  recordTypeList=recordTypeList;

  get recordList(){
    return this.$store.state.recordList;
  }
  //数据类型初始值，记录Money页面的数据
  record: RecordItem={
    tags:[],notes:'',type:'-',amount:0
  };
  created(){
    this.$store.commit('fetchRecords')
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
    this.$store.commit('createRecord',this.record);
    if(this.$store.state.createRecordError ===null){
      window.alert('已保存');
      this.record.notes = '';
    }
  }
}
</script>

<style lang="scss" scoped>

::v-deep .layout-content{
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>
