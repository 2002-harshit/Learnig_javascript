"use strict";

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

// console.log(
//   navigator.geolocation.getCurrentPosition(
//     pos => console.log(pos),
//     err => console.log(err)
//   ) //*this code executes in WebApi environment because it is async.
// );
//! the above is an async callback based api, we will convert it to promise based api

// console.log("I will come before the geolocation because it is async");

//*getCurrentPosition accepts 2 callbacks one if the geolocation is found, other if user denies

const getPosPromise = function () {
  return new Promise(function (resolve, reject) {
    //*resolve and reject batate hain ki bhaiya promise ka resolve/fulfill ya reject karwana hai
    navigator.geolocation.getCurrentPosition(
      pos => resolve(pos), //*when the user accepts to give geolocation, pos becomes the promise's fulfilled value
      err => reject(err) //*when he rejects to give geolocation, err becomes the promises rejected reason
    );
  });
};

const getPosPromiseShort = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
    //! it is worth noting that here,resolve is the successCallBack that is called by getCurrentPosition , and the value "pos" is automatically passed!!!!!!!!
  });
};

// getPosPromiseShort().then(
//   co => console.log(co),
//   err => console.error(err)
// );

function whereAmI() {
  getPosPromise()
    .then(
      co_ords =>
        fetch(
          `https://geocode.xyz/${co_ords.coords.latitude},${co_ords.coords.longitude}?geoit=json`
        )
      //*this will automatically be returned
    )
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
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

btn.addEventListener("click", whereAmI);
