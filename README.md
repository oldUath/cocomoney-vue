# cocomoney

## Project setup
```
yarn install
```
## 使用 yarn命令

### 运行程序
```
yarn serve
```

## 2020.9.28新增了删除功能和返回功能
 **新建的组件点击事件要传递到标签上面**
```
<button class="button" @click="$emit('click',$event)">
```

### 添加id生成器 
即使是刷新也会获取id的最大值，若没有则从0l开始
```
let id:number = parseInt(window.localStorage.getItem('_idMax') || '0' ) || 0;
```

## 新增全局数据管理(封装)
解决bug,新增标签但是记账首页没有显示的问题
解决方法就是在他们的上一层（main.js）新建一个全局的数据，后面获取数据直接从这获取
删除了model,将store进行了模块化

# Vuex使用方法
Vuex就是全局数据管理
## 使用方法
在src/store/index.ts目录里写
``` typescript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    //写数据
    count:0
  },
  
  mutations: {
    //写方法,只接受一个参数，state不算
    add(state,n:number) {
      state.count+=n
      //方法内调用其他方法   stor.commit('方法名');
      //方法内不能有rturn
    }
  }
})
//调用数据
console.log(store.state.count);
//调用方法要使用commit('方法名',参数[除了state])
store.commit('increment',10)

export default store;
```

在组件中获取数据：在ts中使用get方法获取
```typescript
get count(){
    return store.state.count;
}
```

在组件中使用方法：使用 $store.commit('方法名',参数)
```javascript
<button @click="$store.commit('increment',1)">+1</button>

//在组件中调用方法
this.$store.commit('方法名', 参数);

```

没有办法直接获取到commit的返回值，需要用的set方法获取
  首先在组件里先set
```
set tag(){

}
```
  再在index.ts里的state里声明一个变量
  
  最后再使用 store.state.变量获取
https://class-component.vuejs.org/guide/class-component.html#computed-properties

# ES6的新语法
1.可以在“”里使用[] 括住变量
```javascript
:class="{[classPrefix+'-item']:classPrefix,selected:value === '-'}
```

### 统计页面修改bug

