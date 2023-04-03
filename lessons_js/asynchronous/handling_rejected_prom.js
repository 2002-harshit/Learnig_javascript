"use strict";
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

//* a promise returned from fetch can reject when the user does'nt hav Internet.

const getCountryAndNeighbour = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      res => res.json(),
      e => alert(e) //for promise rejection
    )
    .then(data => {
      //   renderCountry(data);
      const neighbour = data?.borders?.[0];
      // const neighbour = "DF";
      if (!neighbour) return; //* this wont do anything,

      //* now you return a new promise again.
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(
      res => res.json(),
      e => alert(e)
    )
    .then(([data]) => renderCountry(data));

  //* it is also worth noting that i returned the new fetch/(promise), instead of having "then" again, because again it would be a callback hell.
};

const getCountryAndNeighbourWithErrorHandling = country => {
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
    .then(([data]) => renderCountry(data))
    .catch(err => {
      //this takes the handler only for the rejection of the promise
      alert(err);
      return "a";
      //* this handles the errors of the complete chain
      //! it is also worth noting that, that when an error occurs, the control passes to the nearest catch() and THE CHAIN IS BROKEN!!!!!!!!!!!!, no further code execution, this was not the case with if you pass both callbacks to "then" ,see test.js for better understanding.
    })
    .finally(() => {
      //* look at the definition of the finally, the callback inside it does not take any argument, therefore if an error occurs and the catch is called, it returns "a", finally wont take that "a".
      console.log("I am always executed");
    });
};

btn.addEventListener("click", function () {
  getCountryAndNeighbourWithErrorHandling("portugal");
});

/*
 *In a promise chain like the one in this code, if an error occurs in the middle of the chain, the code after the error will not be executed. The promise chain will be broken, and the control will be passed to the nearest catch() method.

* When an error occurs, the code jumps directly to the nearest catch() method,or(if you have a then method in which the second callback is defined, it goes there, because it is also meant for promise rejection, but in this case the chain wont break) and skips all the subsequent then() methods. Any code in those then() methods will not be executed. 
* but the finally is still executed.
 */

//* it is also worth noting that , if you getCountryAndNeighbourWithErrorHandling("random_country"), it is worth noting that the promise is still fulfilled but with a  http response of 404, but "catch" wont be able to catch it because it is not promise rejection!!!!!!!!!!, which is logically wrong.
