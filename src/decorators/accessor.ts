function log3(target: any, methodName: string, discriptor: PropertyDescriptor)
{
    console.log('Accessor decorator');
    console.log(target);
    console.log(methodName);
    console.log(discriptor);
}

class phone3{
    private _name: string;
    constructor(n: string){
        this._name = n;
    }

    get name(): string{
        return this._name;
    }

    @log3
    set name(name: string){
        this._name = name;
    }
}

