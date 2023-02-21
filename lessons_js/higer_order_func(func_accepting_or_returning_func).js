"use strict";

//* lets dive deep into higher order fucntions.

const oneWord = function (str) {
  //   return str.split(" ").join("");
  return str.replace(/ /g, "");
};

function firstUpperWord(str) {
  //   return (
  //     str.slice(0, str.indexOf(" ")).toUpperCase() + str.slice(str.indexOf(" "))
  //   );

  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
  //* amazing use case rememebr rest,spread, destructuring etc.
}

//* now lets build a higher order function, why, since it takes a func(because they are nothing just values or objects and remember objects have properties and methods, and DRUM ROLL 🥁 FUNCTIONS ALSO HAVE METHODS  AND RPOPERTIES😂) as an argument
function transformer(str, func) {
  console.log(`Original string was ${str}`);
  console.log(`Transformed by ${func.name}`);
  //! name is method of fucntion(object) here!!!, that return sthe name of the function
  console.log(`The transformed string is ${func(str)}`);
}

transformer("harshit khanna", firstUpperWord);
transformer("harshit khanna", oneWord);
//* these passed functions are called callback functions.

//* callback functions enable abstraction.

//*---------------------------------------------------------------------------------------------------------------
//* functions returning functions.

const greet = function (greeting) {
  return function (u_name) {
    console.log(`${greeting} ${u_name}`);
  };
};

greet("hey!")("harshit");

const greeterHey = greet("hey!");
greeterHey("harshit");
//*these two lines are similar to line 43.

//* but whats the use???, this enables fucntional prgramming we will see.

const greeAlter = greeting => {
  return u_name => {
    console.log(`${greeting} ${u_name}`);
  };
};
//* and since we know if we have to return one line we dont need{};

const greetUltimatum = greeting => u_name =>
  console.log(`${greeting} ${u_name}`);

greeAlter("helloji")("garv");
greetUltimatum("gn")("harshit");
