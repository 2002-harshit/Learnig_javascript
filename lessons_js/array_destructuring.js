"use strict";



//* lets goo with array destructuring 
//* it is bascially a process of unpacking values from an array or an object to  individual variables.

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

    orderFood: function (starterIndex, mainIndex) {

        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
        //* we are returning an array here

    }
};


//* without destructuring
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//* with destructuring
const [x, y, z] = arr;
console.log(x, y, z);
//* it is worthy noting that original array still remains

//* here since i have only mentioned two variables on the left, therefore automatically frst 2 values are picked
const [first, second] = restaurant["categories"]
console.log(first, second);

//* what if i want 1 and 3 value, here the second value is skipped
let [one, , three] = restaurant["categories"];
console.log(one, three);

//* if u want swap first and third value(this wont change in the original object)
//* without destructuring
// const temp = one;
// one = three;
// three = main;

//* with destructuring
[three, one] = [one, three];
console.log(one, three);

//! then above concept low key helps you top return multiple values from a function lets see how!!!!!!!!

// console.log(typeof restaurant.orderFood(0, 1));

const [starter, main] = restaurant.orderFood(0, 0);
console.log(starter, main);

//* lets look at destructuriing wiith nested arrays
const nested = [[1, 2, 3], 4, [5, 6]];

// const [i, , j] = nested;
//* but after this i and j are two 1d arrays so we destructre again
// console.log(i, j);

const [[i, j, k], , [l, m, n]] = nested;
console.log(i, j, k);



//************************************************************ */

const arra = [8, 9];
//* in the real world u might not know the length of the array, so u might destrucutre ot beyond its length;

let [p, q, r] = arra;
console.log(p, q, r);//! so r becomes undefined, but we can also set a defalut value
[p = 1, q = 1, r = 1] = arra;
console.log(p, q, r);//! now r gets a defualt of 1 which is pretty neat


