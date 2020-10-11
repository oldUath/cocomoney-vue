<template>
    <Layout>
      <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"></Tabs>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval" />
      <div>
        type:{{type}}
        <br>
        interval:{{interval}}
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
  interval = 'week';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
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
</style>