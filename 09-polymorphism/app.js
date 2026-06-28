// POLYMORPHISM
// METHOD OVERRIDING (Runtime Polymorphism)
class Animal {
    name;
    constructor(n) {
        this.name = n;
    }
    makeSound() {
        console.log(`${this.name} of animal`);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name}: Bow Wow! `);
    }
}
class Cat extends Animal {
    makeSound() {
        console.log(`${this.name}: Meow Meow! `);
    }
}
// so naw creating an objects
const myPet = [
    new Dog("Tommy"),
    new Cat("Mano"),
    new Animal("Random Sound"),
];
myPet.forEach((pet) => {
    pet.makeSound();
});
export {};
