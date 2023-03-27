"use strict";

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 20;
  }

  brake() {
    this.speed -= 10;
  }
}

class EV extends Car {
  #charge; //*private
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} with a charge of ${this.#charge}`
    );
    return this;
  }
}
