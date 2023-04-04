"use strict";

//*it is worthy noting that async function automatically returns a promise

// const getJson1 = async function (url, errorMsg = `Something went wrong`) {
//   const res = await fetch(url);
//   if (!res.ok) throw new Error(errorMsg);
//   return await res.json();
// };

const getJson = async function (url, errorMsg = "Something went wrong") {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(errorMsg);

    return await res.json();
    //*the async function automatically returns a promise, and this res.json() result will be the fulfillment value of that promise.
  } catch (err) {
    throw err;
  }
};

async function getCapitals(c1, c2, c3) {
  try {
    // const [data1] = await getJson(`https://restcountries.com/v3.1/name/${c1}`);

    // const [data2] = await getJson(`https://restcountries.com/v3.1/name/${c2}`);

    // const [data3] = await getJson(`https://restcountries.com/v3.1/name/${c3}`);

    //* it is worthy noting that the above are not parallel requests, because we know await has to wait, while it gets the data, so these are synchronous calls.

    // const [[data1], [data2], [data3]] = await Promise.all([
    //   getJson(`https://restcountries.com/v3.1/name/${c1}`),
    //   getJson(`https://restcountries.com/v3.1/name/${c2}`),
    //   getJson(`https://restcountries.com/v3.1/name/${c3}`),
    // ]);

    //! the above code is same as

    Promise.all([
      getJson(`https://restcountries.com/v3.1/name/${c1}`),
      getJson(`https://restcountries.com/v3.1/name/${c2}`),
      getJson(`https://restcountries.com/v3.1/name/${c3}`),
    ]).then(([[data1], [data2], [data3]]) => {
      console.log(data1.capital[0], data2.capital[0], data3.capital[0]);
    });

    //*promise.all== Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.(in short sabka promise return karti hoon lekar aaungi, if any one rejects, whole returned promise rejects)

    //* now these are parallel requests, if one of them fails, the the promise returned by Promise.all is rejected, and hence it is caught.

    // console.log(data1, data2, data3);

    // console.log(data1.capital[0], data2.capital[0], data3.capital[0]);
  } catch (error) {
    console.log(error);
  }
}

getCapitals("tanzania", "pakistan", "USA");
