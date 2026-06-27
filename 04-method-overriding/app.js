"use strict";
// 1- Method Overriding
class Vehicle {
    brand;
    speed;
    engineNumber;
    constructor(b, s, eN) {
        this.brand = b;
        this.speed = s;
        this.engineNumber = eN;
    }
    startEngine() {
        console.log(`${this.brand} engine has started!`);
    }
    honk() {
        console.log("Beep Beep!");
    }
}
class Car extends Vehicle {
    numberOfDoors;
    constructor(b, s, eN, nOD) {
        super(b, s, eN);
        this.numberOfDoors = nOD;
    }
    showSpeed() {
        console.log(`The speed of ${this.brand} is ${this.speed} km/h this time`);
    }
    // METHOD OVERRIDING
    honk() {
        console.log("PAAM PAAM!");
    }
}
// So now I creating a object of child claas
const car1 = new Car("BMW", 280, "XYZ12345", 2);
car1.honk();
car1.showSpeed();
car1.startEngine();
