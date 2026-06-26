// nheritance (extends)
class Employee {
    name; // global access
    salary; // access only this class like --> Employee
    department; // access only child class
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    getEmployeeDetails() {
        return `Name: ${this.name}, Dept: ${this.department}, salary: ${this.salary}`;
    }
    calculateBonus() {
        return this.salary * 0.1;
    }
    getBonusAmount() {
        const bounse = this.calculateBonus();
        console.log(`${this.name} is bounse amount ${bounse}`);
    }
}
class Manager extends Employee {
    teamSize;
    constructor(name, salary, department, teamSize) {
        super(name, salary, department);
        this.teamSize = teamSize;
    }
    showManagerInfo() {
        console.log(`The Employee name is : ${this.name}`);
        console.log(`The Employee department is : ${this.department}`);
    }
}
// create an object for child class like --> Employee 
const newEmp = new Employee("Usman", 30000, "Computer Science");
console.log(newEmp.name);
newEmp.getEmployeeDetails();
newEmp.getBonusAmount();
// create an object for child class like --> Manager
const emp = new Manager("Sheraz", 15000, "Software Engineering", 10);
Object.entries(emp).forEach(([key, val]) => {
    console.log(`${key} = ${val}`);
});
emp.showManagerInfo();
export {};
