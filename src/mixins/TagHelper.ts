// mixins.js
import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare mixins as the same style as components.
@Component
export class TagHelper extends Vue {
    createTag(){
        const name=prompt("请输入标签名：")
        if(!name){
            return window.alert("不能输入空的标签名");
        }
        this.$store.commit('createTag',name);
    }
}
export default TagHelper;
