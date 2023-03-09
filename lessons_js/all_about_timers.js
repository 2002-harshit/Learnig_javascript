"use strict";
//* lets study holy grail timers, setTimeout and setInterval.

//* setTimeout

// setTimeout(() => console.log(" here is your pizza"), 3000);

//* the callback function will be called by the setTimeout() once the timeout happens, that is "jab ghanti bajegi".
//* its like scheduling a function call.
//! this does not block the code in the middle, that is the subsequent lines wont have to wait for 3 seconds, for that function to complete, seTimeout()schedules it and the code moves further.

// const arg1 = Number(prompt("a"));
// const arg2 = Number(prompt("b"));

// setTimeout(
//   (val1, val2) => {
//     console.log(val1 + val2);
//   },
//   3000,
//   arg1,
//   arg2
// );

//* we can cancel the timeout before also.

// const ingredients = ["aaloo", "karela"];
// const timer = setTimeout(
//   (ing1, ing2) => {
//     console.log(`The dish of ${ing1} and ${ing2} is mage`);
//   },
//   3000,
//   ...ingredients
// );

// if (ingredients.includes("karela")) clearTimeout(timer);
// else console.log("clock is still ticking");

// console.log("....waiting(i don't wait for setTimeout)");

/*
 *Lets understand the flow of the above code
 * ingredients array gets defined
 * the setTimeout() schedules the execution of the callback function after 3 seconds
 * the control moves further
 * since "karela" is in the array, the timeOut is cancelled.
 * If it was not there then, "clock is still ticking is printed"
 ! we also did not call the setTimeout() or the timer, it is called itself.
 */

//* setInterval(),
//! now the callBack function is executed after each interval

// setInterval(function () {
//   console.log(new Date().toISOString());
// }, 3000);

//* here the setInterval calls the calls the callback function infinitely after every 1 second.
//! the first time the callback function is called is not immediately but after the interval that is 1 second.!!!!!!!!!!!!!!!!!!
//* this also takes arguments.
//! also this is called automatically.
