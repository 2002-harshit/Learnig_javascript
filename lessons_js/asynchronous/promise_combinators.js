"use strict";

//*promise.race
/*
 *Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.

* @param values — An iterable of Promises.

* @returns — A new Promise. 

! the first settled(either resolved or rejected) promise wins the race, and that is returned.
 */

//!AWAIT CAN ONLY BE USED INSIDE AN ASYNC FUNCTION.

//! IT IS WORTH REMEMBERING THAT A REJECTED PROMISE IS CAUGHT BY A NORMAL TRY,CATCH BLOCK ALSO!!!

function getJson(url, errorMsg = "Something went wrong") {
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`${errorMsg} ${res.status}`);
      //*this error goes to nearest catch, if it was not present, then it will go out of the function (no return error, its throw error)

      return res.json();
    })
    .catch(err => {
      //   console.log("ya error came here first, but i threw it out of the function ");
      throw err;
    });

  //*remember getJson is actually returning a promise, because "then" returns a promise.
}

// (async function () {
//   try {
//     const res = await Promise.race([
//       getJson(`https://restcountries.com/v3.1/name/egypt`),
//       getJson(`https://restcountries.com/v3.1/name/pakistan`),
//       getJson(`https://restcountries.com/v3.1/name/italy`),
//     ]);

//     //*which ever of this promise gets SETTLED(resolved or rejected) first, it is returned.

//     console.log(res);
//   } catch (err) {
//     console.log(`Error Error ${err}`);
//   }
// })();

//*lets see a beautiful use case, if the suer has very slow internet connection,....

const timeUp = function (seconds) {
  return new Promise((_, reject) => {
    setTimeout(reject, 1000 * seconds, "Bhencho slow internet");
    // setTimeout(reject, 1000 * seconds, new Error("Bhencho slow internet"));
  });
};

//*lets use then first
// Promise.race([
//   timeUp(2),
//   getJson(`https://restcountries.com/v3.1/name/italy`),

//   //*whichever of this promise settles first is returned , if internet speed is slow, timeUp will settle first(reject), and hence second callback will be called, and vice versa
// ]).then(
//   res => console.log(res),
//   err => console.log(err)
// );

//*now lets use await.
// (async function () {
//   try {
//     const res = await Promise.race([
//       timeUp(2),
//       getJson(`https://restcountries.com/v3.1/name/italy`),
//     ]);

//     console.log(res);
//   } catch (err) {
//     console.log(`error error ${err}`);
//   }
// })();

// Promise.allSettled([
//   Promise.resolve("Success 1"),
//   Promise.resolve("Success 2"),
//   Promise.reject("Fail 3"),
//   Promise.resolve("Success 4"),
// ]).then(data => console.log(data));

//* you basically get an array of all the settled promises, so this promise which is returned by Promise.allSettled is always resolved!!!

Promise.any([
  Promise.resolve("Success 1"),
  Promise.resolve("Success 2"),
  Promise.reject("Fail 3"),
  Promise.resolve("Success 4"),
]).then(data => console.log(data));

//*returns the first resolved promise!!!, if all of them reject then rejected promise
