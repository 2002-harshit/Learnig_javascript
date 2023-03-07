"use strict";
//* 4 ways of creating dates in JS.

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

const d1 = new Date();
console.log(d1);

const d2 = new Date("Wed Mar 08 2023 00:41:36");
console.log(d2);

const d3 = new Date("January 5,2002");
console.log(d3);

console.log(new Date(account1.movementsDates.at(0)));

//*we can construct dates using years,month,date,hours,min,sec
console.log(new Date(2014, 1, 22, 13, 23, 45));

//* lets look at some date methods.

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); //*returns the month index(0-11);
console.log(future.getDay());
console.log(future.getDate());

console.log(future.toISOString());

console.log(future.getTime());
//* returns the milliseconds elapsed since jan1 1970

console.log(Date.now());
console.log(new Date(Date.now()));

future.setSeconds(23);
