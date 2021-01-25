function log4(target: any, name: string){
    console.log('property decorator');
    console.log(target);
    console.log(name)
}

class phone4 {
    @log4
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
}