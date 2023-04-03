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
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
    <p class="country__row"><span>💰</span>${
      Object.keys(data.currencies)[0]
    }</p>
  </div>
  </article>`;

  countriesContainer.insertAdjacentHTML("beforeEnd", display);
  countriesContainer.style.opacity = 1;
}

//* the res here is the HTTP response, and res.json() parses this res and returns a JS object.

/*
!it is important noting that "then" method always returns a promise, see the definiton of "then" 

!Attaches callbacks for the resolution and/or rejection of the Promise.

!@param onfulfilled — The callback to execute when the Promise is resolved.

!@param onrejected — The callback to execute when the Promise is rejected.

! this !!!!!!!!!!! @returns — A Promise for the completion of which ever callback is executed.

* but if you yourself return a value, then that value becomes the fulfillment value of the returned promise!!!!!!!!!, see the below example.

*/

const fun = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(([data]) => {
      renderCountry(data);
      const neighbour = data.borders?.[0];

      return 11;
      //*a promise is returned whose fulfillment value or success value is 11.
    })
    .then(data => alert(data));
};

const getCountryAndNeighbour = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(([data]) => {
      renderCountry(data);
      const neighbour = data.borders?.[0];
      // const neighbour = "DF";
      if (!neighbour) return; //* this wont do anything,

      //* now you return a new promise again.
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(res => res.json())
    .then(([data]) => renderCountry(data));

  //* it is also worth noting that i returned the new fetch/(promise), instead of having "then" again, because again it would be a callback hell.
};

getCountryAndNeighbour("germany");
// fun("portugal");
