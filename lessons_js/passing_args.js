"use strict";

const flight = "abc123";
const harshit = {
  user_name: "harshit",
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "def123";
  passenger["user_name"] = "Mr. " + passenger["user_name"];
  if (passenger.passport === 123456789) {
    alert("checked in");
  } else {
    alert("wrong passport.");
  }
};

checkIn(flight, harshit);
console.log(flight, harshit);
//* flight still is "abc123" because it is passed by value(a copy) sicne its a primitive type, but harshit is an object,so it is passed by reference(an address), and hence the object in the heap is directly modified, because both passenger and harshit point to the same thing.
//! also js does not have pass by reference what!!!!!!!!!!!!!!, we pass everything by value but in the case of objects , that value in the stack is actually an address/reference to the stack,so it sjust a value, also we cannot send a reference of a primitive so therefore we dont have pass by reference, as compared to cpp where you can pass &(int).
