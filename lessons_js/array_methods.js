"use strict";

const arr = ["a", "b", "c", "d", "e"];

//* slice method-------------------------------------
console.log(arr.slice(0, 3)); //* these methods do not mutate the original array.
console.log(arr.slice(-1)); //* its the same as the string.

//* splice method-------------------------------------
//! it is similar to the slice method but it CHANGES/MUTATES THE ORIGINAL ARRAY, it deletes the array elements that it returns.
// console.log(arr.splice(2)); //* this returns [c,d,e] which are removed from the array
//* it is basically used to delete multiple elements from the array.
//* splice(start,number of elements to delete)
// console.log(arr);
//* lets delete last element.
// console.log(arr.splice(-1)); //last element is deleted
// console.log(arr);
//* lets delete 2 elements starting from he second element.
// arr.splice(1, 2); //*[b,c] will be deleted
console.log(arr); //* a,d,e

//* reverse------------------------------------------
// ! changes the original array
const arr1 = [1, 2, 3, 4];
arr1.reverse();
console.log(arr1);

//* concat-------------------------------------------
//* no mutation
console.log(arr1.concat(arr));

//* join----------------------------------------
console.log([...arr, ...arr1].join(""));

//* at()-------------------------------------
//* same as the bracket notation for accessing the array elements;
console.log(arr.at(1)); //* b
//* so what's the advantage
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); //! easiest in this scenario!!!!
//* you harness the power of negative indices.
//* also works on strings
