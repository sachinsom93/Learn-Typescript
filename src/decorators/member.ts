function log2(target: any, methodName: string, discriptor: PropertyDescriptor){
    console.log('Member decorator');
    console.log(target);
    console.log(methodName);
    console.log(discriptor);
}
/*
OUTPUT:
    Member decorator
    Phone2 {}
    editName
    {
        value: [Function: editName],
        writable: true,
        enumerable: false,
        configurable: true
}
 */

class Phone2{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    @log2
    editName(this: Phone2, name: string): void{
        this.name = name;
        console.log(`[update] new name: ${this.name}`)
    }
}