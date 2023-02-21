"use strict";

//* Lets see what is optional chaining.
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderFood(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    //* we are returning an array here
  },
};

console.log(restaurant["openingHours"]["mon"]);
//* the above statement will result in undefined because the key(or the property name) does not exist.

//* SUPPPOSE THIS DATA CAME FROM A WEB API AND U DONT KNOW WHETHER MON EXISTS OR NOT

// console.log(restaurant.openingHours.mon.open);
//! now the above statement is an ERROR, because since mon doesnt exist, and i try to access open from mon, which is accessing something from undefined object, THIS IS AN ERROR!!!!!

//* lets tackle this
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
else console.log("not exist");

//* BUT WHAT IF OPENING HOURS DIDNT EXIST , YOU ARE FUCKING LOST!!!!!!!, bvecause now you have to  add more conditions, whta about deepy nested objects.

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
else console.log("not exist");

//* now lets see a an elegant solution "OPTIONAL CHAINING"

//*using option chainining
console.log(restaurant.openingHours.mon?.open);
/*
 *it only checks the property before the ?(that is restaurant.openinghours.mon), if that property exists(i.e not nullish i.e not null or not undefined), then it access the subsequent things, otherwise undefined is returned.
 */

//* similarly if opening hours didnt exist

console.log(restaurant.openingHours?.mon?.open);
//* iska anuvaad hai ki agar restaurant.openingHours exist karta hai toh mon access karo, agar , phir agar mon bhi exist karta hao toh open acess karo warna undefined return kar do(because chaining restaurant.openingHours.mon) pe ruk gayi coz it didnt exist.

//*another example

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  if (restaurant.openingHours[day]) {
    //*If day poperty exists not undefined, because undefined is a falsy value it would be caught.
    console.log(`Restaurant is open on ${day}`);
  }
}

//now using ?.
for (const day of days) {
  console.log(restaurant.openingHours[day]?.open);
}

//*in the above for loop, if day did not exist it threw undefined, lets replace it with a default value.

for (const day of days) {
  //   const open = restaurant.openingHours[day]?.open || "close";
  //* now remember the above line has an issue, the or operator, will consider 0 as false, and will move ahead, but what if a restaurant opens at 0 hr, so we use null coalescing operator

  const open = restaurant.openingHours[day]?.open ?? "close";
  console.log(open);
}

//* the above example is beautiful and remmeber gain nullish values are only null and undefined, and it is a paap(error) to access somethign from/on an undefined object.

//*it works on method too

console.log(restaurant.orderFood?.(1, 0));

console.log(restaurant.orderFood?.(1, 1) ?? "no order food method");
//* if orderFood would not have existed, then udefiend would be result and (undefined ?? "fcedfdfdf") answer will be "dfcdfdfcd".

//* works on array also
const users = [
  {
    uname: "harshit",
    age: 20,
  },
  {
    uname: "garv",
    age: 17,
  },
];
console.log(users[0].uname); //Works
console.log(users[2]); //udnefined
// console.log(users[2].uname);//*error accessing a property from undefined object

console.log(users[2]?.uname ?? "users[2] not exist");

//* ?. and ?? were made to go hand in hand.
