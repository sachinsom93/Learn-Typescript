interface person{
    readonly name: String;
    getName(): void;
}

class Insaan implements person{
    name: string;
    constructor(name: string){
        this.name = name;
    }

    getName(){
        console.log(this.name)
    }
}

const person = new Insaan("sachin")
person.name = "sskjdfkdjf"
person.getName()