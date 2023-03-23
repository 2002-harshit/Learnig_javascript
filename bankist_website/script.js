"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//**************Tutorials related to this project** */

console.log(document.documentElement);
//* this returns the whole document or the whole html
console.log(document.head); //* this returns the head
console.log(document.body);

//* equivalent statements
console.log(document.querySelector("head"));
console.log(document.querySelector("body"));

const allSections = document.querySelectorAll("section"); //* it is worthy noting that this returns a node list
console.log(allSections);

console.log(document.getElementById("section--1"));
console.log(document.getElementsByTagName("button")); //* this method returns a HTMl collection
//! the HTML collection is alive list, when an element is deleted from the DOM, it is automatically reflected in the HTML collection but not in the node list!!!!!!!!!!!!

const header = document.querySelector(".header");
console.log(header);

console.log(document.getElementsByClassName("btn"));
//* this also returns an HTML collection(live)

//* creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved experience";
message.innerHTML = `We use cookies for improved experience. <button class="btn">Got it!</button>`;
// document.querySelector(".header").prepend(message);
// header.prepend(message);
// header.append(message);
