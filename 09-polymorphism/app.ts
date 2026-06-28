// POLYMORPHISM
// METHOD OVERRIDING (Runtime Polymorphism)

class Animal {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  makeSound(): void {
    console.log(`${this.name} of animal`);
  }
}

class Dog extends Animal {
  public makeSound(): void {
    console.log(`${this.name}: Bow Wow! `);
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name}: Meow Meow! `);
  }
}

// so naw creating an objects

const myPet: Animal[] = [
  new Dog("Tommy"),
  new Cat("Mano"),
  new Animal("Random Sound"),
];

myPet.forEach((pet) => {
  pet.makeSound();
});

// METHOD OVERLOADING (Compile-time)

class Logger {
  log(message: string): void;
  log(num: number): void;

  public log(val: any): void {
    if (typeof val === "string") {
      console.log(`${val}`);
    } else if (typeof val === "number") {
      console.log(`${val}`);
    }
  }
}

// creating an object
const logger = new Logger();
logger.log("Hello, Everyone!");
logger.log(2223);

export {};
