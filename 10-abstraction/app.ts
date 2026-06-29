// Abstraction

abstract class CoffeeMachine {
  private boilWater(): void {
    console.log("Water boiling at 100°C...");
  }

  private grindBeans(): void {
    console.log("Grinding premium coffee beans into fine powder...");
  }

  private extractCoffee(): void {
    console.log(
      "Passing hot water through coffee powder with high pressure...",
    );
  }

  makeCoffee(): void {
    console.log("Starting Coffee Preparation");
    this.boilWater();
 
    this.extractCoffee();
  }
}

class PremiumCoffeeMaker extends CoffeeMachine {}

// so now creating an object
const machine = new PremiumCoffeeMaker();
machine.makeCoffee();

export {};
