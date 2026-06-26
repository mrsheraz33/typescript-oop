// nheritance (extends)

class Employee {
  public name: string; // global access
  private salary: number; // access only this class like --> Employee
  protected department: string; // access only child class

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  getEmployeeDetails(): string {
    return `Name: ${this.name}, Dept: ${this.department}, salary: ${this.salary}`;
  }

  private calculateBonus(): number {
    return this.salary * 0.1;
  }

  getBonusAmount(): void {
    const bounse = this.calculateBonus();
    console.log(`${this.name} is bounse amount ${bounse}`);
  }
}

class Manager extends Employee {
  teamSize: number;
  constructor(
    name: string,
    salary: number,
    department: string,
    teamSize: number,
  ) {
    super(name, salary, department);
    this.teamSize = teamSize;
  }

  showManagerInfo(): void {
    console.log(`The Employee name is : ${this.name}`);
    console.log(`The Employee department is : ${this.department}`);
  }
}

// create an object for child class like --> Employee 
const newEmp = new Employee("Usman", 30000, "Computer Science");
console.log(newEmp.name);

newEmp.getEmployeeDetails()
newEmp.getBonusAmount()

// create an object for child class like --> Manager
const emp = new Manager("Sheraz", 15000, "Software Engineering", 10);

Object.entries(emp).forEach(([key, val]) => {
  console.log(`${key} = ${val}`);
});

emp.showManagerInfo();

export {};
