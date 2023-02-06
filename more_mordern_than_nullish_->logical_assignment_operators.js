"use strict";

const rest1 = {
    restName: "rest1",
    numGuests: 20
};

const rest2 = {
    restName: "rest2",
    owner: "harshit khanna",
    numGuests: 0

};

//TODO Our goal is to add numGuests property to all the restauarants that dont have it, if we got the data from api and we dont know exactly about the data.

//* using or
// rest2.numGuests = rest2.numGuests || 5;
// rest1.numGuests = rest1.numGuests || 5;
//* this is wrong because it will update as 5 even in case of numGuests existing as a property but as 0.
console.log(rest1);
console.log(rest2);
//* shorter way of writing the above 18 and 19
// rest2.numGuests ||= 5;
console.log(rest2);


//* using nullish coallescing
// rest2.numGuests = rest2.numGuests ?? 20;
rest1.numGuests = rest1.numGuests ?? 20;
console.log(rest1);
//* this works absolutely correct again lets shorten it
rest2.numGuests ??= 20;
console.log(rest2);


/************************************************** */


//* also we have &&=
//* lets see a use case.
//todo lets assumne we have to give an anonymous name to each restuaraant
// rest1.restName = rest1.restName && "anonymous";
rest2.restName = rest2.restName && "anonymous";
console.log(rest1);
console.log(rest2);

//*again shorter syntax
rest1.restName &&= "anonymous";
