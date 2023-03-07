"use strict";

//* lets practice some array methods.

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//todo how much totally has been deposited in the bank
const totalDep = accounts
  .map(each_acc => each_acc.movements)
  .flat()
  .filter(val => val > 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(totalDep);

//todo how many deposits in bank of at least 1000 dollars.
const countTh = accounts
  .map(acc => acc.movements)
  .flat()
  .filter(val => val >= 1000).length;
console.log(countTh);

const countThAlt = accounts
  .map(function (cur_acc) {
    return cur_acc.movements;
  })
  .flat()
  .reduce(function (acc, val) {
    if (val >= 1000) {
      acc++;
    }

    return acc;
  }, 0);

console.log(countThAlt);
//* the above beautifully explains the reduce method in detail, and shows how the returned value in each callback function is passed onto the next callback function call as acc parameter.

//todo create an obj that contains sum of deposits and sum of withdrawals.

const { deposits: d, withdrawals: w } = accounts
  .map(a => a.movements)
  .flat()
  .reduce(
    (obj, curr) => {
      if (curr > 0) {
        obj.deposits += curr;
      } else {
        obj.withdrawals += curr;
      }

      return obj;
    },
    { deposits: 0, withdrawals: 0 }
  );

/*
 *  lETS ANALYZE THE ABOVE CODE.
 * we know that the initial obj value would be {deposits:0,sums:0}
 * the value is then updated in the callback function
 * this obj is then returned, so that it can be passed onto the next callback function call as the obj parameter again.
 * ANd to add cherry on the cake we have used object destruction also.
 * Look down even more sophisticated version, using [] which can take expressions also, but . cannot.
 */
console.log(d, w);

const sums = accounts
  .map(a => a.movements)
  .flat()
  .reduce(
    (obj, curr) => {
      obj[curr > 0 ? "deposits" : "withdrawals"] += curr;
      return obj;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);
//! so accumulator in reduce can have objects also as initial values.

//todo convert title case.

function convertCaseTitle(str) {
  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with"];
  //* we wont capitalize these exceptions.

  const titleCase = str
    .toLowerCase()
    .split(" ")
    .map(word =>
      exceptions.includes(word)
        ? word
        : word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");

  return titleCase;
}

console.log(convertCaseTitle("this is a nice title"));
console.log(convertCaseTitle("this is a LONG title but not too long with"));
