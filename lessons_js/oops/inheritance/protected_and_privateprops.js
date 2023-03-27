"use strict";

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this._pin = pin;
//     //*this is a convention, if you add _ before a variable, you tell other developers its protected, its actually not protected, its a JOKE!!!
//     this._movements = [];
//     this.locale = navigator.locale;
//     console.log(`Thanks for opening account ${this.owner}`);
//   }

//   deposit(val) {
//     this._movements.push(val);
//   }

//   withdraw(val) {
//     this._movements.push(-val);
//   }

//   //* again a convention
//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan Approved`);
//     }
//   }
// }

// const harshit = new Account("harshit", "INR", 9210);
// harshit.deposit(12);
// console.log(harshit._movements);

//* idea of private and public field/properties is proposed in JS and will soon come.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* now we will study about public,private fields

//* public fields
//* public methods
//* private methods
//* private fields

// ! the fields are outside everything and also do not perform inheritance

class Account {
  locale = navigator.locale;
  //* this property is present on all th objects, it almost same as properties inside the ctr
  #movements = []; //! now this is truly private field requires #
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.locale;
    console.log(`Thanks for opening account ${this.owner}`);
  }

  //* these are all public methods
  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this._movements.push(-val);
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }

  //* private methods
  // #approveLoan(val) {
  //   return true;
  // }
  //* this does not work in browsers yet!!!
}

const harshit = new Account("harshit", "USD", 1111);
// console.log(harshit.#movements);//!error because this is a private field
harshit.requestLoan(20);
