// import { addToCart, totalPrice, totalQuantity } from "./shoppingCart.js";
//*the name has to be same

import { addToCart as ac, totalQuantity as tq } from "./shoppingCart.js";
console.log("Importing module");
//*using {} is necessary

// ac("cake", 5);
// // console.log(totalPrice);
// console.log(tq);

//*if you want to export everything
// import * as ShoppingCart from "./shoppingCart.js";
// import add from "./shoppingCart.js"; //* now you can give any name to that default export here

//! importing multiple times is not an error, but not recommended.

//* you can mix default and named imports, but not recommended
// import add, { addToCart, totalQuantity } from "./shoppingCart.js";

//! ALSO , THESE IMPORTS ARE NOT COPIES OF EXPORTED ITEMS!!!, THEY ARE LIVE CONNECTION, LIKE POINTERS!!

// console.log(ShoppingCart);
// console.log(ShoppingCart.totalPrice);
add(2, 3);
