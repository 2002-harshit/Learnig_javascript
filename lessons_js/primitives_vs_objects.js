"use strict;"

let age = 20;
let oldAge = age;
age = 30;
console.log(oldAge);//*this would be 20 simply

const me = {
    myName: "harshit",
    age: 20
}

const another = me;
another.age = 25;
console.log(me.age);//! this also gets updated to 25, pretty strange

/*
* primitives are stroed in the call stack
*everything apart from the primitives that are objects(also called reference types) is stored in the heap memory.


 */



