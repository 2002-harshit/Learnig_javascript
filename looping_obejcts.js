"use strict";

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

//* property names are same as keys
//* first lets extyract the keys or property name sof an object.

console.log(Object.keys(restaurant.openingHours));
//* this gives the keys or the property names of the openingHours.
console.log(Object.keys(restaurant));
//* mind you orderFood is also a key orderFood:function()
//* {
//*
//* }

//* how to get property values.
console.log(Object.values(restaurant.openingHours));

//* if you want to get both keys and values which u can iterate, you get them in an array which u can desrtuct
console.log(Object.entries(restaurant.openingHours));

console.log(Object.entries(restaurant));

for (const x of Object.entries(restaurant.openingHours)) {
  console.log(x);
}

for (const [k, { open, close }] of Object.entries(restaurant.openingHours)) {
  console.log(k, open, close);
  //! a mixture of array and object destructuring
}

for (const [k, { open: o, close: c }] of Object.entries(
  restaurant.openingHours
)) {
  console.log(k, o, c);
  //! a mixture of array and object destructuring with my defined variables o and c.
}
