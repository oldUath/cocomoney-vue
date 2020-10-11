<template>
    <Layout>
      <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"></Tabs>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval" />
      <div>
        <ol >
          <li v-for="(group,index) in result" :key="index">
            <h3 class="title">{{group.title}}</h3>
            <ol>
              <li class="record" v-for="item in group.items" :key="item.id">
                <span>{{tagString(item.tags)}} </span>
                <span class="notes">{{item.notes}}</span>
                <span><span>￥</span>{{item.amount}}</span>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constant/intervalList';
import recordTypeList from '@/constant/recordTypeList';

@Component({
  components:{Tabs},
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;

  tagString(tags: Tag[]){
    return tags.length===0 ? '无' : tags.join(',');
  }
  get recordList(){
    return (this.$store.state as RootState).recordList;
  }
  get result(){
    const {recordList} = this;
    type HashTableValue = {title: string;items: RecordItem[]};

    const hashTable: {[key: string]: HashTableValue} ={};
    for(let i=0;i<recordList.length;i++){
      const [data,time] = recordList[i].createdAt!.split('T');
      hashTable[data] = hashTable[data] || {title:data,items:[]};

      hashTable[data].items.push(recordList[i]);
    }
    console.log(hashTable);
    return hashTable;
  }
  beforeCreate(){
    this.$store.commit('fetchRecords');
  }
}
</script>

<style scoped lang="scss">
  ::v-deep .type-tabs-item{
    background: white;
    &.selected{
      background:#c4c4c4;
      &::after{
        display: none;
      }
    }
  }
  ::v-deep .interval-tabs-item{
    height: 48px;
  }
  %item {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
  }
  .title{
    @extend %item;
    background: #C4C4C4;
  }
  .record{
    background: white;
    @extend %item;
  }
  .notes{
    margin-right: auto;
    margin-left: 16px;
    color:#999;

  }
</style>