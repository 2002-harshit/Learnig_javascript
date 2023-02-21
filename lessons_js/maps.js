"use strict";

//* in the case of object , keys are always strings but in case of a map, you can have any type(object,arrays or even other maps!!!!).

const rest = new Map();
rest.set(1, "harshit");
rest.set(10, "garv");
//*if the same key is added agaian, the corrsponding value is updated.
console.log(rest.set(2, ["var1", "var2"]));
//! IT IS WORTHY NOTING THAT THE SET METHOD RETURNS THE UPDATED MAP, so chaining can be done.

rest
  .set("papa", "roshan")
  .set("wife", "unknown")
  .set(true, "we are open")
  .set(false, "we are closed")
  .set("open", 11)
  .set("close", 23);

//! WE CAN HAVE BOOLEAN KEYS TOO
console.log(rest.set("mom", "ritu").get("mom"));

console.log(rest);

//* something fun and interesting
const time = 12;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("open"));

rest.delete("wife");
console.log(rest);

console.log(rest.size);

rest.clear();

//*lets create a new object.
const map = new Map();
map.set([1, 2], "one two");

//* now we will expect the below statement to return "one two"
console.log(map.get([1, 2]));
//! but this doest work why lets see
//* since arrays are objects in the heap, therefore [1,2] in the set method is different from [1,2] in the get, because these are two different objects in the memory,
//* so lets make it work.

const arr = [2, 3];
//* now arr stores a reference(memory address) to the [2,3] obejct in the memory.
map.set(arr, "two three");
console.log(map.get(arr));
//* now both the arr are same objects.

map.set(document.querySelector("body"), "this is body");
