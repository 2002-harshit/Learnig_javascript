/* "use strict";
the very first line has to be this to enable strict mode

 let hasDriversLicense=false;
 const passTest=true;

 if(passTest) hasDriversLicense=true;*/

function logger() {
  console.log("I am a simple logger");
}

function add(val1, val2) {
  //* val1 and val2 as any other language are local to add() and do not change the outside scope values
  val1 = 1;
  val2 = 3;
  return val1 + val2;
}

let val1 = 10;
let val2 = 20;
console.log(add(val1, val2));
console.log(val1);
console.log(val2);


