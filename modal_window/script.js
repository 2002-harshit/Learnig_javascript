let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-modal");
let clickBtn = document.querySelectorAll(".show-modal");
let overlay = document.querySelector(".overlay");
// let overlay = document.querySelector(".")

for (let i = 0; i < clickBtn.length; i++) {
    clickBtn[i].addEventListener("click", function () {

        // console.log(this.textContent);
        //! the button calls the event handler anonymous functions tehrefore it is pointed by this; the button whhich is clicked is pointed by this
        modal.classList.remove("hidden");
        //* you can remove multiple classes also(,,,)
        // console.log(document.querySelector("body").classList.add("overlay"));
        overlay.classList.remove("hidden");
        // console.log(document.querySelector("body").classList);
    })
}

function originalLook() {

    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// closeBtn.addEventListener("click", function () {

//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//     // console.log(document.querySelector("body").classList.remove("overlay"));
// })

// overlay.addEventListener("click", function () {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// })

//! the above 2 events can be replaced with a single function since they have redundant code

closeBtn.addEventListener("click", originalLook);
overlay.addEventListener("click", originalLook);

//! it is worthy noting that closeBtn.addEventListener("click",originalLook()) is wrong becuase then js will immediately execute the function therefor you pass the function as a value.

//* now lets listen to global events such as the keyboard events

document.addEventListener("keydown", function (event) {


    /*
    *total three events keydown,keypress,keyup

    *It is worthy noting thatg whenver an event happens an event object is created, sice now we need which key has been pressed , therefore we need that object
    * so as soon as the keydown event ocurs, the js calls the event handler with the event object, which we use to grab the key.
     */
    if (event.key === "Escape") {
        if (!modal.classList.contains("hidden") && !overlay.classList.contains("hidden")) {
            originalLook();
        }
    }
});  