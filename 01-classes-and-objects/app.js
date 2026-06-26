// 1- Classes Or Objects
class BankAccount {
    holderName;
    balance;
    constructor(name, initialAmount) {
        this.holderName = name;
        this.balance = initialAmount;
    }
    displayBalance() {
        console.log(`${this.holderName} : ${this.balance} PKR`);
    }
}
const myAccount1 = new BankAccount("Sheraz", 20000);
const myAccount2 = new BankAccount("Ali", 50000);
myAccount1.displayBalance();
myAccount2.displayBalance();
// Example
class Car {
    brand;
    color;
    constructor(b, c) {
        this.brand = b;
        this.color = c;
    }
    drive() {
        console.log(`${this.brand} car is running...`);
    }
}
const c1 = new Car("Toyota", "red");
console.log(`Car color is : ${c1.color}`);
c1.drive();
export {};
