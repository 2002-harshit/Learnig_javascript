"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [],
  currency: "EUR",
  locale: "en-US", // de-DE
  transactions: new Map([
    ["2019-11-18T21:31:17.178Z", 200],
    ["2019-12-23T07:42:02.383Z", 455.23],
    ["2020-01-28T09:15:04.904Z", -306.5],
    ["2020-04-01T10:17:24.185Z", 25000],
    ["2020-05-08T14:11:59.604Z", -642.21],
    ["2020-05-27T17:01:17.194Z", -133.9],
    ["2020-07-11T23:36:17.929Z", 79.97],
    ["2020-07-12T10:51:36.790Z", 1300],
  ]),
};

const account2 = {
  owner: "Jessica Davis",
  movements: [],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    // "2023-03-09T13:15:33.035Z"
    //* these strings are in the ISO format.
  ],
  currency: "USD",
  locale: "pt-PT",
  transactions: new Map([
    [new Date(2023, 2, 6).toISOString(), 5000],
    ["2019-11-30T09:48:16.867Z", 3400],
    ["2019-12-25T06:04:23.907Z", -150],
    ["2020-01-25T14:18:46.235Z", -790],
    ["2020-02-05T16:33:06.386Z", -3210],
    ["2020-04-10T14:43:26.374Z", -1000],
    ["2020-06-25T18:49:59.371Z", 8500],
    ["2020-07-26T12:01:20.894Z", -30],
  ]),
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//todo Displaying the movements.

