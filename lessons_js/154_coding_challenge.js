"use strict";

function calcAverageHumanAge(ages) {
  const humanAge = ages.map(val => (val <= 2 ? 2 * val : 16 + 4 * val));
  console.log(humanAge);

  const newHumanAge = humanAge.filter(val => val >= 18);

  //   const sum = newHumanAge.reduce((su, curr) => su + curr, 0);
  //   console.log(sum / newHumanAge.length);

  const avg =
    newHumanAge.reduce((acc, val) => acc + val, 0) / newHumanAge.length;
  console.log(avg);

  //* it is fantastic that the above can be further be compacted as

  const bestAvg = newHumanAge.reduce(
    (acc, val, idx, arr) => acc + val / arr.length,
    0
  );

  //   ! even this gives the avg but in just 1 fkin line!!!!!!!!!, u might also be wondering whats the need of idx, we should remember that js follows strict one to one mapping for function args.
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
