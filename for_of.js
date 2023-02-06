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
    }

};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const dish of menu) console.log(dish);
//! it is worthy noting that we can use break and continue in this(for of) loop.

//* what to do if we wanted index also

for (const eatable of menu.entries()) {
    //now eatable is a 2 length array of [idx,name]
    console.log(eatable[0], eatable[1]);
    //menu.entries basically returns an array iterator
    //* instead of this old approach lets use destructuring
}

for (const [idx, eatable] of menu.entries()) {
    console.log(`${idx} ${eatable}`);
}


