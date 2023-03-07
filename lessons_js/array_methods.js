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

//*find()--------------------------------------------
//* it is very similar to the filter(), except, it returns the first matching instance expect all the matching instances
const nums = [12, 2, 1, 3, 4, 5, 1];
//* lets find first number greater than 2, that is 12.
console.log(nums.find(val => val > 2)); //12

//* findIndex()--------------------------------------
//* very similar to the find() method but returns the index instead of the object itself.
// * indexOf() also exists but that merely checks for equality like indexOf(2), but findIndex() can take callbacks.

//* some()-------------------------------------------
//* it is very similar tok the includes(), but since includes only checks for equality, some() checks for a condition, again ti takes in a callback, SLOWLY WE ARE GOING ALL IN ON CALLBACKS.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.includes(2));

console.log(movements.some(el => el > 2));
//* in the above statement the callback is called for each of the element, as soon as the element greater than 2 is found, it breaks and returns true.
//* also since it is callback, you can get complex logics too.

//* every()------------------------------------------
//* similar to the some() but now every value must satisfy the condition in the callback function only then true is returned, else false.
const mov = [1, 2, 3, 4, 4];
console.log(mov.every(el => el > 0)); //* this will be true because all the elements will be pos;
mov.push(-1);
console.log(mov.every(el => el > 0)); //* this will be false because now we have one -ve value.

//*flat and flatMap() methods-----------------------
const newArr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(newArr.flat());
//* it as the name suggests , flattens out the array into a 1d array.
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
//! the expected output should eb a single 1d array, but thr actual output is [ [ 1, 2 ], 3, 4, [ 5, 6 ], 7, 8 ], we observe that it only flattened the first level of nesting!!!!!!!!, which is the default value.
//* in order to get the desired result, we have tok go till 2nd level.
console.log(arrDeep.flat(2));

//*sort()---------------------------------------------
//* this mutates the original array!!!!!!!
const names = ["harshit", "adam", "garv"];
console.log(names.sort());
console.log(names);
//! the original array is also mutated(sorted)

//* lets try with number;
console.log(movements);
// console.log(movements.sort());
//! the above result is absolutely wrong, because sort() sorts the array according the the strings!!!!!!!!!!!, that is the ascii characters, instead of numbers.
//* lets fix this, we have to pass a callback function.
// console.log(
//   movements.sort((a, b) => {
// if (a < b) {
//   return -1;
// } else if (a > b) {
//   return 1;
// } else
// { return 0; }
//   })
// );

/*
 *Consider a and b as pairs of values as we iterate over the array.
 * if -ve value is returned,a is put before b.
 * if +ve value is returned, a is put after b.
 * If 0 is returned, position is unchanged.
 */

//* LETS SIMPLIFY THIS EVEN MORE!!!!!!

movements.sort((a, b) => a - b);
//*, if a<b, we have to return -ve value bcozz we have to place a before b, and also notice a-b will be negative, so we can simply return it.
//* same case with +ve too.
console.log(movements);
