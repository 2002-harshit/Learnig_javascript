"use strict";
//* lets see functions with default parameters

const bookings = [];
// function createBooking(flightNum, numPassengers, price) {
//   //* the usual way
//   //*we can veryh beautiflly use the null coalescing operator, we also remeber why not to use the || operator due to 0||1.
//   flightNum = flightNum ?? 1;
//   numPassengers = numPassengers ?? 1;
//   price = price ?? 1;
//   //* the better approach to reduce boiler code is specifying this in declaration itself.

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//     //* this is the enhanced object literal syntax which creates a property with the same name and assigns the value.
//   };

//   console.log(booking);
//   bookings.push(booking);
// }

function createBooking(flightNum, numPassengers = 1, price = 2000) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookings.push(booking);
  console.log(booking);
}

createBooking("abc123");
//* in the above call, since we only passed the flightnum , therefore rest of the properties are udnefined, also notice its not like cpp or java where u need to pass all the args!!!!!!!!!.
createBooking("fff", 12);
createBooking("fff", 12, 1500);

const func = (arg1 = 1000, arg2, arg3 = 20) => {
  console.log(arg1, arg2, arg3);
};

func(1, 2, 50);
//! here you cana have defualt args in any order, because js gives u the abiltity to print undefined when the value is not given which is an error in other programming languages.

//! JS FOLLOWS A STRICT ONE TO ONE MATCHING FOR FUNCTION ARGUMENTS, which lets have the behaviour shown in line 40.

//* they can also have expressions

function totalPrice(numOfItems, basePrice = numOfItems * 10) {
  console.log(numOfItems * basePrice);
}

totalPrice(2);
totalPrice(2, 1);

const func1 = (arg1 = 1000, arg2 = 9, arg3 = 20) => {
  console.log(arg1, arg2, arg3);
};

// func(1, 2, 50);
//* what if you dont want to specify arg2 only
func1(2, undefined, 890); //* arg2 will be 9, this works like nullish coalescing.
