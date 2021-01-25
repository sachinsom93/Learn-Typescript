function editConstructor(){
    return function <T extends {new (...args: any[]): {_name: string}}> (originalConstructor: T){
        return class extends originalConstructor{
            constructor(...args: any[]){
                super()
                console.log('inside new constructor...')
            }
        }
    }
}

// new (name: string) => phone7

@editConstructor()
class phone7{
    _name: string;
    constructor(name: string){
        this._name = name;
    }
}

const mi7 = new phone7("mi")
