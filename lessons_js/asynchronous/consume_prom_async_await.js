"use strict";

//* earlier we were consuming promises using "then", but now we will use async and await to consume them, its only a fkin different way, it works same under the hood, LETS Go!!!!!!!!!,which is even easier

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

const whereAmiI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  //   console.log(res);
  //*when the control reaches to the await fetch(), the control pauses there till the data is loaded, but it is still non blocking because this async code is executing in the background,so it does not affect the main execution thread.

  //! async await is nothing but syntactical sugar over promises and then, it makes you code looks as synchronous.
  const [data] = await res.json();
  renderCountry(data);
};

//*it is worthy noting that the way we build promises still remains same.

const getPosPromise = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      pos => resolve(pos),
      err => reject(err)
    );
  });
};

const whereAmiIFinal = async function () {
  //*await ke aage we have a promise,ki bhaii kiske liya rukna hai
  const {
    coords: { latitude: lat, longitude: long },
  } = await getPosPromise();

  const res = await fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);

  //   console.log("in middle");
  const res_json = await res.json();
  const res2 = await fetch(
    `https://restcountries.com/v3.1/name/${res_json.country}`
  );
  //   console.log(res2);
  const [data] = await res2.json();
  renderCountry(data);

  //*this looks like synchronous code but it is async,
  //*the control waits at each statement till the data is fetched or the promise is resolved,!!!!!therefore all the console.log statements within this will be synchronous but still non blocking, because it executes in background.
  //   *the control waits at each statement till the data is fetched or the promise is resolved,!!!!!therefore all the console.log statements within this will be synchronous but still non blocking, because it executes in background.

  //! now we will resolve errors in next code.
};

whereAmiIFinal(); //call to async function, so control moves forward.
console.log(
  "I will be printed first because i am top level code and function is asynchronous"
);
