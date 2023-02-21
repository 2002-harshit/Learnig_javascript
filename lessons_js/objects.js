const Person = {
    first_name: "harshit",
    last_name: "khanna",
    age: 20,
    friends: ["nivas", "samarth"],
    //* the above 2 are object properties
    //* and the below are object's methods
    bio: function () {
        console.log(`${this.name} is ${this.age} years old`);
    },
    //* functions can also be declared like this
    sayhi() {
        console.log("hi");
    }

};

Person.bio();//this will output harshit is 20 years old

//! this is an object literal not an obejct of the class


//* retreiving and setting data of the objects/////////////////////

//* using . notation

console.log(Person.age);
console.log(Person.first_name);
console.log(Person.friends[0]);

//*using keys
console.log(Person["name"]);
console.log(Person["friends"][1]);

//* [] is better as [u can have expressions inside here]

const nameKey = "_name";
console.log(Person["first" + nameKey]);
console.log(Person["last" + nameKey]);

// console.log(Person.+'firstname');//not correct

//************************************************************** */


// let choice = prompt("what do you want to know about me firstname,lastname or age")
// console.log(Person[choice]);
//* the above cannot be achieved using . notation
// console.log(Person.choice);//! this is wrong as it does not produce intended result

//! also if you try to access a key/property that does not exist, undefined is the answer

console.log(Person.idcdcdcd);//!undefined

//* if you want to add new properties its simple
Person.location1 = "New delhi";
Person["location2"] = "india";
console.log(Person)
