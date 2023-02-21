const arr = [1, "harshit", "garv", 10];
console.log(arr[0]);
console.log(arr[2]);

console.log(typeof arr)//! arrays are obejcts in js!!!!

//* although they are const but the values are mutable

arr[0] = "hey baby";
console.log(arr[0]);// this outputs hey baby

//*array creation using new

const arr1 = new Array(1, 2, "harshit", "mamma");
console.log(arr1);
console.log(arr1.length)


// arr1 = ["harshit", 12, 23, 2];//! this is still not allowed

/*
* Let see some array methods
*/

const myarray = [1, 2, 3, 4, 5];

//*push
myarray.push("helloji");
console.log(myarray);
//* it also returns the length of the new array
let newLength = myarray.push("2");
console.log(newLength);


//* adding elements in the beginning
myarray.unshift(0);
//* this also returns new length
console.log(myarray);


//* pop remove from last
myarray.pop();
//* it returns the popped element
console.log(myarray);


//*  shift -- remove  the first element
myarray.shift();
//* also returns the removed element

myarray.push('10');
console.log(myarray)



//* to find index of a value
console.log(myarray.indexOf(10));
//! also does strict equality
//* index of return the index of first occurence, if not found then -1 !!!!!!!!!!!

//* to check if ana lement is present or not
//! IT USES STRICT EQUALITY
console.log(myarray)
console.log(myarray.includes(2)); //true becuase strating index is 0
//* you can also give a starting index
console.log(myarray.includes(2, 3));//* because starting from index 3 there is no 2. 






