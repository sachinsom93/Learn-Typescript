function logClass(target: any){
    console.log('class decorator')
    console.log(target.prototype)
}

@logClass
class Phone{
    name:string;
    constructor(name: string){
        this.name = name;
    }
}

const mi = new Phone("mi")
const sg = new Phone("samsong")
console.log(mi.name)