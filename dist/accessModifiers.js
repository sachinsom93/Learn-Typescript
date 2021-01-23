"use strict";
class Human {
    constructor(name) {
        this.hobbies = [];
        this.name = name;
    }
    introduction() {
        console.log(`My name is ${this.name}`);
        console.log("Hobbies :");
        this.hobbies.forEach((hobby) => {
            console.log(hobby);
        });
    }
    addHobby(hobby) {
        this.hobbies.push(hobby);
    }
}
const person1 = new Human("vrinda");
person1.addHobby("study");
person1.introduction();
