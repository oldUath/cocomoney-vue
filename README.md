# cocomoney

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development运行
```
yarn serve
```

## 2020.9.28新增了删除功能和返回功能
 **新建的组件点击事件要传递到标签上面**
```
<button class="button" @click="$emit('click',$event)">
```
