// Encapsulation

class SecureAccount {
  private _balance: number = 0;

  constructor(initialBalabce: number) {
    if (initialBalabce > 0) {
      this._balance = initialBalabce;
    }
  }

  getBalance(): number {
    return this._balance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
      console.log(`${amount} deposit successfully!`);
    } else {
      console.log(`Your amount is ${amount}`);
    }
  }

}

// So now creating an object of SecureAccount class
const myAcc = new SecureAccount(1000)
console.log(myAcc.getBalance());

// so deposite amount let's check
myAcc.deposit(2000)
console.log(myAcc.getBalance())

export {}