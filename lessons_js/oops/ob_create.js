"use strict";

//* another different way of implementing prototypal inheritance, very different from ctr fun and classes.

// const PersonProto = {
//   calcAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   },
// };

//* this PersonProto here will behave as the prototype of the Person objects that will be made form it.

// const harshit = Object.create(PersonProto);
//* we create harshit object whose prototype is PersonProto, so harshit.__proto__ will be set to PersonProto object, so calcAge will be prototypically inherited.

//*here you can manually link objects.
// console.log(harshit.__proto__);
// harshit.fullName = "harshit";
// harshit.birthYear = 2002;
// harshit.calcAge(); //* this was inherited from PersonProto

//* NOW lets create properties on objects programmatically.

const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const harshit = Object.create(PersonProto);
//* right now, harshit is an empty object.

//* here init() is just a regular function, which was prototypically inherited.
harshit.init("harshit", 2002);
