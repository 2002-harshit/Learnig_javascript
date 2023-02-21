"use strict";
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "#: C++"],
  answers: new Array(4).fill(0),
};

/*
 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
 */
//*task1
poll.registerNewAnswer = function () {
  let choice = Number(
    prompt(`What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++`)
  );

  //   console.log(choice ?? 12);
  //! ?? only checks for null or undefined and not NaN(means NaN is considered as a tru valuen for it).
  if (!isNaN(choice)) this.answers[choice % 4]++;
  //* this here simply points to obejct no jhamela , simple object method, but only in task 1.
  //   console.log(this.answers);
  this.displayResults(); //*task4
};

// poll.registerNewAnswer();

//*-------------------------------------------------------------------------------------------------------------------
//*Call this method whenever the user clicks the "Answer poll" button.
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer);
//! the above line has logical error,when i pass poll.registerNewAnswer function, it is passsed a normal fucntion value and not an object method, therefore "this" will point to the button and not the objectg whoich is wrong, so correction.
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
//* we are binding the "this" to the poll object.

//*---------------------------------------------------------------------------------------------------------------------
/**
 * Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1"
 */
//*task 3
poll.displayResults = function (type = "array") {
  //*gave type a default value, a default argument.
  type === "array"
    ? console.log(this.answers)
    : console.log(`Poll results are ${this.answers.join(",")}`);
};

// displayResults();
//*task 4
//*done

/**
 *. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
 */

//*task 5
// var answers = [5, 2, 3]
// poll.displayResults.call(window, "array");
//* the above soltuion is correct but better solution.

poll.displayResults.call({ answers: [5, 2, 3] }, "string");

//! EK METHOD OBJECT KA TAB TAK HI HAI JAB TAK WOH USKE THROUGH CALL HO RAHA HAI,MATLAB . OPERATOR se, if i write const func=poll.displayResults, now func is a normal function with an undefined "this", thats what normal fucntions get as "this".
