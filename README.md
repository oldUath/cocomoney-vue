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
```javascript
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
```
