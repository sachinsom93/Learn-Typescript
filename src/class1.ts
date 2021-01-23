class Department {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    describe(this: Department): number{
        console.log(`Department: ${this.name}`)
        return 1;
    }
}

const d1 = new Department("economy");
console.log(d1.describe())

// this keyword could be tricky
const DepartmentCopy = { name: "Arts",describe: d1.describe }
DepartmentCopy.describe() // output: Department: undefined 
                         // to be save from this problem we 
                         // have to pass "this" keyword to 
                         // every method we are declaring inside class
                         // to get a typescript error
