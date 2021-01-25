function compare(name: string){
    return function(target: any, _: string, _2: PropertyDescriptor){
        if(name === target.constructor.name){
            console.log('not allowed !');
        } else {
            target._name = name;
            console.log('done')
            console.log(name)
        }
    }
}


class phone6{
    _name: string;
    constructor(name: string){
        this._name = name;
    }

    @compare("sachin")
    setName(name: string){
        this._name = name;
    }
}

const mi3 = new phone6('sachin')
mi3.setName("sachin")