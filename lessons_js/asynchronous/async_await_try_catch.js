"use strict";

//* here we cannot use .catch() because we cannot attach it anywhere.

//* so we use traditional error handling , that is try and catch.

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

function renderCountry(data) {
  //   console.log(data);
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

    //* we should always remember that behind the scenes it is promise and then, since getPosPromise() can reject if an error occurs, it is automatically caught.

    const res = await fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);
    if (!res.ok) throw new Error(`Problem with geocode ${res.status}`);

    const res_json = await res.json();
    const res2 = await fetch(
      `https://restcountries.com/v3.1/name/${res_json.country}`
    );
    if (!res.ok) throw new Error(`Problem with REST countries ${res.status}`);

    const [data] = await res2.json();
    renderCountry(data);
  } catch (err) {
    console.error(err.message);
  }
};

btn.addEventListener("click", whereAmiI);
// try {
//   const x = 1;
//   x = 2;
// } catch (err) {
//   alert(err.message);
// } finally {
//   console.log("hello");
// }
