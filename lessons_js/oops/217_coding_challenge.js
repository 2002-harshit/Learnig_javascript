"use strict";
class Car {
  constructor(make, speed) {
    // this.make = make;
    // this.speed = speed;
    this.speedUS = speed; //! remember we use th setter here.
    this.make = make;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(sp) {
    this.speed = sp * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
}

console.log(Car.prototype); //* prototype of the objects that will be created from constructor of Car.
const Ford = new Car("US", 120);
console.dir(Ford);
console.log(Ford.speedUS); //* call to the getter
console.log(Car.prototype === Ford.__proto__);
