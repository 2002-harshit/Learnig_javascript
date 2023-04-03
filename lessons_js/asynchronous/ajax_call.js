"use strict";

//* lets study about ajax

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//////////////////////////////////////////////////////
//* lets start with the old school way

function getCountry(c_name) {
  const req = new XMLHttpRequest();
  // console.log(req);
  req.open("GET", `https://restcountries.com/v3.1/name/${c_name}`);
  req.send(); //* this is an asynchronous call, and when the data is fetched, it emits the "load" event.

  req.addEventListener("load", function () {
    //   console.log(this);
    //   console.log(this.responseText); //* this would be in the json notation which is a big string, so lets convert it into js object.
    const [data] = JSON.parse(this.responseText); //*converts json string to js object.
    console.log(data);
    // countriesContainer.innerHTML = "";
    const display = `<article class="country">
<img class="country__img" src="${data.flags.svg}" />
<div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(
    1
  )}M people</p>
  <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
  <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0]}</p>
</div>
</article>`;

    countriesContainer.insertAdjacentHTML("afterbegin", display);
    countriesContainer.style.opacity = 1;
  });
}

getCountry("portugal");
getCountry("usa");
getCountry("India");

//* it is worth noting that when the getCountry("portugal") is called, an ajax call is sent which iks asynchronous, so the control directly comes to getCountry("usa") and again an ajax call is sent.So its like 2 ajax calls are sent simultaneously, which ever data comes first, it is displayed first.

//! IF WE WANT TO HAVE AN ORDER IN THESE REQUESTS, THEN THEY HAVE TO BE CHAINED.!!!!!!!!!!, WE WILL SEE THAT.
