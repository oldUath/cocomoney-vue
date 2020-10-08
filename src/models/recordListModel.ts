const localStorageKeyName = 'recordList';
const recordListModel = {
    //强制的类型断言，使data是一个RecordItem类型的数组
   data:[] as RecordItem[] ,
    clone(data: RecordItem[] | RecordItem){
        return JSON.parse(JSON.stringify(data));
    },
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[] ;
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName,
            JSON.stringify(this.data));
    }

};
export default recordListModel;