"use strict";

//TODO our goal is to create a sequence of ajax calls, so that th second one runs only when the first ones is finished, because the second call needs dta from the first call.

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

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

const getCountryAndNeighbour = function (country) {
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  req.send();

  req.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);

    //* now we will get the neighbour country
    const neighbour = data.borders?.[0];
    if (!neighbour) return;

    console.log(neighbour);

    //* ajax call for the neighbour
    const req2 = new XMLHttpRequest();
    req2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    req2.send();

    req2.addEventListener("load", function () {
      const [data] = JSON.parse(this.responseText);
      renderCountry(data);
    });
  });
};

//* imagine if you have multiple nested tasks, this nesting will increase a lot!!!!!!!!, lets see one more example

getCountryAndNeighbour("Pakistan");

//* this is also a callback hell

setTimeout(function () {
  console.log("1 sec");
  setTimeout(function () {
    console.log("2 sec");
    setTimeout(function () {
      console.log("3 sec");
    }, 1000);
  }, 1000);
}, 1000);
