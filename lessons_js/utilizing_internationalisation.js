"use strict";

//* let internationalize dates first
console.log(new Intl.DateTimeFormat("en-UK").format(new Date()));
console.log(new Intl.DateTimeFormat("en-IN").format(new Date()));
console.log(new Intl.DateTimeFormat("hi-IN").format(new Date()));

//* in the above code, we basically create a formatter first using Intl.DateTimeFormat(), we pass a locale string which is "lang"-"country", using this formatter we format the date.

//* you can also provide multiple options

console.log(
  new Intl.DateTimeFormat("en-UK", {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date())
);
//* but now we only get the time, since options are provided only for time.

console.log(
  new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "numeric",
    day: "2-digit",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date())
);

//* but why hardcode the locale, lets get it from the user.

// console.log(navigator.language);
//! navigator.language returns the user's locale from the browser.

//*internationalizing numbers-------------------------

const speed = 231232.19;
console.log(
  new Intl.NumberFormat("en-US", {
    style: "percent",
  }).format(speed)
);
console.log(
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "INR",
    useGrouping: true,
  }).format(speed)
);
//! it is worthy noting that currency is not applied form the locale string!!!!!!,you have to manually give it.

//* also there are 3 styles that are, unit, currency, percentage.
//* useGrouping determines whether to show separators between numbers or not.
console.log(
  new Intl.NumberFormat("en-IN", {
    style: "unit",
    unit: "meter-per-second",
  }).format(speed)
);

//! it is worthy noting that:
/*
 * the currency does not depend on the locale
 * but the formatting of the number itself, that is where to place , or . or the grouping is dependent on the locale.
 */
