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

export {};
