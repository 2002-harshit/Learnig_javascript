const myname="harshit";
const job="student";
const birthYear=2002;
const currYear=2023;

const answer="I'm "+myname+ ",a "+ (currYear-birthYear) +" year old man who is a "+job;
answer;

//! it can be seen that above thing is hasslesome
//! so there comes template literal

const answer_alternate= `I' am ${myname}, a ${currYear-birthYear} old man, who is a ${job}`;

console.log(`thi,s i"s any regular string`);
//! the above allows using ' and "" in string also

//* a multiline string

console.log("Hello\nI am harshit");
console.log("hello\n"+"I am harshit")

//* with template literals
console.log(`hello
I am harshit`)