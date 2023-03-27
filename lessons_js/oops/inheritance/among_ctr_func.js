"use strict";

//* now we will deep dive into inheritance using ctr functions.

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
}; //* this function will be inherited since it is in the prototype.

//* now we will make another class student which inherits from person

const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  //* the above two lines are redundant lets replace them
  //   Person(firstName, birthYear); //* remember ctr functions are nothing but normal functions, so the above statement will throw an error due to "this" , since it will be undefined.

  Person.call(this, firstName, birthYear);
  this.course = course;
};

//! This is the STAR of this code, that is setting th link between 2 prototypal objects, we set Person.prototype as the prototype of Student.prototype, so that it can access all the properties of Person.prototype and hence harshit can access everything.
Student.prototype = Object.create(Person.prototype);
//* the above bit sets the Student.prototype.__proto=Person.prototype.
//! remember this returns an empty object, so it has to before adding introduce method.

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const harshit = new Student("harshit", 2002, "cs");
// console.dir(harshit);
harshit.introduce();
harshit.calcAge(); //* now we have access to this also.

/*
 *In the above code, when we use new Person(), we already know that an empty obj is created and the ctr function's "this" is set to that object and the __proto__ is also set
 * Now in the Student ctr(), we call the Person() function as a normal function but with the newly created empty object.
 * Then we create a link between Person and Student.
 */

/*
 Student {firstName: 'harshit', birthYear: 2002,course: 'cs'}
    birthYear: 2002
    course: "cs"
    firstName: "harshit"
    [[Prototype]]: Person//this should not be person
        introduce: ƒ ()
        [[Prototype]]: Object
        calcAge: ƒ ()
        constructor: ƒ (firstName, birthYear)
        [[Prototype]]: Object
*/

//* first we should always remember, that [[prototype]] is actually __proto__.
//* in the above output, everything is correct, except the Student.prototype.constructor is wrongly set as Person, due to Object.create(), which is actually correct acc to the work of Object.create();

console.log(Student.prototype.constructor); //* wrong points to Person ctr;, it should point to student ctr()
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);
console.dir(harshit.__proto__);

console.log(harshit instanceof Student);
console.log(harshit instanceof Person);
console.log(harshit instanceof Object);
//* all are true.
