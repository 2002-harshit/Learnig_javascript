//*a special form of function expression

const getAge = birthYear => 2023 - birthYear
//! it is worthy noticing that return happens implicitly in case of one liner fucntions
console.log(getAge(2002))

//* lets see with multiple parameters and more code

const yearsLeft = (username, birthYear) => {

    return `${username} will retire in ${65 - (2023 - birthYear)}  years`;
}

console.log(yearsLeft("harshit", 2002))

//! something for future these arrow functions do not get "this" keyword we will see what is that