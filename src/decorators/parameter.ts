function log5(target: any, name: string | symbol, parameterIndex: number){
    console.log(target)
    console.log(name)
    console.log(parameterIndex)
}

class phone5{
    private _name: string;
    constructor(@log5 n: string){
        this._name = n;
    }
    setName(name: string){
        this._name = name;
    }
}