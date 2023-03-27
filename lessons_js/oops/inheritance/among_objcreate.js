"use strict";

const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// const harshit = Object.create(PersonProto);
//* harshit.__proto__ is automatically set to PersonProto
// console.log(harshit.__proto__ === PersonProto); //true ofc

const StudentProto = Object.create(PersonProto);
//*now StudentProto.__proto__ will be set to PersonProto

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
  //* "this" here will be "harshit" obj
};

StudentProto.introduce = function () {
  console.log(`I am ${this.firstName} and I study ${this.course}`);
};

const harshit = Object.create(StudentProto);
//* harshit's proto set to StudentProto
harshit.init("harshit", 2002, "cs"); //*in the function lookup up the prototypal chain, init() was found in StudentProto.
//* init is nothing special.
/**
firstName: 'harshit', birthYear: 2002, course: 'cs'}
    birthYear: 2002
    course: "cs"
    firstName: "harshit"
    [[Prototype]]: Object
        init: ƒ (firstName, birthYear, course)
        [[Prototype]]: Object
        calcAge: ƒ calcAge()
        init: ƒ init(firstName, birthYear)[[Prototype]]: Object
*/
//* notice no constructors in here, because this works completely different as compared to ctr func() and es6y classes.

harshit.introduce();
