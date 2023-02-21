"use strict";

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

    customercount: 0
};

//* we saw this case in the or short cicuiting that
//* if a property didnt exist and we wanted to provide a default value to it using ||.

let custCount = restaurant.customercount || 10;
//* this approch works becuase the first arg is a falsy value but 0 is also a falsy value, and even if the customerCount=0 , custCount will still store 10 which is wrong.

console.log(custCount);//* this is 10
//* solution is nullish coallescing operator.

// custCount = restaurant.customercount ?? 10;
// console.log(custCount);

//*this works because ?? works on the concept of nullish values that are: null and undefined only rest it is same as ||.

custCount = null ?? undefined ?? restaurant.customercount ?? 10;
console.log(custCount);
//since restauarnt.customercount is the first non nulish value, therefore evaluation stops/short circuits and the 0 is printed.
