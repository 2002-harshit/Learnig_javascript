"use strict";

//* in js all the numbers are actually floats.
//* some problems related to it
console.log(0.1 + 0.2); //weird
console.log(0.3 === 0.1 + 0.2); //! this results in false.

//isNaN()
console.log(Number.isNaN(23));
console.log(Number.isNaN("20")); //*false
console.log(Number.isNaN("abc" - 0));
//*"23"-0 will return us 23 as a number.
console.log(Number.isNaN(23 / 0)); //!this is not NaN,

console.log(Number.isFinite(23 / 0)); //false
console.log(Number.isFinite("20")); //*false.
console.log(Number.isFinite("23px" - 0));

console.log(Math.random());

const randInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randInt(1, 2));

//rounding integers
console.log(Math.trunc(23.4)); //*trunc just removes the decimal part.
console.log(Math.round(23.5));

//rounding decimals
console.log((2.7343432).toFixed(0));
console.log((2.49999).toFixed(0));
console.log((2.7343432).toFixed(1));
console.log((2.7343432).toFixed(2));
console.log((2.7343432).toFixed(3));
//* tofixed() always returns a string.

//*BIG INT
//! numbers are stored at 60 bits in js, but only 53 are used to represent values, so max value possible is
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
//* but we can easily cross these,and hence new primitive was added, bigInt

console.log(647468784738473284784781479414048n);
//! adding n in the end of a number makes it a bigint
console.log(BigInt(647468784738473284784781479414048));
//! using ctr is a problem because still js needs to store this somewhere for constructing the bigint.
//! therefore "n" is better.

console.log(19393n + 23n);
// console.log(12+722n);//this is an error, u cannot mix both
