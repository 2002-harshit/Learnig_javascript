"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

function renderCountry(data) {
  console.log(data);
  const display = `<article class="country">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(
          data.languages
        )}</p>
        <p class="country__row"><span>💰</span>${
          Object.keys(data.currencies)[0]
        }</p>
      </div>
      </article>`;

  countriesContainer.insertAdjacentHTML("beforeEnd", display);
  countriesContainer.style.opacity = 1;
}

function whereAmI(lat, long) {
  fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with Geocode API ${res.status}`);

      return res.json(); //*this is a promise we know
    })
    .then(data => {
      console.log(`You are in ${data.state}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok)
        throw new Error(`Problem with REST countries API ${res.status}`);
      return res.json();
    })
    .then(([data]) => renderCountry(data))
    .catch(err => console.error(err.message));
}

// * this single catch approach is very good, because it breaks the chain which is not the case with "second callback of then method"

btn.addEventListener("click", function () {
  whereAmI(52.508, 13.381);
});
