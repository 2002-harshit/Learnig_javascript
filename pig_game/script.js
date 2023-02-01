"use strict";
let roll = document.querySelector(".btn--roll");
let hold = document.querySelector(".btn--hold");
let restartGame = document.querySelector(".btn--restart");
let diceImg = document.querySelector(".dice")
let currentScore0 = document.getElementById("current--0");
let currentScore1 = document.getElementById("current--1");
let players = document.querySelectorAll(".player")
let totalScore0 = document.getElementById("score--0");
let totalScore1 = document.getElementById("score--1");
let player0 = document.getElementById("name--0");
let player1 = document.getElementById("name--1");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close--modal");
let newGame = document.querySelector(".btn--new");
// let wonScore = document.querySelector(".won--score");
let whoWon = document.querySelector(".who--won");
let player0win = false;
let player1win = false;


roll.addEventListener("click", function () {

    if (!player0win && !player1win) {

        let diceRoll = Math.ceil(Math.random() * 6);
        console.log(diceRoll);

        diceImg.src = `resources/dice-${diceRoll}.png`;

        if (diceRoll == 1) {

            if (players[0].classList.contains("player--active")) {
                currentScore0.textContent = '0';
                players[0].classList.remove("player--active");
                players[1].classList.add("player--active");
            }
            else {
                currentScore1.textContent = '0';
                players[1].classList.remove("player--active");
                players[0].classList.add("player--active");
            }

        }
        else {

            // console.log(players);
            if (players[0].classList.contains("player--active")) {
                currentScore0.textContent = Number(currentScore0.textContent) + diceRoll;
            }
            else {
                currentScore1.textContent = Number(currentScore1.textContent) + diceRoll;
            }
        }
    }
})

hold.addEventListener("click", function () {
    if (players[0].classList.contains("player--active")) {
        totalScore0.textContent = Number(totalScore0.textContent) + Number(currentScore0.textContent);

        if (Number(totalScore0.textContent) >= 10) {
            player0win = true;
            whoWon.textContent = '1';
            overlay.classList.remove("hidden");
            modal.classList.remove("hidden");


        }
        currentScore0.textContent = '0';
        players[0].classList.remove("player--active");
        players[1].classList.add("player--active");
    }
    else {
        totalScore1.textContent = Number(totalScore1.textContent) + Number(currentScore1.textContent);
        if (Number(totalScore1.textContent) >= 10) {
            player1win = true;
            whoWon.textContent = '2';

            overlay.classList.remove("hidden");
            modal.classList.remove("hidden");



        }
        currentScore1.textContent = '0';
        players[1].classList.remove("player--active");
        players[0].classList.add("player--active");
    }
})

function resetEverything() {
    player0win = false;
    player1win = false;
    totalScore0.textContent = '0';
    totalScore1.textContent = '0';
    currentScore0.textContent = '0';
    currentScore1.textContent = '0';
    players[0].classList.add("player--active");
    players[1].classList.remove("player--active");
    // overlay.classList.add("hidden");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// restartGame.addEventListener("click", function () {
//     totalScore0.textContent = '0';
//     totalScore1.textContent = '0';
//     currentScore0.textContent = '0';
//     currentScore1.textContent = '0';
//     players[0].classList.add("player--active");
//     players[1].classList.remove("player--active");
//     overlay.classList.add("hidden");

//     //! a good thing about add and remove, if the given class is already present and you add, there is no problem, and if the given class is not there and you remove still no problem 
// })

restartGame.addEventListener("click", resetEverything);

// function hideEverything() {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");

//     // console.log(modal.classList);
//     // console.log(overlay.classList);
// }

// newGame.addEventListener("clock", function () {
//     /*
//     *rememver isnstead of passig a function expression here as the vent handler, you an also pass your function which you defined somewhere else, but do remember passing without (), otherwise it will be a call and not a function value 
//     */
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// })

newGame.addEventListener("click", resetEverything);
closeBtn.addEventListener("click", resetEverything);

