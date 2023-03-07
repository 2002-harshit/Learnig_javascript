"use strict";

//* we will see map first.

const euroToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//* lets convert the movements(euro) to dollar.
// const convertedMovUSD = movements.map(function (movement) {
//   return movement * euroToUsd;
//   //* for every value, this callback function is called by the map(), and the new mapped value is returned which is baked/set into the new array automatically.
//   //return 10;if this statement ran, then 10 would be movement.length times in the new array, because it would be returned every time.
// });

const convertedMovUSD = movements.map(movement => movement * euroToUsd);
//! the above is the arrow function representation of the original map function, we should remember that if you just have one line in your arrow function body, it will be automatically be returned, the return keyword is not required.

//! the original array still remains the same

console.log(convertedMovUSD);

//TODO implementing same using for of loop

const mod = [];
for (const mov of movements) {
  mod.push(mov * euroToUsd);
}
console.log(mod);

//* in the map method also, you get curr, index ans the whole array as in the forEach().

//------------------------------------------------------------------------------------------------------------

//* we will see the filter method now.

const deposits = movements.filter(function (curr) {
  return curr > 0;
  //* in filter method, u return the boolean values.
});
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
//* in the above code, mov<0 will return true only for -ve values, so they would be added in the new array.
console.log(withdrawals);

//-----------------------------------------------------------------------------------------------------------

//* now we will see the reduce method.

console.log(movements);
const balance = movements.reduce(function (acc, currVal, idx, arr) {
  //* the reduce() calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated(acc) result, and is provided as an argument in the next call to the callback function.
  //* the acc is the accumulator.
  //   console.log(acc, idx, currVal);
  acc = acc + currVal;
  return acc;
}, 0);

//*this 0 is the initial value(at the 0th indx of the array) of the accumulator(acc)

console.log(balance);

//todo getting max value using reduce method

const max = movements.reduce(function (maxima, currVal) {
  return currVal > maxima ? currVal : maxima;
}, movements[0]);

console.log(max);

// * it is worthy remembering that the above code works as:
/*
 * initial value of the maxima is movements[0].
 * it is then compared with 0th val, if it is larger it will be returned else maxima will be returned.
 * the returned value is passed to the next callback function call as maxima(very first arg) again.
 */

//* WE GENERALLY CHAIN ALL THESE METHODS TOGETHER SINCE ALL OF THEM RETURN AN ARRAY, SO THEY CAN BE CHAINED.
