"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
 *Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
 */
for (const [idx, player] of game.scored.entries()) {
  console.log(`Goal ${idx + 1}:${player}`);
}
//! it is worthy remembering that for an array you cna use two methods tp get entries , game.scored.entries() which give [0, 'lewnadowski], [1, 'Gnarby'] [2, 'Lewandowski'][3, 'Hummels'], notice the keys are Number  but if u use Object.entries(game.scored) u get ['0', 'lewnadowski], ['1', 'Gnarby'] ['2', 'Lewandowski']['3', 'Hummels'], the keys become strings which is ideal for object keys, therefore for arrays u should use first method

//*second

let sum = 0;
for (const val of Object.values(game.odds)) {
  sum += val;
}
console.log(sum / Object.values(game.odds).length);

/*
 * Print the 3 odds to the console, but in a nice formatted way, exactly like this:
 *Odd of victory Bayern Munich: 1.33
 *Odd of draw: 3.25
 *Odd of victory Borrussia Dortmund: 6.5
 */
for (const [k, v] of Object.entries(game.odds)) {
  //* we have alrewady discuused Object.entries() returns a 2d array containing 1d array of key-value pair.

  console.log(`Odd of ${game[k] ?? "draw"}:${v}`);

  //* a very beautiful questuion
}

/*
 *Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
 *{
 *Gnarby: 1,
 *Hummels: 1,
 *Lewandowski: 2
 *}
 */

const scorers = {};

for (const player of game.scored) {
  //   scorers[player]++;
  //* LETS SEE WHY THE ABOVE IS WRONG
  /*
   *this statement expands tp scores[player] =scores[player]+1,
   * since in rhs scores[player] does not exist, it is undefined we know that, undefined +1 is NaN, in lhs the property is then created with key/property name as player with values as NaN;
   */

  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