function dateFormat(transDate) {
  // const fdate = `${transDate.getDate().toString().padStart(2, "0")}/${(
  //   transDate.getMonth() + 1
  // )
  //   .toString()
  //   .padStart(2, "0")}/${transDate.getFullYear()}`;
  //* lets internationalize the above bit also,
  const fdate = new Intl.DateTimeFormat(curr_account.locale, {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(transDate);

  const daysPassed = Math.floor((new Date() - transDate) / (24 * 3600 * 1000));

  if (daysPassed === 0) {
    return "Today";
  } else if (daysPassed === 1) {
    return "Yesterday";
  } else if (daysPassed <= 3) {
    return `${daysPassed} days ago`;
  } else {
    return fdate;
  }
  // console.log(daysPassed);

  // return fdate;
}

const displayMovements = function (account, sort = false) {
  // console.log(sort);
  containerMovements.innerHTML = ``;
  //* we basically empty the whole container first.

  const transac = sort
    ? [...account.transactions].sort((p1, p2) => p1[1] - p2[1])
    : [...account.transactions];

  //* notice here slice method is sued tok create a copy of the array because we know that sort() mutates the original array, which we dont want.

  transac.forEach(function (currMov, idx) {
    const transType = currMov[1] > 0 ? "DEPOSIT" : "WITHDRAWAL";

    const transDate = dateFormat(new Date(currMov[0]));

    const reqHtml = `
    <div class="movements__row">
    <div class="movements__type movements__type--${transType.toLowerCase()}">${
      idx + 1
    } ${transType}</div>
    <div class="movements__date">${transDate}</div>
    <div class="movements__value">${new Intl.NumberFormat(curr_account.locale, {
      style: "currency",
      currency: curr_account.currency,
    }).format(currMov[1].toFixed(2))}</div>
  </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", reqHtml);
    //* the above functions basically parses the normal text as html or xml, therefore it is useful in our case of template literals.
  });
};

// displayMovements(account1.movements);

//todo calculating balance.

const calcBalance = function (account) {
  const balance = [...account.transactions.values()].reduce(
    (acc, curr) => acc + curr,
    0
  );

  labelBalance.textContent = `${new Intl.NumberFormat(curr_account.locale, {
    style: "currency",
    currency: curr_account.currency,
  }).format(balance.toFixed(2))}`;
};

// console.log(calcBalance(account1));

//todo calculating summary that is in and out

const calcSummary = account => {
  labelSumIn.textContent = new Intl.NumberFormat(curr_account.locale, {
    style: "currency",
    currency: curr_account.currency,
  }).format(
    [...account.transactions.values()]
      .filter(mov => mov > 0)
      .reduce((acc, curr) => acc + curr, 0)
      .toFixed(2)
  );

  labelSumOut.textContent = new Intl.NumberFormat(curr_account.locale, {
    style: "currency",
    currency: curr_account.currency,
  }).format(
    [...account.transactions.values()]
      .filter(function (mov) {
        return mov < 0;
      })
      .reduce(function (acc, mov) {
        return acc + Math.abs(mov);
      }, 0)
      .toFixed(2)
  );

  //* i have implemented using both the arrow functions as wel as the normal anonymous functions.
  //* we also know each of these methods return a new array(no harm tok original array), so chaining is possible.

  //todo for interests assume we get 1.2% on each deposit, and bank only pays u that if that 1.2% is greater than 1.

  labelSumInterest.textContent = new Intl.NumberFormat(curr_account.locale, {
    style: "currency",
    currency: curr_account.currency,
  }).format(
    [...account.transactions.values()]
      .filter(curr => curr > 0)
      .map(function (curr) {
        return curr * account.interestRate * 0.01;
      })
      .filter(curr => curr >= 1)
      .reduce(function (acc, curr) {
        return acc + curr;
      }, 0)
      .toFixed(2)
  );
  //* we obviously know 0 is the initial acc value.
};

// calcSummary(account1);

//todo computing the usernames
// const user = "Jonas Schmedtmann";
// const username = user
//   .toLowerCase()
//   .split(" ")
//   .map(word => word[0])
//   .join("");

//* again remember the beautiful usage of the arrow functions, like when return is not required, we will now compute this for all the accounts.

const computingUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username =
      account.username ??
      account.owner
        .toLowerCase()
        .split(" ")
        .map(word => word[0])
        .join("");
  });
  //* it is worthy noting that the string operations like tolowercase() does not mutate the original strings, so our original account.owner is still intact.
  //* we also remember null coalescing operator.
};

computingUsernames(accounts);
//todo implementing the logout functionality

const startLogoutTimer = function () {
  let totalSec = 200;

  const tick = () => {
    const timeMin = Math.trunc(totalSec / 60);
    const timeSec = totalSec % 60;

    labelTimer.textContent = `${timeMin}:${timeSec
      .toString()
      .padStart(2, "0")}`;
    totalSec--;

    if (totalSec < 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Login to get started";
      containerApp.style.opacity = 0;
    }
  };
  //* we have to given the name to the setInterval so that we can clear it at some point.
  tick();
  //* we call the tick() once, so that it gets executed immediately once, and then after each second, setInterval executes it.
  const timer = setInterval(tick, 1000);
  return timer;
};

//todo implementing the login feature

// console.log(accounts);
let curr_account, timer;

btnLogin.addEventListener("click", function (event) {
  //* since this is the button of a form, whenever this is clicked the page reloads, we don't want that, preventDefault() is used.
  event.preventDefault();

  curr_account = accounts.find(
    acc =>
      acc.username === inputLoginUsername.value &&
      acc.pin === Number(inputLoginPin.value)
  );

  if (curr_account) {
    labelWelcome.textContent = `Hey! ${curr_account.owner.slice(
      0,
      curr_account.owner.indexOf(" ")
    )}`;

    // const now = new Date();
    // labelDate.textContent = `${now.getDate().toString().padStart(2, "0")}/${(
    //   now.getMonth() + 1
    // )
    //   .toString()
    //   .padStart(2, "0")}/${now.getFullYear()}, ${now
    //   .getHours()
    //   .toString()
    //   .padStart(2, "0")}:${now.getMinutes()}`;
    //* the above bit is without internationalization
    //* with internationalization
    //* navigator.language returns the user's locale.

    labelDate.textContent = new Intl.DateTimeFormat(curr_account.locale, {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(new Date());

    containerApp.style.opacity = 1;

    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    inputLoginPin.blur(); //* this loses the focus from the LoginPin field.

    if (timer) clearInterval(timer);
    timer = startLogoutTimer();
    displayMovements(curr_account);
    calcSummary(curr_account);
    calcBalance(curr_account);
  }

  //* the above is the find method which is very similar to the filter() but it return the first matching instance, again the callback() is called for each array element until a match is found.
  // console.log(curr_account);
});

//todo implementing the transfer feature

btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();
  //because we don't want to the page to reload because that is the form submit button
  const amount = Number(inputTransferAmount.value);
  // console.log(amount);
  let toAccount = inputTransferTo.value;

  toAccount = accounts.find(a => a.username === toAccount);

  if (
    toAccount &&
    amount &&
    toAccount !== curr_account &&
    amount <=
      [...curr_account.transactions.values()].reduce((acc, val) => acc + val, 0)
  ) {
    //* now just empty the fields of the transaction was successful.
    inputTransferAmount.value = inputTransferTo.value = " ";

    // curr_account.movements.push(-amount);
    // curr_account.movementsDates.push(new Date().toISOString());
    const transDate = new Date();
    curr_account.transactions.set(transDate.toISOString(), -amount);
    // toAccount.movements.push(amount);
    // toAccount.movementsDates.push(new Date().toISOString());
    toAccount.transactions.set(transDate.toISOString(), amount);
    displayMovements(curr_account);
    calcSummary(curr_account);
    calcBalance(curr_account);

    //* we reset the timer again.
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

//todo close account functionality

btnClose.addEventListener("click", e => {
  e.preventDefault();
  const account = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);

  // console.log(account, pin);

  if (account === curr_account.username && pin === curr_account.pin) {
    inputClosePin.value = inputCloseUsername.value = " ";
    const accDelIndex = accounts.findIndex(acc => acc.username === account);

    accounts.splice(accDelIndex, 1); //* deleting that particular account.

    //* now we hide the UI
    containerApp.style.opacity = 0;
  }
});

//todo implementing loan functionality.

btnLoan.addEventListener("click", function (ev) {
  ev.preventDefault();
  //* we can authorize a loan only if the user contains a deposit such that it is greater than 10% of the request.

  const loanAmt = Math.floor(Number(inputLoanAmount.value));

  // console.log(loanAmt);
  if (loanAmt <= 0) {
    return;
  }

  const whetherLoan = [...curr_account.transactions.values()].some(
    mov => mov > 0 && mov > 0.1 * loanAmt
  );

  if (whetherLoan) {
    // curr_account.movements.push(loanAmt);
    // curr_account.movementsDates.push(new Date().toISOString());
    //* since in real life, allotting loan takes some time, lets have setTimeout
    inputLoanAmount.value = " ";
    inputLoanAmount.blur();
    setTimeout(function () {
      curr_account.transactions.set(new Date().toISOString(), loanAmt);

      displayMovements(curr_account);
      calcSummary(curr_account);
      calcBalance(curr_account);
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 2000);
  }
  //*basically if the movements contain at least one element(some) satisfying the condition given in the callback, it returns true ont he very first element.
});

let isSorted = false;
//todo implementing sort.
btnSort.addEventListener("click", () => {
  // if (isSorted) {
  //   isSorted = false;
  //   displayMovements(curr_account, false);
  // } else {
  //   isSorted = true;
  //   displayMovements(curr_account, true);
  // }
  //* the above if-else code block can be made simpler, lets see how.
  displayMovements(curr_account, !isSorted);
  isSorted = !isSorted;
});

////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//* a practical example of Array.from(),

let liItems;
labelBalance.addEventListener("click", () => {
  liItems = Array.from(document.querySelectorAll(".movements__value"));
  //* querySelectorAll returns a node list which is array like or an iterable
  console.log(liItems.map(item => Number(item.textContent)));

  //* now you could use the holy grail array methods like map,filer,reduce,find,findIndex, which all take the callback functions.
});

//* array.from is used to create arrays from an iterable or array like elements.
