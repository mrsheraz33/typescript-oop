// 1- Abstract Class

abstract class Vehicle{
    constructor(public brand: string){}

    public honk(): void {
        console.log("Beep Beep!");
    }

    abstract startEngine(): void
}

class Car extends Vehicle{
    startEngine(): void {
        console.log(`${this.brand} car is started with a button!`);
    }
}

class Bike extends Vehicle{
    startEngine(): void {
        console.log(`${this.brand} bike is started with kick/self`);
    }
}

const car = new Car("BMW")
const bike = new Bike("Honda")

car.startEngine()
bike.startEngine()

export {}