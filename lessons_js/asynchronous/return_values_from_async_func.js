"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

function renderCountry(data) {
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

const getPosPromise = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      pos => resolve(pos),
      err => reject(err)
    );
  });
};

const whereAmiI = async function () {
  try {
    const {
      coords: { latitude: lat, longitude: long },
    } = await getPosPromise();

    const res = await fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);
    if (!res.ok) throw new Error(`Problem with geocode ${res.status}`);

    const res_json = await res.json();
    const res2 = await fetch(
      `https://restcountries.com/v3.1/name/${res_json.country}`
    );
    if (!res.ok) throw new Error(`Problem with REST countries ${res.status}`);

    const [data] = await res2.json();
    renderCountry(data);

    return `You are in ${res_json.city}, ${res_json.country}`;
  } catch (err) {
    // console.error(err.message);
    throw err;
    //! this is very crucial for the whereAmI promise to be rejected, else it would be always be resolved, because we were not throwing the errors outside.
  }
};

// console.log("lets get the location");
// const str = whereAmiI();
// const str = await whereAmiI();//*you cannot use await here!!!!!
// whereAmiI().then(str => console.log(str));
// *in the above statement, if the whoAmI() encounters an error, we just console.log it, therefore the promise is always resolved, and in that case str will be undefined, to solve that we throw the error again, when we catch it.
// whereAmiI()//*this is a promise because it is async function
//   .then(
//     str => console.log(str),
//     err => console.error(err)
//   )
//   .finally(() => {
//     console.log("Got the location");
//   });

//! here we mix the "then" and "async/await" methodologies, which is completely fine, but lets keep a single methodology.

/*
 * Now first, "lets get the location" will be printed.
 * Then since, whereAmi() is async, the flow will move forward to console.log(str),and WE KNOW ASYNC FUNCTION RETURNS A PROMISE!!!!!, so promise will be printed.
 * "got the location"
 */

//!ONLY USING ASYNC/AWAIT using IIFe

(async () => {
  try {
    console.log("Getting the location");
    const loc_str = await whereAmiI(); //*it is worthy noting that flow will WAIT here, till the time promise is settled(either resolved or rejected), but it wont affect the main code, because it is async IIFe, executed in background.

    //*also inside this function FLOW WILL BE SYNCHRONOUS BECAUSE "AWAIT" ACTUALLY WAITS FOR THE ASYNCHRONOUS TASK TO COMPLETE.
    console.log(loc_str);
    console.log("Got the location");
  } catch (err) {
    console.log(err.message);
  }

  //*whole bakchodi only because await can only be used inside a async function
})();
