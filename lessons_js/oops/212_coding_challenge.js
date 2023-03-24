"use strict";

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const c1 = new Car("BMW", 120);
const c2 = new Car("Mercedes", 95);

c1.accelerate();
c1.accelerate();
c1.accelerate();
c1.accelerate();

c2.brake();
c2.brake();
c2.brake();

//* again we already know that the prototype of the these objects is Car.prototype, and the methods are prototypically inherited by these objects.
