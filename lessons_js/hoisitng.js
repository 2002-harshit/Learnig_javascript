"use strict";


// console.log(myName);//* var is hoisted and set to undefined
// console.log(job);//!this is an error because job is in TDZ
// console.log(age);//!again this is an error becuase it is in TDZ(temporala dead zone)

// //*TDZ is the region of the current scope strating from the beginnig of the scope and ending before the variable declaration, where that let/const cannot be accessed, you get an error "caanot acces <  > befor initialisation"

// var myName = "harshit";
// let job = "student";
// const age = 20




//hoisiting with functions

/*

console.log(decl(2, 3));//* decl is accessible
console.log(expr1(2, 3));//* expr1 is not accessible caanot acces <  > befor initialisation" beacuse fuinction expression are just like vsalues and here it is a const value, and therefore in TDZ.

console.log(expr2(2, 3));//* again not accessible before initialsation

console.log(expr3)
console.log(expr3(2, 3));//* we know that var is hoisted and set to undefined,, but we get an error "expr3 is not a function" which is true because we set it to undefined like var expr3=undefined so its like we are calling undefined();

function decl(a, b) {
    return a + b;
}

const expr1 = function (a, b) {
    return a + b;
}

const expr2 = (a, b) => a + b;

var expr3 = function (a, b) {
    return a + b;
}

*/


//* lets see an example
//TODO we have deleteShoppingCart when the numProducts become 0.

if (!numProducts) deleteShoppingCart();
//* but here the function will be called even though numProducts is not 0 becuase var is hoisted and therefore se to undefined, therefore if condition is executed 

var numProducts = 10;

function deleteShoppingCart() {
    console.log("Aall products deleted")
}

//* onw more differenc ebetween var, let and const
//* var creates a property in the window object while let and const dont

var a = 1;
let b = 2;
const c = 3;

console.log(window.a);//1 because var creates the proprty
console.log(window.b);//undefied becuase property is not possible 
console.log(window.c);//undefined because property is not available