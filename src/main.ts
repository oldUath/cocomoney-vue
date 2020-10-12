import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false;
//引入导航栏，全局引入
Vue.component('Nav', Nav);
//引入全局的页面布局
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);


new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');

//手机浏览器自动上滑
window.onload = function (){
    setTimeout(function (){
        window.scroll(0,1000);
    },3000);
};



// if(document.documentElement.clientWidth > 500){
//     window.alert('请使用手机打开本页页面,保证浏览效果');
//     const img = document.createElement('img');
//     img.src  = '/cocomoney.png';
//     img.style.position = 'fixed';
//     img.style.left = '50%';
//     img.style.top = '50%';
//     img.style.transform = 'translate(-50%,-50%)';
//     document.body.appendChild(img);
// }
