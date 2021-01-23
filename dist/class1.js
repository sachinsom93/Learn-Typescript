"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log(`Department: ${this.name}`);
        return 1;
    }
}
const d1 = new Department("economy");
console.log(d1.describe());
const DepartmentCopy = { name: "Arts", describe: d1.describe };
DepartmentCopy.describe();
