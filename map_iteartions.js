"use strict";

//* lets see another way to populate a map using a 2d array of key value pairs

const question = new Map([
  ["question1", "who are you"],
  [1, "harshit"],
  [2, "garv"],
  [3, "ritu"],
  [4, "roshan"],
  ["correct", 1],
  [true, "correct"],
  [false, "incorrect, try again"],
  ["my friends", ["nivas", "samarth"]],
]);

// console.log(question);
//* this is actually a better way.

//! you bells should ring after seeing this 2d array structure because it is the same as returned by Object.entries() !!!!!!!!!!!!!!!!!, so you can convert an object to map,
//* lets see

const obj = {
  my_name: "harshit",
  my_age: 20,
  my_family_memebers: ["roshan", "ritu", "garv"],
  my_free_time: {
    mon: {
      start: 10,
      end: 20,
    },
    tue: {
      start: 5,
      end: 15,
    },
  },
};

// console.log(Object.entries(obj));

//! MAP FROM AN OBJECT
const objMap = new Map(Object.entries(obj));
// console.log(objMap);

//* maps are iterable
console.log(question.get("question1"));
for (const [k, v] of question) {
  //* sicne every value is an 1d array
  //* this is same as object iteration but there we needed Object.entries(obj_name)
  typeof k === "number" && console.log(k, v);
  //* the above statement works because we know and short circuits at a false value, so if first argument is false, it wont even go further, but if it is true, it goes further to check that every value is true
}
//* to get the answer
// console.log(
//   question.get(Number(prompt("whats your answer")) === question.get("correct"))
// );
//! the above is a very beautiful usecase of having BOOLEAN!!!!!!!!!!! keys.

//* sometimes we do need to convert a map back to a 2d array of key value pairs,
// console.log(...question);
const convertedMap = [...question];
console.log(convertedMap);
//* you basically unpack it/spread it , you will get a bunch of 1d arrays literally seperated by commas, so now enclose them in [], to make an array.

//* you can also have keys,values and entries but like arrays not like objects in objects u use Object.<values/keys/entries>(<objectname>), in arrays you use <arrayname>.entries().
console.log(...question.keys());
console.log(...question.values());
console.log(...question.entries()); //* same as ...quesion
