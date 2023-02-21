"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//* using for of loop
for (const transaction of movements) {
  console.log(
    `${transaction < 0 ? "Debited" : "Credited"} ${Math.abs(transaction)}`
  );
}
//* we remember that if we loop over movements.entries(), we get the key as indices(0,1,..) and the values as the array elements, lets see how to emulate this using forEach().

//*--------------------------------------------------

//* for each loop
//* the argument is a callback function, so forEach is a higher order function.
movements.forEach(function (transaction, index, array) {
  //! the callback function is called by the forEach() for each of the element of the array, and the element is itself passed as the argument to the callback function by the forEach().

  //! in fact forEach() actually passes the (element,index and the original array) also!!!!!!!!!! in the same order.
  console.log(
    `${transaction < 0 ? "Debited" : "Credited"} ${Math.abs(
      transaction
    )} Transaction: ${index} Array: ${array}`
  );
});

//! IN A FOREACH LOOP , YOU CANNOT USE BREAK AND CONTINUE!!!!!!!!

//*forEach for maps-----------------------------------

const currencies = new Map([
  ["USD", "United states dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (val, key, map) {
  console.log(`Map: ${map},Key: ${key} Value: ${val}`);
  //* here also it is the same, the current value, index(key) and the whole map is passed.
});

const set = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(set);

set.forEach(function (val, key, set) {
  console.log(val, key, set);
  //* since its a set, the keys and values are actually same, this was just done to maintain uniformity.
});
