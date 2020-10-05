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
