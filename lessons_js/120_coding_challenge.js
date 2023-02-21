"use strict";
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

//*first
// console.log(new Set(gameEvents.values()));
const events = [...new Set(gameEvents.values())];
console.log(events);

//*second
gameEvents.delete(64);
console.log(gameEvents);

//* third
console.log(90 / gameEvents.size);
//* fourth

for (const [k, v] of gameEvents) {
  k <= 45
    ? console.log(`[FIRST HALF] ${k}: ${v}`)
    : console.log(`[SECOND HALF] ${k}: ${v}`);
}
