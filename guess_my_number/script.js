let winNum = Math.floor(20 * Math.random()) + 1;
console.log(winNum + "is th winning number");

let score = document.getElementsByClassName("score");
let highscore = document.getElementsByClassName("highscore");
let userInput = document.getElementsByClassName("guess");
let btn_check = document.getElementsByClassName("check");
let btn_again = document.querySelector(".again");
let msg = document.querySelector(".message");

function display_msg(str) {
    msg.textContent = str;
}


//! now getElementsByClassName returns a collection of elements because a single class can be assignmed to multiple elements , so u have to acces using [], but queryselector only return 1 element so no hassle in that

// now lets handle the click event
btn_check[0].addEventListener("click", function () {

    //* the first arg is the type of the event  
    //* the second arg is the event handler for that event, since we know function is also a value in js so we pass it as a arg

    //*'this' point sto the button that calls the vent handler when event happens

    let num = Number(userInput[0].value);
    //! the above wont be textConetent ,it is value

    console.log(num + " is user input");

    if (!num) {
        msg.textContent = "😤 O not allowed";

    }
    else {

        if (num === winNum) {
            // console.log("win");
            msg.textContent = "🔥 Correct Number !";
            if (Number(score[0].textContent) > Number(highscore[0].textContent)) {
                highscore[0].textContent = score[0].textContent;
            }
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").textContent = num;
            document.querySelector(".number").style.width = "30rem";

        }
        else if (msg.textContent !== "😶 You lost buddy" && num !== winNum) {

            if (score[0].textContent === '1') {
                display_msg("😶 You lost buddy");
                score[0].textContent = '0';

            }
            else {

                display_msg(num < winNum ? "📉  Low value, gear up!" : "📈  High value, calm down!");
                score[0].textContent = Number(score[0].textContent) - 1;
            }
        }

    }

})

btn_again.addEventListener("click", function () {

    let winNum = Math.floor(20 * Math.random()) + 1;
    score[0].textContent = '20';
    msg.textContent = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    userInput[0].value = "";
    console.log(winNum + "is th winning number");

})



