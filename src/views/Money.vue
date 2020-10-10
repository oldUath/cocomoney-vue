<template>
    <Layout class-prefix="layout">
<!--字输入面板-->
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
      <Tags />
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import store from '@/store/index';


@Component({
  components: {FormItem, Tags,  Types, NumberPad},
  computed:{
    recordList(){
      return this.$store.state.recordList;
    }
  }
})
export default class Money extends  Vue{
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
