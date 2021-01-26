"use strict";
class storage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getData() {
        return [...this.data];
    }
}
const stringData = new storage();
stringData.addItem("item1");
stringData.addItem("item2");
console.log(stringData.getData());
