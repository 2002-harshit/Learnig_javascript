"use strict";

const img_container = document.querySelector(".images");

const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (img_path) {
  return new Promise(function (resolve, reject) {
    //*this will be you async code
    const img = document.createElement("img");
    img.src = img_path; //*this is async, setting the src!!!!

    //*it is also worth noting that addEventListener is not async code, but the handler it takes is async
    img.addEventListener("load", function () {
      img_container.append(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImage;

createImage("./img/random_image.jpg")
  .then(img => {
    console.log("Image one loaded");
    currentImage = img;
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = `none`;
    return createImage("./img/random_image2.jpg");
  })
  .then(img => {
    currentImage = img;
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = `none`;
  })
  .catch(err => console.error(err.message));

//*these codes are awesome!!!!!!!!
