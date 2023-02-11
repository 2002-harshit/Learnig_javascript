"use strict";
//* a collection of unique values

const firstSet = new Set([0, 10, 10, 1, 2, 1, 1, 1]);
console.log(firstSet);
//! all the duplicates will be removed.
//! the order of elements is irrelevant
//* the ctr accepts any iterable like an array,string, or a set again etc.

const secondSet = new Set("harshit");
console.log(secondSet); //{'h','a',....}

const thirdSet = new Set(firstSet);
console.log(thirdSet);

//* size
console.log(firstSet.size);
//* remmber it is not length

//* if a certian value is present
console.log(firstSet.has(10));

//*adding and deleting new elements
firstSet.add(20);
secondSet.delete("a");

//! BUT HOW TO ACCESS SET ELEMENTS, you cannot because thats the purpose of a set, sicne no duplicates are there and no order is maintained, so there is no need to access in order and u only need to know whether an element is there or not.

//* to empty a set
thirdSet.clear();

//* loop

for (const val of firstSet) {
  console.log(val);
}

//* a use case
const nums = [1, 1, 1, 1, 2, 3, 4, 5, 1, 1, 1];
const nums_without_duplicate = [...new Set(nums)];
console.log(nums_without_duplicate);
//* rememeber spread works with iterables
