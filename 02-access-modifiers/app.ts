// Access Modifiers: public, private, protected

class SecureATM {
      holdName: string;
      private atmPin: number;
      protected accountType: string;

      constructor(name: string, pin: number, accType: string){
          this.holdName = name
          this.atmPin = pin
          this.accountType = accType
      }

    changePin(oldPin: number, newPin: number): void{
        if(this.atmPin === oldPin){
          this.atmPin = newPin
          console.log(`PIN change successfully`)
        } else{
          console.log("PIN not change, please try again!")
        }
      }
} 

const  myCard = new SecureATM("Sheraz", 1234, "Saving")
myCard.changePin(1234,4625)

export {}