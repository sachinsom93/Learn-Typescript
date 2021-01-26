class storage <T>{
    private data: T[] = []
    addItem(item: T){
        this.data.push(item)
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1)
    }

    getData(): T[]{
        return [...this.data]
    }
}

const stringData = new storage<string>()
stringData.addItem("item1")
stringData.addItem("item2")
// stringData.addItem(3)
console.log(stringData.getData())