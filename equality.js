const age=18;
if(age===18) console.log("Person is 18");

//* === vs == lets see

/*
 *=== this is strict equality becuase 
 !it does not perform type coercion that is checks for data type and value both
 
 *== this is loose equality becuase it does type corecion
*/ 

console.log('18'==18);// this is true; hence aloose comparison
console.log('18'===18); //this is false as ot type coercion is done
//! you should mostly use strict === equality !!!!!!!
//! if you need conversion do it manually


// let user_age=prompt("Enter your age");
// console.log(user_age);
// console.log(typeof user_age);//* its a string

if(Number(prompt("Enter your age"))===18)
//* since its === sp you convert manually string to number
console.log("You are 18 mc!!!!");

//* similary !== and != are available , but always use strict version

