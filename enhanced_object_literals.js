//*introuduced in es6
"use strict";

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

let d = "day";
const openingHours = {
    [weekDays[3] + d]: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    [`${weekDays[5]}${d}`]: {
        open: 0, // Open 24 hours
        close: 24,
    }
};
//*nif we wan to add opening hours to restaurant we simply add it like int he given bit
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // openingHours: openingHours
    //the aboive had to be done pre es6

    //*using es6
    openingHours,//*only the name of object is required and the corresponding property name is automatically created.

    //! we have new way of defining fucntion also nou dont need any property name for it.

    completeMenu() {

        //* this is the new way of definig methods
        return [...this.mainMenu, ...this.starterMenu];
    },

    //! WE CAN FUNKING ALSO COMPUTE PROPERTY NAMES !!!!!!!!!!! SEE IN OPENINGHOURS OBJECT But in [],
    //! [] brackets are important, then theyh can fuking hold anything





};

console.log(restaurant.openingHours);

