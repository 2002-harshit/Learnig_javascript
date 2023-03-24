"use strict";

const Person1 = function (fullName, birthYear) {
  this.fullName = fullName;
  this.birthYear = birthYear;
  //* this is a ctr function
};

//* a static method
Person1.greet = function () {
  console.log(this); //When greet is called by Person1, "this" will actually point to the object/method Person, that is the Ctr.
  console.log("Hey there amigo!");
};

const p1 = new Person1("p1", 2002);

Person1.greet(); //* this is valid
// p1.greet(); //! this will be error, because greet is not the in the __proto__ of p1 that is Person.prototype.

class Person2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //   * since calcAge will be added to Person2.prototype, therefore it will be inherited by all the objects, so it is an INSTANCE METHOD.
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  //* lets create a static method
  static hey() {
    console.log(this); //* here "this" points to entire class.
    console.log("Hey there amigo!!");
  }
}

Person2.hey();
