////Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

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
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

///Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr.reverse());
console.log(arr2.reverse());
console.log(arr2);
console.log(arr);

//concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr2, ...arr]);

///join
console.log(letters.join(' - '));

///loooping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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