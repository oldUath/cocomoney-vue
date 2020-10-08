import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';

Vue.config.productionTip = false;
//引入导航栏，全局引入
Vue.component('Nav', Nav);
//引入全局的页面布局
Vue.component('Layout', Layout);
Vue.component('Icon',Icon);

// record store
window.recordList=recordListModel.fetch();
window.createRecord=(record: RecordItem)=>{
    recordListModel.create(record);
};


//tag store
window.tagList = tagListModel.fetch();
window.findTag = (id: string)=>{
    return window.tagList.filter(t => t.id === id)[0];
}
window.createTag = (name: string)=>{
    const message = tagListModel.create(name);
    if(message === 'duplicated'){
        window.alert('标签名重复');
    }else if(message === 'success'){
        window.alert('添加成功');
    }
};
window.removeTag = (id: string)=>{
    return tagListModel.remove(id);
};
//(id:string,object:Exclude<Tag, 'id'>) 传入两个参数 id和Tag里除了id的所有东西
window.updateTag = (id: string,name: string)=>{
    return tagListModel.update(id, name);
}

new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');
