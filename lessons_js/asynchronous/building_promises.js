"use strict";

//* LETS BUILD SOME FUCKING PROMISES

// const lotteryPromise = new Promise(function (resolve, reject) {
//   //* this will be your asynchronous code
//   if (Math.random() >= 0.5) {
//     resolve("You win"); //* this indicates promise has been resolved
//   } else {
//     reject("Sorry you lost!"); //* this indicates promise has been rejected.
//   }
// });
//* resolve and reject are passed by promise ctr!!!

//* when the promise ctr is called,it calls the executor function which takes two callbacks resolve and reject, if the promise has to be resolved, it is done by calling resolve function with a value, similarly with reject.

// const lotteryPromise = new Promise((resolve, reject) => {
//   console.log("Lottery draw has started");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("Won!");
//     } else {
//       reject(new Error("Lost"));
//     }
//   }, 2000);
//   console.log("hello"); //*this would be printed before lottery result, because the code here is async
// });
//* this promise will be settled after 2 seconds, no idea whether resolved/fulfilled or rejected.

// lotteryPromise.then(
//   str => console.log(str),
//   err => console.log(err)
// );
//* does not break the chain

//* code equivalent to above bit, but this breaks the chain
// lotteryPromise.then(str => console.log(str)).catch(err => console.log(err));

//todo Lets promisify the setTimeout function to wait for specified amount of settings

// const wait = function (seconds) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, seconds);
//   });
// };
/*
 *It is worthy noting that in above code, there is no need to pass reject because this promise will never be rejected
 * Remember the syntax of setTimeout, the 3rd arg will be arguments to the handler function which is resolve but we are not passing any but we could have passed.
 */

const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000, `I waited for ${seconds} second`);
  });
};

// wait(2).then(str => console.log(str));

//*"then" has to return a promise, either you return it, aur it automatically returns the promise of completion of one of the callback3s

wait(1)
  .then(str => {
    console.log(str);
    return wait(1);
  })
  .then(str => {
    console.log(str);
    return wait(1);
  })
  .then(str => {
    console.log(str);
  });

//* ow, no more callback hell.

//todo creating a fulfilled or rejected promise immediately.

//* this is an immediately resolved promise
Promise.resolve(10).then(val => console.log(val));

//* this is an immediately rejected promise
Promise.reject(10).catch(val => console.error(val));
