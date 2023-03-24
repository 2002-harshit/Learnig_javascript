"use strict";
//* getters and setter

const account = {
  owner: "Jonas",
  movements: [100, -100, 200, 300],

  get latestMov() {
    return this.movements.at(-1);
  },

  //* you prepend this function with the get keyword, to make this a getter.

  set latestMov(mov) {
    this.movements.push(mov);
  },

  //* it is not mandatory to define both of them, one of them works
  //! it takes only 1 parameter!!!!!!!!.
};

console.log(account.latestMov);
//* now you don't call it as a function, but as a property.
// account.latestMov(2); this is wrong, because its again remember a property now.

account.latestMov = -5; //* this is like a call to setter function.
console.log(account.latestMov);
console.log(account.movements);

//*LETS TRY THESE WITH ES6 CLASSES NOW!!!!!1

// class Person {
//   constructor(p_name, p_age) {
//     this.p_name = p_name;
//     this.p_age = p_age;
//   }

//   getUserString() {
//     console.log(`${this.p_name} is ${this.p_age} years old.`);
//   }

//   //* now lets define a setter and getter

//   get age() {
//     return this.p_age;
//   }
// }

// const p1 = new Person("harshit", 20);
// console.log(p1.age);
// console.log(p1.__proto__);

class Person {}
