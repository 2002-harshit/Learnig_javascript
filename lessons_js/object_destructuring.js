"use strict";

//! object destructuring is not necessarily destructuring an object but its more like destructring using an object on lhs.

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
    },

    orderFood: function (starterIndex, mainIndex) {

        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
        //* we are returning an array(which is a object) here

    }
};

const { rest_name, categories, starterMenu } = restaurant;
//! is is worthy noting that the variable names have to be same as object properties name.
// console.log(rest_name, categories, starterMenu);

//* what if you want to have different variable names

const { rest_name: var1, location: var2 } = restaurant;
console.log(var1, var2);
//* var1 and  var2 are the names that are given by me.

//! what if try to access a property that is not present we know it says undefined but lets define some defdault values

// const { menu = [], starterMenu } = restaurant;
//* since menu is not a property therefore it sshooud give undefined but wwe have assignmed a default value to handle that
// console.log(menu, starterMenu);


//* another example
const { menu: rest_menu = [], starterMenu: starters = [] } = restaurant;
//* rest_menu and straters are te variable names that re defined by me
console.log(rest_menu, starters);//* since menu does not exist, so it will be [], and starterMenu exists so it will get the value from restaurant object.


//* lets see hpw to mutate variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// { a, b }=obj;//! this is a syntax error, because when u start a line with { } js expect a code block;

//* lets see the solution then

({ a, b } = obj);
// console.log(a, b);


//*lets see nested objects now
const { fri: { open, close } } = restaurant.openingHours
// console.log(fri);//* fri is not defined because open and close are my destructured variables
console.log(open, close);
//! it is worth noting that open and close are just 2 const variables which we have obtained from destructuring an object

// const { openingHours: { thu: { open, close } } } = restaurant;
//! the above statement is an error because open and close variables which i defined in line 72 were const, so lets use our names.

const { openingHours: { sat: { open: op, close: cl } } } = restaurant;
//* now i have given them my names op and cl
//* lets give defalut values also

const { openingHours: { thu: { open: o = 100, close: c = 200 } = [] } } = restaurant
console.log(o, c);
/*
*Lets understand the just above bit.
* we were sure that openingHours was defined thereforw we did not assign it a default value.
*But since thu's existence was dicey which would happen in general scenarios where u get unstructured json files, u need to give defualt values.
*so i gave , then finally open and close very given nams by me as o and c, and default values as 100 and 200
!again it is worthy noting that we destructured restautrant in 2 variables o and c, these are just 2 very normal consgt variables not an object or anything, as simple as that.

TODO Better version of the above is, where opening hours is also given default

*/

const { openingHours: { thu: { open: pehla = 90, close: doosra = 91 } = [] } = [] } = restaurant;
console.log(pehla, doosra);



/* ************************************************ */
//*LETS SEE A PRACTICAL APPLICATION OF THIS 

/*
 * we sometimes may forget the order of paramters for a function,
*therefore a general practice is passng an object and destructuring it as soon as function gets it let see
 */


let func1 = function ({ myName: mname = "", myAge: age = 0 }) {

    //* i used my given names but only myAge and myName were also correct
    //* i gave default values also, if a property is missing it should not show undefined. 
    //* we destructured them in two variables

    console.log(age, mname);
}

func1({ myAge: 20, myName: "harshit" });
//! now we no longer need to remember the order of args
func1({});//* 0 ''
func1({ myAge: 10 });//* 10 ''
func1({ myName: "peeya" })//* 0 'peeya'
//! so this is very useful in functions with a lot of params