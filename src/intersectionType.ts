type Admin = {
    name: string;
    privilages: string[];
}

type Employees = {
    name: string;
    startDate: Date;
}

type frontendEmp = Admin & Employees;
type frontendEmp2 = Admin | Employees;
const e1: frontendEmp = {
    name: "SOM",
    privilages: ["design"],
    startDate: new Date()
}
const e2: frontendEmp2 = {
    name: "Sachin",
    startDate: new Date()
}

console.log(e1)
console.log(e2)



/*
    & ==> Intersection(common) Operator
    | ==> Union Operator(need to assing variables that are not common)
 */