import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const store = {
    // record store
    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem) => {
        recordListModel.create(record);
    },
    //1.全局变量太多，2.严重依赖window

    //tag store
    tagList: tagListModel.fetch(),
    findTag (id: string){
        return this.tagList.filter(t => t.id === id)[0];
    },
    createTag: (name: string) => {
        const message = tagListModel.create(name);
        if (message === 'duplicated') {
            window.alert('标签名重复');
        } else if (message === 'success') {
            window.alert('添加成功');
        }
    },
    removeTag: (id: string) => {
        return tagListModel.remove(id);
    },
    //(id:string,object:Exclude<Tag, 'id'>) 传入两个参数 id和Tag里除了id的所有东西
    updateTag : (id: string, name: string) => {
        return tagListModel.update(id, name);
    }
};

export default store;