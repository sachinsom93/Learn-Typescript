abstract class CollegeDepartment{
    protected name: string;
    protected Employees: string[] = [];
    constructor(name: string){
        this.name = name;
    }

    abstract addEmployee(this: CollegeDepartment,employeeName: string): void;

    printEmployee(this: CollegeDepartment): void{
        this.Employees.forEach(value=> {
            console.log(value)
        })
    }
}

class ECECollegeDepartment extends CollegeDepartment{
    constructor(){
        super("ECE")
    }

    addEmployee(this:ECECollegeDepartment, name: string){
        this.Employees.push(name);
    }

    get DepartmentName(): string{
        return this.name;
    }

    set DepartmentName(newName: string){
        this.name = newName
    }

    declareResult(this:ECECollegeDepartment){
        console.log(`you are pass !`)
    }

    printEmployee(this:ECECollegeDepartment): void{
        console.log("ECE MEMBERS: ")
        this.Employees.forEach(value => {
            console.log(value)
        })
        
    }
}


const ECEDepartment2 = new ECECollegeDepartment()


/* For parent referece */
ECEDepartment2.addEmployee("Rahul")
ECEDepartment2.addEmployee("Rohan")
ECEDepartment2.printEmployee()
console.info(ECEDepartment2.DepartmentName)
ECEDepartment2.DepartmentName = "Electronics and Communication"
console.log(ECEDepartment2.DepartmentName)