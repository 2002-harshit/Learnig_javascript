"use strict";

//*rest pattern and the rest paramters
//* it is the opposite of the spread operator, it collects the multiple elements and packs them.

//* spread becuase on right right side of the assignment operator
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//* now lets look at the rest pattern it involves destructuring too.

const [var1, , ...othersArr] = ['a', 'b', 'c', 'd', 'e'];
//! in the above bit ij basically destrucured an array of characters into a variable var1 which is a const and stores 'a' the second charcater('b') is skipped because that is how destructruring works,and the rest of the elemets that are c,d,e are condensed into an array othersArr.

console.log(othersArr);

//* rest is on the left side of the assignment opeartor.



const restaurant = {
    rest_name: 'Classico Italiano',
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

const [dish1, dish2, ...otherDishes] = [...restaurant.mainMenu, ...restaurant.starterMenu];

//* lhs is teh rest pattern
//*rhs is the spread operation

//* rest in the objects again rest o

const { sat, ...otherDays } = restaurant.openingHours
//* sat is a const variable which contains an object containing open containing open and close of sat, the otherDays is an object that contains open and close of fri and sat

//* another example

const { sat: { open, close }, fri: { ...subahShyam } } = restaurant.openingHours;
//* now we have created two const variables and subahShyam is an object that holds open and close of fri.

//* lets see one more use case we want to implement a funtion which can take any number of arguments

const add = function (...allVars) {
    console.log(allVars);
    //* allVars is an array which contains all the argumnets because it follows the rest paramater.
    let sum = 0;
    allVars.forEach(element => {
        sum += element;
    });

    return sum;
}

console.log(add(1, 2, 3));
console.log(add(-1, 2));

const sumThese = [10, 20, 30];
//* how to pass teh above array to the funciton lets see
console.log(add(sumThese));//! this is wrong becuase then allVars will be a 2d array with only one element that is a 1D array [10.20,30]

console.log(add(...sumThese));//* u spread them again they are compressed in the function atrgument.

//* why not take an array as an input instead, if we use this spread and rest approach, we can have both array as well as non array arguments.


function orderPizza(mainIng, ...otherIng) {
    //* rest paramter should be last becuase how jsis supposed to know when to stop.
    console.log(mainIng);
    console.log(otherIng);
}

orderPizza("base", "sauce");
orderPizza("base", "sauce", "cheese", "capsicum");