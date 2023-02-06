"use strict";
//! and and or can have ANY data type and hence any return type. REMEMBER.


console.log(2 || "harshit");//*2 
//* lets see wby did we get 2, vwe know in the or gate, the output is high even if one of the input is high.
//*therefore since expression evaluation happens from left to right, and the very fisrt value(2) is a truthy value, so THE SUBSEQUENT VALUES ARE NOT EVEN CHECKED, and the anser is returned as 2.
console.log("garv" || 0);//* garv because it is truthy

console.log("" || "jonas");//* jonas because "" was falsy, so next value is checked, "jonas" which is true so it is printed.
console.log(true || null);

console.log("" || undefined || 0 || null);
//! now since all of them are false, the last evaluated false value is printed that is null. 

console.log(undefined || 0 || "" || "hello" || 23);
//* again the first truthy value is printed.

//* the above concept is called short circuiting


//* now lets see a practical application of this.
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

    func1: function (...vals) {
        console.log(vals);
    }
};

// const guesNum = restaurant.numOfGuests ? restaurant.numOfGuests : 100;
//* if the numOfGuests does not exist it will be udefined, therefore 100 will be stored, now lets use || for this which is shorter.

const guestNum = restaurant.numOfGuets || 10;
//* if numOfGuests property exists it will be the first truthy value and will get stored, but if it does not exist, then it will be undefined and the next truthy value will be checked which is 10, therfore the code works as intended.

//* short circuiting in and

console.log(0 && "jonas");
//* in and the output is low, even if one of the input is low, since 0 is falsy so the REST OF THE EXPRESION IS NOT EVEN CHECKED, and the answer i printed as 0.

console.log(1 && "harshit");
//* now 1 is a truthy values but what if we get a false value ahead, so "harshit" is checked whihch is truthy, and also last so it is printed 

console.log(0 && null && undefined);
//* 0 is printed because it is falsy so the rest of the expression is not checked.



//* now a practical example.
//* in the restaurant object we dont know whether fun1 exists or not, we know if an obejcts property or nethod is missign  we get undefined.

console.log(restaurant.aa);//this is udnefined because does not exist.


restaurant.func1 && restaurant.func1(2, 3, 4);
//* very good





