"use strict";

`const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");`;
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

//* lets handle the 404 error now.
//! this was pretty goooooood!!!!!!!!!!!!

const getCountryAndNeighbour = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => {
      //   console.log(res);
      if (!res.ok) throw new Error(`Country not found ${res.status}`);
      //* so if we encounter an error,we throw it which means REJECTION OF the present "THEN's" promise, and hence catch() is called,and the chain is broken.
      //! remember catch() handles rejected promises.
      return res.json();
    })
    .then(([data]) => {
      renderCountry(data);
      const neighbour = data.borders?.[0];
      if (!neighbour) throw new Error(`Neighbour not found`); //*this would again result in rejection of promise and hence catch()
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(res => res.json())
    .then(([data]) => renderCountry(data))
    .catch(err => console.error(err.message))
    .finally(() => {
      console.log("I am always executed");
    });
};

btn.addEventListener("click", function () {
  countriesContainer.innerHTML = "";
  getCountryAndNeighbour("australia");
});
