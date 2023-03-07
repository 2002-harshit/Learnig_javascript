"use strict";

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//*1.
dogs.forEach(dog => {
  dog.recommend = dog.weight ** 0.75 * 28;
});

//*2.
// const sarahDog = dogs.find(dog => {
//   if (dog.owners.includes("Sarah")) return dog;
// });
//the above code can be simply written as
let extremes = function (dog) {
  if (dog.curFood >= 1.1 * dog.recommend) {
    console.log("too much");
  } else if (dog.curFood <= 0.9 * dog.recommend) {
    console.log("too little");
  }
};
const sarahDog = dogs.find(dog => dog.owners.includes("Sarah"));
extremes(sarahDog);

//*3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood >= 1.1 * dog.recommend)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood <= 0.9 * dog.recommend)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooLittle);

//*4
console.log(`${ownersEatTooMuch.join(" and ")} dogs eat too much`);
console.log(`${ownersEatTooLittle.join(" and ")} dogs eat too little`);

//*5
console.log(
  dogs.some(function (dog) {
    return dog.curFood === dog.recommend;
  })
);

const eatOk = dog =>
  dog.curFood < 1.1 * dog.recommend && dog.curFood > 0.9 * dog.recommend;

//*6
console.log(dogs.some(eatOk));

//*7
const dogsEatOk = dogs.filter(eatOk);
console.log(dogsEatOk);

//*8
const dogsCpy = dogs.slice();
dogsCpy.sort((dogA, dogB) => dogA.recommend - dogB.recommend);
console.log(dogsCpy);
