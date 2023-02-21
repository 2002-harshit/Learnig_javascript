
//*this is called the function declaration
function getAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = getAge1(2002);
age1;



//* this is called the funciton expression
const getAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = getAge2(2002);
age2;

//! it is worthy noting that function are just values in js!!!!!
//! they are first-class objects in js

//* difference between the two
//* functions declarations can be called before even defining them

console.log(sayHi());
function sayHi() {
    return "hi";
}

//* but this doesnt work with function expressions

console.log(hey());//! error cannot access before initialisation  
const hey = function () {
    return "hey";
}