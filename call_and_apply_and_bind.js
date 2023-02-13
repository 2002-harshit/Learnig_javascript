"use strict";

//* call and apply methods.

const lufthansa = {
  airline: "lufthansa",
  iataCode: "LN",
  bookings: [],

  book(flightNum, passenger_name) {
    console.log(
      `${passenger_name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passenger_name,
    });
  },
};

lufthansa.book(98, "harshit");
lufthansa.book(635, "john smith");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
  //* now we also need the booking function but we wont copy ot from lufthansa object because DRY.
  //* instead we will isolate this function since its nothing but a value.
};

const bookNew = lufthansa.book; //* this is normal like a value copy
// bookNew(23, "khan"); //! this doesnt work. why because now this bookNew is a normal fucntion now and not the object method therefore "this" is set to undefined(in strict mode), so how to fix this problem, HOW TO TELL JS ON WHICH OBJECT("this") TO CALL THIS FUCNTION ON??

bookNew.call(eurowings, 1, "harshit");
/*
 *The first arg is the new "this" basically the object on which u want to call this function.
 *rest are the arguments of the original function.
 *"call" is a method of the bookNew function(object).
 */

bookNew.call(lufthansa, 2, "garv");

//! SO WE ARE EXPLICITLY SETTING THE "THIS" keyword OF THE bookNew function, which earlire has this=undefined,as it was a normal fucntion.

const swiss = {
  airline: "Swiss",
  iataCode: "LX",
  bookings: [],
};

bookNew.call(swiss, 3, "ritu khanna");

//! mind the property names have to be same because the fucntion accesses them inside the body.

//*--------------------------------------------------------------------------------------------------------------
//* APPLY METHOD
//* same as call() but takes the original fucntion args as an array

bookNew.apply(lufthansa, [4, "roshi lal"]);
bookNew.apply(eurowings, [5, "kahjan chand"]);
bookNew.apply(swiss, [6, "pippo"]);

bookNew.call(swiss, ...[7, "pipda"]);

//*---------------------------------------------------------------------------------------------------------------
//! NOW THE MOST IMP BIND METHOD.
console.log("\n");
//! bind is also similar to call but instead of calling the function on the specified "this", it returns a new function in whcih "this" is bounded to the specified object.

const bookEurowings = bookNew.bind(eurowings);
//* now the "this" of bookEurowings is bounded to "eurowings" object.
//* it basically returns a new method that is binded to an object.
bookEurowings(1, "pass1");

const bookLufthansa = bookNew.bind(lufthansa);
const bookSwiss = bookNew.bind(swiss);

//* we can take this a step further and give args as given in call method.

const bookEurowings99 = bookNew.bind(eurowings, 99);
bookEurowings99("pass2");
bookEurowings99("pass3");
//! now 99 is permanently baked into the fucntion as the flightNum, you only pass passenger_name, this is not like a deflault arg, it is permanent.

const bookEurowings99harshit = bookNew.bind(eurowings, 99, "harshit");
bookEurowings99harshit();
bookEurowings99harshit();
bookEurowings99harshit();
bookEurowings99harshit();

//* now both the args are etched on fucntions body.

console.log(" ");
//* LETS SEE A USECASE OF BIND METHOD
//* with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  // console.log(this);
  //* the above "this" is the button and not the lufthansa object, because it is assigned dynamically to the button.
  this.planes++;
  console.log(this.planes);
  //* now in odrer to implement our logic, we need to manualy change the "this" keyword, using bind.
};

// lufthansa.buyPlane(); //*if you call this method normally, it points to the obejct which is expected behaviour, but as the eventhandler,  it points to the html element BECAUSE WE KNOW IN EVENT HANDLER THIS ALWAYS POINTS TO THE HTML ELEMENT, ON WHICH THE EVENT OCCURS.
//! this proves that "this" is assigned DYNAMICALLY.

// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
//! IT IS WORTHY NOTING THAT HERE lufthansa.buyPlane is not sent as an object method, it is sent as a normal fucntion value, remember functions are just values

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//! by bind we basically bind this normal function(as discussed in line 111) to the lufthansa object, so its "this" is fixed to lufthansa, dont think that since lufthansa.buyplane() is an object method so it should point to lufthansa that is true but here it is normally passed as a normal function value.

console.log(" ");

//*--------------------------------------------------------------------------------------------------------------
//*another usecase.

const addTax = (rate, value) => value + rate * 0.01 * value;
console.log(addTax(10, 100));

//* now we will perform somthing called partial implementation where we fix a certain argument and a new function is returned using bind
//! we dont care about this so we will set it to null, this is a standard.

const portugalTax = addTax.bind(null, 23);
//* so now rate is preset and we just pass value
console.log(portugalTax(100));

//* same above bit but different implementation using function returning function.

// function addTax1(value) {
//   return function () {
//     return value + value * 0.01 * 23;
//   };
// }

// console.log(addTax1(100)());

function addTaxAlternate(rate) {
  return function (value) {
    return value + value * 0.01 * rate;
  };
}

console.log(addTaxAlternate(23)(100));
