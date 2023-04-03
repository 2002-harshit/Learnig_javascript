"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
//* now we can escape the callback hell, using promises
//* we will use fetch api, modern way of making ajax calls.

function renderCountry(data) {
  console.log(data);
  const display = `<article class="country">
<img class="country__img" src="${data.flags.svg}" />
<div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(
    1
  )}M people</p>
  <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
  <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0]}</p>
</div>
</article>`;

  countriesContainer.insertAdjacentHTML("beforeEnd", display);
  countriesContainer.style.opacity = 1;
}

function getCountry(country) {
  // const req = fetch(`https://restcountries.com/v3.1/name/${country}`);
  //* this will return a promise, which will be in pending state initially.
  //* when it becomes "settled", it can be handled by the "then" method, it takes 2 callbacks,1t for handling fulfillment, and 2nd for handling rejection
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (res) {
      //!res is the "Response" object, which has status code and all.
      console.log(res);
      return res.json(); //! but even this is a async function and returns a promise, so the next "then" is for that promise
      // res.
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
}

function getCountrySimple(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => renderCountry(data[0]));

  //* much better than then the ajax calls
}

getCountrySimple("portugal");
