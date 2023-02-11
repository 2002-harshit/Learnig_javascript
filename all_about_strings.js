"use strict";

const airline = "TAP Air Portugal";
const plane = "A320neo";

console.log(plane[0]);
console.log(plane[1]);
console.log("harshit"[2]); //*wtf

console.log(airline.length);
console.log("harshit".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
//* the above returns the last index of a character or a string
//* u can also search for entire words
//* it is obvio case sensitive
console.log(airline.indexOf("Air"));
console.log(airline.lastIndexOf("Air"));

//*----------------------------------------------------------------------------------------------------------

//* slice(string slicing)
console.log(airline.slice(5, 8)); //* extracts chars from 5 to(8-1), if second arg not specified, then complete str
console.log(airline.slice(5));

//* lets extract the first word
console.log(airline.slice(0, airline.indexOf(" ")));
//* last word
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

//* you can have negative args too.
//* 0  1  2  3  4  5  6
//* h  a  r  s  h  i  t
//*-7 -6 -5 -4 -3 -2 -1
//! remember the above
console.log(airline.slice(-2)); //*this gives last 2 characters because the start param is -2, so start from -2 and since no end param is mentioned, so go till the end.
console.log(airline.slice(1, -1)); //* start from 1 to (1 lesser than -1 = -2) so from 1 to -2

const checkMiddleSeat = function (seat) {
  if (seat.slice(-1) === "B" || seat.slice(-1) === "E") return "yes";
  else return "no";
};
console.log(checkMiddleSeat("11A"));
console.log(checkMiddleSeat("12B"));
console.log(checkMiddleSeat("13C"));
console.log(checkMiddleSeat("14D"));
console.log(checkMiddleSeat("15E"));
console.log(checkMiddleSeat("16F"));

//! remember string is a primitive in js, but it still has methods, this is because js under the hood makes a string object out of it, this is called boxing.
console.log(new String("garv"));
//* when the operation is done the string is converted back into a primitive and is returned by genrally all the string methods

//*----------------------------------------------------------------------------------------------------------

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log("harshit".toUpperCase());

//*fixing capetilisation.
let passenger = "jOnAs";
passenger = passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(passenger);

//*comparing emails
const email = "harshit@khanna.com";
const enteredEmail = "   HaRshIT@khanNA.cOm    \n";
const correctEmail = enteredEmail.toLowerCase().trim();
//* the above chaining is possible because these methods return the new string, trim trimes the starta nd end spaces, trimStart and trimEnd also available.
console.log(correctEmail);

//*-----------------------------------------------------------------------------------------------------------
//* replace (quite imp)
const priceEurope = "123,345£";
const priceUSA = priceEurope.replace(",", ".").replace("£", "$");
console.log(priceUSA);
//* we can replace words too
const announcement =
  "all passengers come to boarding door 23, boarding door 23!";
console.log(announcement.replace("door", "gate"));
//! replace by default just replaces the first occurence, so we will use REGEX
console.log(announcement.replace(/door/g, "gate"));
//* g for global , means all occurences.

//*-----------------------------------------------------------------------------------------------------------
//* boolean returning fucntions.
console.log(plane.includes("0", 5));
//* the second arg is from which position to start searching, by deflaut 0 to search whole string.
console.log(plane.includes("A32"));
console.log(plane.startsWith("A3"));
console.log(plane.startsWith("A2"));
console.log(plane.endsWith("eo"));
console.log(plane.endsWith("neo"));
console.log(plane.endsWith("eeo"));

//*----------------------------------------------------------------------------------------------------------
//* very important method split
console.log("a+very+nice+sting".split("+")); //* this returns an array
const [first, last] = "harshit khanna".split(" ");
//* destructuring is amazing
console.log(first);
console.log(last);

//* opposite of split that is join
console.log(["Mr.", first, last.toUpperCase()].join(" "));

//* now lets capitalise eack word
const capitalizeName = function (str) {
  let ans = [];
  for (const word of str.split(" ")) {
    // ans.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    //* alternate
    ans.push(
      word
        .replace(word[0], word[0].toUpperCase())
        .replace(word.slice(1), word.slice(1).toLowerCase())
    );
  }
  return ans.join(" ");
};

console.log(capitalizeName("jessIca ann smiTH davis"));

//*-----------------------------------------------------------------------------------------------------------
//* padding a string
const message = "Go to gate 23!";
console.log(message.padStart(20));
//* the number signifies the desired length of the string after padding, so characters are accordingly added.
console.log(message.padStart(20, "@").padEnd(21, "&"));
//* the above code if fairly simple, you padded in beginning @ so that desired length becomes 20, then tahat string is returned, which is chained to padEnd to obtain desired length of 21, so just 1 char is added in the end, because length was already 20.
//! REMEMBER STRING METHODS RETURN THE NEW STRING AND DONT MODIFY THE ORIGINAL STRING.

//* show the last 4 digits of credit card(practical application)
function maskCreditCard(num) {
  const str = String(num);
  return str.slice(-4).padStart(str.length, "*");
}

console.log(maskCreditCard(12345));
