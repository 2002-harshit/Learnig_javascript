//*this will be a js module
console.log("Exporting module");

const shippingCost = 10;
const cart = [];

//! since this is a module, all the top level variables are private to this module, if you want to use them in other modules, you need exports.

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity }; //*these are named exports, when you want to export multiple things

//*the second type is default exports when you want to export a single thing, there can be only one default export

export default function (a, b) {
  console.log(a + b);
}
