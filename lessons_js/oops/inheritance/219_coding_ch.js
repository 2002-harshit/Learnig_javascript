"use strict";

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 20;
};
Car.prototype.brake = function () {
  this.speed -= 10;
};

//* Car.prototype.constructor will also be there pointing to Car

// const c1 = new Car("india", 120);
// console.log(c1.__proto__ === Car.prototype);
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// *EV.prototype.constructor is there which points to EV, and __proto__ is set to Object because its an  Object(functions are obj in JS).

// * now understand we have two objects ready EV.prototype and Car.prototype, now we just have to set Car.prototype as prototype of EV.prototype.
EV.prototype = Object.create(Car.prototype);
//* but this changes the EV.prototype.constructor to Car.prototype, which is obvious because we made it from Car.prototype, but logically wrong.
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.speed} with a charge of ${this.charge}`
  );
};

EV.prototype.tell = function () {
  console.log(
    `Make: ${this.make}\nSpeed: ${this.speed}\nCharge: ${this.charge}`
  );
};

const tesla = new EV("Tesla", 100, 56);
// console.dir(tesla);
//* lets test somethings first
console.log(tesla.__proto__ === EV.prototype); //true
console.log(EV.prototype.__proto__ === Car.prototype); //true
console.log(Car.prototype.__proto__ === Object.prototype); //*true; because it is an object so it was built from Object ctr() and hence prototype is Object.prototype
console.log(Object.prototype.__proto__ === null); //true
//! WHOLE FUCKING PROTOTYPICAL CHAIN

tesla.tell();
tesla.accelerate();
//* the accelerate function from Car gets overridden
tesla.brake();
tesla.tell();
