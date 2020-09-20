<template>
  <Layout>
    <div>
      <Icon name="left"></Icon>
      <span>编辑标签页面</span>
    </div>

    <Notes field-name="标签名"
            placeholder="请输入标签名"
        />
  </Layout>
</template>

<script>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from "@/models/tagListModel";
import Notes from "@/components/Money/Notes";
@Component({
  components: {Notes}
})
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