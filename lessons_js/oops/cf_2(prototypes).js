"use strict";

//* Lets learn about prototypes now

//* Lets define a ctr function first
const Person = function (p_name, p_age) {
  this.p_name = p_name;
  this.p_age = p_age;
};

const p1 = new Person("harshit", 20);
const p2 = new Person("garv", 18);
console.log(p1);
console.log(p2);

//! now in JS,each and every object has a property called prototype,therefore ctr function also has a prototype, because functions are also objects in js.

console.log(Person.prototype);

Person.prototype.getFormattedUser = function () {
  return `${this.p_name} is ${this.p_age} years old.`;
  //* "this" points to the object that calls the function.
};

console.log(Person.prototype);

//* Person.prototype is an object,so we basically add getFormattedUser property(function) on it, now all the objects which are linked to this prototype, can use it, because it was built using this ctr function.

console.log(p1.getFormattedUser());
console.log(p2.getFormattedUser());

//* why do these 2 objects have access to getFormattedUser() ?, this is because the objects have access to the properties and methods of its prototype
// ! and the prototype of p1 and p2 is Person.prototype

console.log(p1.__proto__);
console.log(p1.__proto__ === Person.prototype); //! this is TRUE!!!!!!!!

//! SO THE FINAL VERDICT IS: since p1 an p2 are created using Person ctr func, therefore their prototype is Person.prototype object, and they can access all the properties of this object, therefore getFormattedUser() is accessible using the prototypal inheritance.

console.log(Person.prototype.isPrototypeOf(p1)); //this is also TRUE.

//! Also you might get confused since, prototype property is set on the Person function, you might think that Person.prototype is the prototype of Person which is WRONG!!!!!!!!!!!!, it is the prototype of the objects which are created using that ctr function(Person), this is due to bad naming of this property.
console.log(Person.prototype.isPrototypeOf(Person)); //* this is FALSE.

//* Now lets set some properties on the prototype which will also be accessible again via the prototypal inheritance.

Person.prototype.species = "Homo Sapiens";
console.log(p1.species);

console.log(p2.species);
//* but it is worthy noting that this property is not their own but is inherited, you cna check this also.
console.log(p1.hasOwnProperty("p_name")); //this is true
console.log(p1.hasOwnProperty("species")); //!this is false.!!!!!!!!!

//* also if i write
p1.species = "janwar";
console.log(p1.species);
console.log(p1.hasOwnProperty("species")); //now true
// * now i set this object's own property "species", so thereby kinda overriding the inherited property.

/**
 *Person {p_name: 'harshit', p_age: 20, species: 'janwar'}
    p_age: 20
    p_name: "harshit"
    species: "janwar"
    [[Prototype]]: Object
	    getFormattedUser: ƒ ()
	    species: "Homo Sapiens"
	    constructor: ƒ (p_name, p_age)
	    [[Prototype]]: Object
 */
