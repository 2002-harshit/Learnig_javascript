"use strict";

//* Lets start with the first way of implementing of prototypal inheritance in JS that is using ctr functions.
/*
 * We can use ctr functions to build objects.
 ! IT IS A COMPLETELY NORMAL/REGULAR FUNC WITH THE DIFFERENCE BEING WE CALL IT WITH THE new OPERATOR.
 */

// const Person = function (name, year) {
//   console.log(this);
// };

// new Person("harshit", 2002);
//* WHAT HAPPENS WHEN YOU CALL A FUNCTION WITH "new":
/*
 !1. a new empty object is created
 !2. now the function is called, and in the function the "this" keyword is set to this empty object.
 !3. this newly created object is linked to a prototype, by setting the __proto__ property on the newly created object.
 !4. now the object is automatically returned.
 */
const Person = function (p_name, p_birthYear) {
  //* these are instance properties
  this.p_name = p_name;
  this.p_yob = p_birthYear;
  console.log(this); //* this is the newly created person object, with the set p_name and p_yob properties

  //TODO Lets add some methods also
  //   this.calcAge = function () {
  //     return new Date().getFullYear() - this.p_yob;
  //   };

  //   this.getName = () => {
  //     console.log(this.p_name);
  //   };

  //   ! WE SHOULD NOT DEFINE METHODS INSIDE THE CTR FUNCTIONS BECAUSE THEY ARE AN OVERHEAD, SUPPOSE IF WE WANT 1000 OBJECTS, THEN COPIES OF THESE METHODS WILL BE IN THESE 1000 OBJECTS.

  //! it is also worthy noting that this is required in front of everything whether property or method because we are setting them on that empty object.

  //! it is worthy noting that this object is automatically returned.
};
//! THE ABOVE IS A CTR FUNCTION.

const harshit = new Person("harshit", new Date().getFullYear());
console.log(harshit);
const garv = new Person("garv", 2005);
console.log(garv);

console.log(typeof harshit); //* this is object and not Person
console.log(harshit instanceof Person); //* this is true

console.log(harshit.calcAge());
console.log(garv.calcAge());
console.log(harshit.getName());
