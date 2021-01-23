"use strict";
class Insaan {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
const person = new Insaan("sachin");
person.name = "sskjdfkdjf";
person.getName();
