// 1- Abstract Class
class Vehicle {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    honk() {
        console.log("Beep Beep!");
    }
}
class Car extends Vehicle {
    startEngine() {
        console.log(`${this.brand} car is started with a button!`);
    }
}
class Bike extends Vehicle {
    startEngine() {
        console.log(`${this.brand} bike is started with kick/self`);
    }
}
const car = new Car("BMW");
const bike = new Bike("Honda");
car.startEngine();
bike.startEngine();
export {};
