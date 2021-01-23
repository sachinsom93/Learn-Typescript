"use strict";
class CollegeDepartment {
    constructor(name) {
        this.Employees = [];
        this.name = name;
    }
    printEmployee() {
        this.Employees.forEach(value => {
            console.log(value);
        });
    }
}
class ECECollegeDepartment extends CollegeDepartment {
    constructor() {
        super("ECE");
    }
    addEmployee(name) {
        this.Employees.push(name);
    }
    get DepartmentName() {
        return this.name;
    }
    set DepartmentName(newName) {
        this.name = newName;
    }
    declareResult() {
        console.log(`you are pass !`);
    }
    printEmployee() {
        console.log("ECE MEMBERS: ");
        this.Employees.forEach(value => {
            console.log(value);
        });
    }
}
const ECEDepartment2 = new ECECollegeDepartment();
ECEDepartment2.addEmployee("Rahul");
ECEDepartment2.addEmployee("Rohan");
ECEDepartment2.printEmployee();
console.info(ECEDepartment2.DepartmentName);
ECEDepartment2.DepartmentName = "Electronics and Communication";
console.log(ECEDepartment2.DepartmentName);
