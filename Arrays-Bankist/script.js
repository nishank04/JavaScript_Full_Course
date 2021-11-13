'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

///functions
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}
    </div>
    <div class="movements__value">${mov}</div>
  </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html )
  });
};

//displayMovements(account1.movements)

//calculate and display balance in our app
const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;

};
//calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov,0)
  labelSumIn.textContent = `${incomes}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov,0)
  labelSumOut.textContent = `${Math.abs(out)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr)
      return int >=1
    })
    .reduce((acc, int) => acc + int,0);
  labelSumInterest.textContent = `${interest}`;
}

//calcDisplaySummary(account1.movements)

 
///Create UserName

//Practice - Hardcoded value
// const user = 'Steven Thomas Williams'; //stw
// const username = user
// .toLowerCase()
// .split(' ')
// .map(function (name) {
//   return name[0];
// }).join('');

const user = 'Steven Thomas Williams'; //stw
const username = user
 .toLowerCase()
 .split(' ')
 .map(name => name[0]).join('');


//Dynamic value taken from array of object in our application
// const createUsernames = function (user) {
//   const username = user.toLowerCase()
//     .split(' ')
//     .map(name => name[0]).join('');
//     return username;
// };

const createUsernames = function (accs) {
  console.log(accs);
  accs.forEach(function (acc) {
    console.log(acc);
    acc.username = acc.owner.toLowerCase()
    .split(' ')
    .map(name => name[0]).join('');
    
  });
};
createUsernames(accounts);
//console.log(accounts);
//console.log(username)

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);

  //Display balance
  calcDisplayBalance(acc);

  //Display Summary
  calcDisplaySummary(acc)
}


///implementing login
//event handler
let currentAccount;
btnLogin.addEventListener('click', function(e){
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount)

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI & message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount)
  }
})

btnTransfer.addEventListener('click', function (e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value);
    //console.log(amount,recieverAcc )
    
    if (
      amount > 0 &&
      recieverAcc &&
      currentAccount.balance >= amount &&
      recieverAcc.username !== currentAccount.username
    ) {
      //doing the transfer
      currentAccount.movements.push(-amount)
      recieverAcc.movements.push(amount)

      updateUI(currentAccount)
      //console.log('Transfer Valid')
    }

    inputTransferAmount.value = inputTransferTo.value = '';
  })

btnLoan.addEventListener('click', function (e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount >0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    //Add movement
    currentAccount.movements.push(amount);
    //update UI
    updateUI(currentAccount)
  }
})

btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.
    username &&
    Number(inputClosePin.value) === currentAccount.pin){
      const index = accounts.findIndex(
        acc => acc.username === currentAccount.username
      );
      console.log(index)
      //.indexOf(23)
      //Delete an account
        accounts.splice(index, 1)
        //hide UI
        containerApp.style.opacity = 0;
    }
})

/*Interview Questions
1. Event loop concepts(single threaded then how asycronous)
2. Array methods
3. Destructuring
4. Otional chaining
5. Prototypal inheritance(oops). Functional and procedural and classes
6. Asynchronous - Async/await, promises
7. Callbacks, callback hell(how to avoid callback hell)
8. Closures, IIFE, first order functions
9. Execution context
10. JSX
11. diff b/w elements and components
12. create components
13. state, props(why should we not update stae directly)
14. lifecycle methods
15. Redux
16. controlled and uncontrolled components
17. create elements and clone elements
18. set state with dynamic key name
19. key fragments
20. how to prevent components in getting rendered
21. route splitting
22. high order components
23. Middleware to redux
24. Relay is different than redux
25. mapstatetoprops vs mapdispatchtoprops
26. RxJs
//Coding challenge 2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/

////Simple Array Methods
//let arr = ['a', 'b', 'c', 'd', 'e'];

//slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

///splice
//console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// ///Reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr.reverse());
// console.log(arr2.reverse());
// console.log(arr2);
// console.log(arr);

// //concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr2, ...arr]);

// ///join
// console.log(letters.join(' - '));

///loooping Arrays: forEach


// for (const movement of movements) {
//     if(movement > 0) {
//         console.log(`You deposited ${movement}`);
//     } else {
//         console.log(`You withdrew ${Math.abs(movement)}`);
//     }
// }

//console.log('-----forEach-----');

// movements.forEach(function (movement){
//     if(movement > 0) {
//         console.log(`You deposited ${movement}`);
//     } else {
//         console.log(`You withdrew ${Math.abs(movement)}`);
//     }
// })


//optimmised version
// console.log('----with indexes----')
// for (const [i, movement] of movements.entries()) {
//     if(movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// }

// console.log('-----forEach-----');

// movements.forEach(function (mov, i, arr) {
//     if (mov > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${mov}`);   
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//     }
// })

///forEach with maps
// const currencies = new Map([
//     ['USD', 'United States Dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pond Sterling'],
// ]);

// currencies.forEach(function(value, key, map) {
//     console.log(`${key}: ${value}`)
// });

// ///forEach with set
// const uniqueCurrencies = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(uniqueCurrencies);
// uniqueCurrencies.forEach(function(value, _, map){
//     console.log(`${value}: ${value}`);
// })

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy ")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);*/

//const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// })

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementDescriptions = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`
//   }
// })

// const movementDescriptions = movements.map(
//   (mov, i) =>
//   `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 
//   'withdrew'} ${Math.abs(mov)}
//   }`
// )

// console.log(movementDescriptions);

// const deposit = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposit)

// const depositFor = [];
// for (const mov of movements) if (mov > 0) depositFor.push(mov);
// console.log(depositFor);

// const withdrawals = movements.filter(mov => mov <0);
// console.log(withdrawals);

//accumulator -> snowball
// const balance = movements.reduce(function (acc, cur, i, arr){
//   console.log(`Iteration ${i}: ${acc}`)
//   return acc + cur;
// }, 100);
// console.log(balance);

///arrow function




// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

//Maximum Value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

///Chaining map, filter and reduce methods
// const totalDepositUSD = movements
// .filter(mov => mov > 0)
// .map(mov => mov * eurToUsd)
// .reduce((acc, mov) => acc + mov,0)
// console.log(totalDepositUSD)


///find method
// const firstWithDrawal = movements.find(mov => mov < 0)

// console.log(firstWithDrawal)

// const account = accounts.find(acc => acc.owner === 'Jonas Schmedtmann')
// console.log(account)

// some and every
console.log(movements)
//equality
console.log(movements.includes(-130))
//Some: Condition
console.log(movements.some(mov => mov === -130))
const anyDeposits = movements.some(mov => mov >1500);
console.log(anyDeposits)

//Every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

///looking separate methods | separate callbacks
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

///flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrNew = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrNew.flat(2));

//flat
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);
// console.log(accounts.map(acc => acc.movements).flat())

//flatMap
const overallBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);