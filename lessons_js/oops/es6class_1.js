"use strict";

//* this is the second method of implementing prototypal inheritance in JavaScript, it is only syntactical sugar over the ctr functions.

//! These are not like other language classes, they work differently, as mentioned above.

//! behind the scenes , classes in JS are just functions!!!.

//* class expression
// const Person2 = class {};

//* this is a class declaration
class Person {
  constructor(p_name, p_age) {
    this.p_name = p_name;
    this.p_age = p_age;
  }

  //! The advantage is getPerson() is automatically added to Person.prototype, you can still add yourself.
  getPerson() {
    console.log(`${this.p_name} is ${this.p_age} years old.`);
  }
}

const harshit = new Person("harshit", 20);
//* again an empty object is created.
//* the ctr is called, and in the constructor call, "this" is set to that empty object,and again __proto__ is also set, and this object is returned.
console.log(harshit);
console.log(harshit.__proto__);
console.log(Person.prototype);
console.log(harshit.__proto__ === Person.prototype);

harshit.getPerson();

Person.prototype.sayHi = function () {
  console.log(`${this.p_name} says hi!!`);
};

harshit.sayHi();
