"use strict";

//* lets go with the final coding challenge

//*part2
const img_container = document.querySelector(".images");

const createImage = function (img_path) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = img_path;

    img.addEventListener("load", function () {
      img_container.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
      //*this could have been a normal string also, but error object is red coloured, so better
    });
  });
};

async function loadAll(img_arr) {
  try {
    const imgs = img_arr.map(async each_path => {
      return await createImage(each_path);
    });

    const img_elements = await Promise.all(imgs);

    img_elements.forEach(el => el.classList.add("parallel"));

    console.log(img_elements);
  } catch (err) {
    console.log(`${err} 💣 💣`);
  }
}

// loadAll(["./img/img-1.jpg", "./img/img-2.jpg", "./img/img-3.jpg"]);
/*
 * flow of part2
 *  loadAll() is called with the image array, which is an async function so executes in the background.
 ! img_arr is iterated upon, and the async callback is called for each one of them, now "return await createImage()" technically returns the image element if it is resolved, but since the callback is an async function, it returns a promise to complete the async callback(itself) with the fulfillment value of img element
 * remember async function always returns a promise.
 * also remember await actually waits for the promise to settle.(the flow stops, but since in background so no blocking of main thread).
 */

const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000 * seconds);
  });
};

//*part1
const loadNPause = async function () {
  try {
    const i_el1 = await createImage("./img/img-1.jpg");
    console.log("Image 1 loaded");
    await wait(2);
    i_el1.style.display = "none";
    const i_el2 = await createImage("./img/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
    i_el2.style.display = "none";
  } catch (err) {
    console.log(`${err} 💣 💣`);
  }
};

// loadNPause();

/*
 * Flow of part1
 * LOadPause() is called, since it is async,it is executing in the background.
 * createImage() returns a promise which either resolves or rejects, if it resolves, it is resolved with the img html element, which is stored, if it is rejected, it is caught because *promise rejection is an error*, and the code below it wont be executed, straight away to catch block.
 */
