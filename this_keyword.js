"use strict";
//* let dive deep into this keyword

console.log(this);
//*outside everything this points to the window object

const add = function (a, b) {
    console.log(a + b);
    console.log(this);
    //*it is worthy noting that contrary to the arrow fucntions , normal functions do get their own "this" but they are undefined(strict mode) or otherwise window. 

}

const add_arrow = (a, b) => {
    console.log(a + b);
    console.log(this);
    //* we know that the arrow fucntions do not get their "this" keyword, so it uses the this of its surrounding/parent function/scope that is in our scenario the global scope and in the global scope this is windows, which is the "this" in line 4 that is window object.
}

add(1, 2);
add_arrow(2, 3);

//* this inside a method
const person = {
    myanme: "harshit",
    yob: 2002,

    calcAge: function () {
        this["age"] = 2023 - this["yob"];
        console.log(this);//* "this" is the person object here,because it called the method,
        //!it is worth noting that this points to the object that called the method and not NECESSARILY THE OBJECT IN WHICH THE FUNCTION EXPRESSION IS AVAILABLE.
    }
}

person.calcAge();
console.log(person.age);

const person2 = {
    yob: 2005
}

person2.calcAge = person.calcAge//* since in js functions are just values, so the above statement is valid
person2.calcAge();//*here this points to person2




//* what about this

const func = person.calcAge;
func();
//*now when we call func(), "this" is undefined(strict mode) because now its just a normal function call, so this is an error

