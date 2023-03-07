"use strict";

console.log(new Array(1, 2, 4, 5));

const a = new Array(7);
//* the above creates a new empty array of length 7, u 7 undefineds.
console.log(a);
console.log(a.map(el => 3)); //* even this does not work
//! there is almost nothing that can be done with this array, except FILL().
// a.fill(1); //* this fills those 7 empty spots with 1, its similar to slice()
//* the fill methods obviously mutates the original array.
a.fill(11, 3, 5);
a.fill(2, 0, 3);
a.fill(-1, 5);
console.log(a);

//*Array.from()---------------------------------------
//! it is worthy noting that we are calling from method on Array constructor which is itself a method!!!!!!!!
const y = Array.from({ length: 7 }, () => 10);
//* the above functions takes an object and a MAPPING FUNCTION, the mapping function is called on every element of this array, the current element is by default accessible.
const z = Array.from({ length: 10 }, cur => -1);
console.log(z);

//todo lets recreate this array [1,2,3,4,5,6]

const nums = Array.from({ length: 6 }, (curr, idx) => idx + 1);
console.log(nums);
//* even more shorter
console.log(Array.from({ length: 3 }, (_, idx) => idx + 1));
//* the _ represents the parameter that is not used, because we know js follows strict one to one correspondence, this is a coding practice.
