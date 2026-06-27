// 1- Method Overriding

class Vehicle {
  public brand: string;
  protected speed: number;
  private engineNumber: string;

  constructor(b: string, s: number, eN: string) {
    this.brand = b;
    this.speed = s;
    this.engineNumber = eN;
  }

  startEngine(): void {
    console.log(`${this.brand} engine has started!`);
  }

  honk(): void {
    console.log("Beep Beep!");
  }
}

class Car extends Vehicle {
  numberOfDoors: number;
  constructor(b: string, s: number, eN: string, nOD: number) {
    super(b, s, eN);
    this.numberOfDoors = nOD;
  }

  showSpeed(): void {
    console.log(`The speed of ${this.brand} is ${this.speed} km/h this time`);
  }

  // METHOD OVERRIDING
  honk(): void {
    console.log("PAAM PAAM!");
  }
}

// So now I creating a object of child claas
const car1 = new Car("BMW", 280, "XYZ12345", 2);
car1.honk();
car1.showSpeed();
car1.startEngine();
