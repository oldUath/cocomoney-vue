<template>
    <Layout>
      <Types class-prefix="zzz" :value.sync="yyy"/>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Types from '@/components/Money/Types.vue';
import {Component} from 'vue-property-decorator';

@Component({
  components:{Types},
})
export default class Statistics extends Vue{
  yyy='-';

}
</script>

<style scoped lang="scss">
  ::v-deep .zzz-item{
    background: white;
    &.selected{
      background:#c4c4c4;
      &::after{
        display: none;
      }
    }
  }
</style>