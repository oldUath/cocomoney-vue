<template>
  <Layout>
    编辑标签页面
  </Layout>
</template>

<script>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from "@/models/tagListModel";

@Component
export default class EditerLabel extends Vue {
  created(){
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t=>t.id === id)[0]
    if(tag){
      console.log(tag)
    }else{
      this.$router.replace('/404')
    }

  }
}
</script>

<style scoped>

</style>