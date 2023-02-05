"use strict";
//* spread operator
//* it is used to expand an array(or any iterables(an object is not a iterable but strings,maps,sets are iterables)), unpacking all the elemnts

//! but since es2018, ... also works on obejcts though they are not iterables.

const arr = [7, 8, 9];
//* lets assume i want to add few elements in the beginning, we wont do multiple unshifts or a arr1=[1,2,arr[0],arr[1],arr[2]], this is a lot of hassle so instead we use spread operator(...) to expand or unpack this array
//* we could have also done a chutiyapa like 
const [seven, eight, nine] = arr;//we destructure
//! again remember this is not some array one to one copying(it may be under the hood), it is simply creating new VARIABLES.
const badArr = [1, 2, 3, seven, eight, nine];
console.log(badArr);
//* but agian this is very hassle





const arr1 = [1, 2, 3, ...arr];
console.log(arr1);//[1,2,3,7,8,9]

console.log(...arr1);//* it logs the element individually.

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

//* if we want to add a new food item in mainMenu

restaurant.indianFusionMenu = ["bhindi", ...restaurant.mainMenu];
console.log(restaurant.indianFusionMenu);
//* i basically created a new object property above using another predefined property.

//* so spreading is bascically destructuring but without making new variables

//* it can be used to shallow copy an array

//* for joining two arrays.

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = "harshit";
const newArr = ['p', 's', ...str, 1];//*agains str is broken into individual characters.
console.log(newArr);

//* use case in function

let func1 = function (val1, val2) {
    console.log(Number(val1) + Number(val2));
}
const val = [prompt("val 1"), prompt("val 2")];
// func1(val[0], val[1]);//* little longer approach

//* using ...

func1(...val);
//* ...val is equivalent to val1,val2

/* ************************************************/

//* spread on objects(works from es2018)

const newRestaurant = { founder: "harshit khanna", ...restaurant, since: 1992 };

//* shallow copy objects
const newrest = { ...newRestaurant }
