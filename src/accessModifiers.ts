class Human{
    private name: string;
    private hobbies: string[] = []; // have to initialize
    constructor(name: string){
        this.name = name;
    }
    introduction(this: Human): void{
       console.log(`My name is ${this.name}`);
       console.log("Hobbies :")
       this.hobbies.forEach((hobby) => {
            console.log(hobby)
       })
    }
    addHobby(this: Human,hobby: string): void{
        this.hobbies.push(hobby);
    }
}

const person1 = new Human("vrinda")
person1.addHobby("study")
person1.introduction()
// console.log(person1.hobbies) // should not use this method to get hobbie
                            // by defualt all the members are public