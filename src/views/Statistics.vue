<template>
    <Layout>
      <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"></Tabs>
      <div>
        <ol >
          <li v-for="(group,index) in groupedList" :key="index">
            <h3 class="title">{{beautify(group.title)}}</h3>
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
import dayjs from 'dayjs';
import clone from '@/lib/clone';

@Component({
  components:{Tabs},
})
export default class Statistics extends Vue {
  type = '-';
  recordTypeList = recordTypeList;

  beautify(string: string){
    const day = dayjs(string);
    const now = dayjs();
    console.log('a');
    if(day.isSame(now,'day')){
      console.log('ab');
      return '今天';
    }else if(day.isSame(now.subtract(1,'day'),'day')){
      return '昨天';
    }else if(day.isSame(now.subtract(2,'day'),'day')){
      return '前天';
    }else if(day.isSame(now,'year')){
      return day.format('M月D日');
    }else{
      return day.format('YYYY年MM月DD日');
    }
  }

  tagString(tags: Tag[]){
    return tags.length===0 ? '无' : tags.join(',');
  }
  get recordList(){
    return (this.$store.state as RootState).recordList;
  }
  get groupedList(){
    const {recordList} = this;
    type HashTableValue = {title: string;items: RecordItem[]};
    const newList = clone(recordList).sort((a,b)=>dayjs(b.createdAt).valueOf()-dayjs(a.createdAt).valueOf());
    const result = [{title:dayjs(newList[0].createdAt).format('YYYY-MM-DD'),items:[newList[0]]}];
    for(let i=0;i<newList.length;i++){
      const current = newList[i];
      const last = result[result.length-1];
      if(dayjs(last.title).isSame(dayjs(current.createdAt),'day')){
        last.items.push(current);
      }else{
        result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'),items:[current]});
      }
    }
    return result;
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
    background: #C0C0C0;
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