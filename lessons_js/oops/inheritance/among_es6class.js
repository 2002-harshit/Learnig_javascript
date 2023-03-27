"use strict";

//* this is just syntactic sugar over the ctr function s inheritance.

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  } //* this method will be available in Person.prototype

  greet() {
    console.log(`Hey! ${this.fullName}`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set fullName(fn) {
    if (fn.includes(" ")) this._fullName = fn;
    else console.log("Enter full name");
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log("Hey there!");
  }
}

//* extends automatically links prototypes behind the scenes.
class Student extends Person {
  constructor(fullName, birthYear, course) {
    //* now we dont need to call Person.call
    super(fullName, birthYear); //this is the ctr of the Person class
    //! now super() has to be the first statement here because it sets the "this" keyword.
    this.course = course;
  }

  introduce() {
    console.log(`I am ${this._fullName} and I study ${this.course}`);
  }

  //overriding greet
  greet() {
    console.log("aur bachhi");
  }
}

const harshit = new Student("harshit khanna", 2002, "cs");
console.log(harshit);
harshit.introduce();
harshit.calcAge();

//* this is very easy as compared to ctr functions inheritance, where u have ot manually link.

harshit.greet();

console.log(harshit.__proto__ === Student.prototype);
console.log(Student.prototype.__proto__ === Person.prototype);
console.log(Person.prototype.__proto__ === Object.prototype);

//* its basically every ctr function has its corresponding prototypical object.!!!!!!!!!, which either inherits or gets inherited.
