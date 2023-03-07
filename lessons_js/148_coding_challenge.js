"use strict";

const checkDogs = (juliaArr, kateArr) => {
  const jArr = juliaArr.slice(1, -2);
  const combined = jArr.concat(kateArr);

  combined.forEach(function (age, idx) {
    const type = age < 3 ? "puppy" : "adult";
    console.log(`Dog number ${idx + 1} is ${type}, and is ${age} years old`);
  });
};

const juliaArr = [3, 5, 2, 12, 7];
const kateArr = [4, 1, 15, 8, 3];
checkDogs(juliaArr, kateArr);
