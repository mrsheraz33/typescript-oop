// Abstraction
class CoffeeMachine {
    boilWater() {
        console.log("Water boiling at 100°C...");
    }
    grindBeans() {
        console.log("Grinding premium coffee beans into fine powder...");
    }
    extractCoffee() {
        console.log("Passing hot water through coffee powder with high pressure...");
    }
    makeCoffee() {
        console.log("Starting Coffee Preparation");
        this.boilWater();
        this.grindBeans();
        this.extractCoffee();
    }
}
class PremiumCoffeeMaker extends CoffeeMachine {
}
// so now creating an object
const machine = new PremiumCoffeeMaker();
machine.makeCoffee();
export {};
