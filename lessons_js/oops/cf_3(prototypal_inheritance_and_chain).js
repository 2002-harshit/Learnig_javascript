"use strict";

const Person = function (p_name) {
  this.p_name = p_name;
};

const harshit = new Person("harshit");
console.log(harshit.__proto__);
console.log(harshit.__proto__ === Person.prototype);

console.log(Person.prototype.__proto__ === Object.prototype); //* this is true indicating Object.prototype is the prototype of Person.prototype(which is an object so it must have a prototype.), it is not the prototype of Person() but of Person.prototype.

console.log(harshit.__proto__.__proto__.__proto__);
//* the above is set to null, we are on the top of prototypal chain.

const arr = [1, 2, 3, 4, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //this is true

//! also it is worthy noting that using [, , ,] is like a shorthand for using new Array()
console.log(arr.__proto__.__proto__); //* this will be Object.prototype.
console.log(arr.__proto__.__proto__ === Object.prototype);

//* since all array methods are inherited from Array.prototype lets add some more functionality to it.

Array.prototype.unique = function () {
  return [...new Set(this)];
};
//*unique is my defined function.
console.log([1, 1, 1, 3, 3, 3].unique());
console.log(arr.unique());

//! but this is not a good coding practice.

//* we can also see prototype of a function
console.log(Person.__proto__ === Function.prototype);
