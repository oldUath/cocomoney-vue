<template>
    <Layout class-prefix="layout">
<!--      数字输入面板-->
     <NumberPad />
<!--支出收入按钮-->
      <Types />
<!--备注-->
      <Notes />
<!--衣食住行-->
      <Tags />

    </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';

export default {
  name: "Money",
  components: {Tags, Notes, Types, NumberPad},
}
</script>

<style lang="scss">

.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>
