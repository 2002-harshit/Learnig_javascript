"use strict";

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
};

//*task 1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//*task 2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

//*task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//*task 4
const players1Final = [...players1, "thiago", "cotuinho", "peristic"];
console.log(players1Final);

//*task 5
const { team1, x: draw, team2 } = game.odds;
//*this is an example of object destructuring, where we use the key names, but we can define ur own vaiable names too like x i have renamed as draw.
console.log(team1, draw, team2);

//*task6
let printGoals = function (...anyPlayers) {
    //* anyPlayer packs it again in an array
    console.log(anyPlayers.length);
}
printGoals(...game.scored);//* unpack from here

//*task 7
//* it had to be done without if_else and ternary.
team1 < team2 && console.log(team1);
team1 >= team2 && console.log(team2);

