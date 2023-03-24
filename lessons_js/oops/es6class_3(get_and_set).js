"use strict";

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  set fullName(fn) {
    console.log(fn);
    if (fn.includes(" ")) this.fullName = fn;
    else alert("This is not a full name");
  }
}

// const harshit = new Person("harshit khanna", 2002);
/*
 ! The above piece of code, throws an error, lets see why.
 *as we know first an empty object is created.
 * then ctr func is called
 * then "this" is set to that empty object
 ! now when this.fullName=fullName is executed, the setter is invoked because we know getter and setter work like property names and not function,THIS IS DIFFERENT.
 * and if the condition is true, the setter is executed recursively due to "this.fullName=fn"
 * Lets see a remedy to this in the next bit of code.
 */

class PersonCorrect {
  constructor(fullName, birthYear) {
    this.fullName = fullName; //!this is a call to the setter!!!!!!!!!!!!
    this.birthYear = birthYear;
  }

  set fullName(f_name) {
    //* to avoid that recursive call, we prepend the name with "_", so _fullName is now the property name.
    if (f_name.includes(" ")) this._fullName = f_name;
    else alert("Not a full name");
  }
}

// const harshit = new PersonCorrect("harshit", 2002);
const harshit_khanna = new PersonCorrect("harshit khanna", 2002);

//* the main use of getters and setters, is basically for value validation as we did.
