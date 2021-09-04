'use strict'
//Scoping in practice

// function calcAge(birthYear){
//     const age = 2037 - birthYear;
//     function printAge(){
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);
        
//         if (birthYear >=1981 && birthYear <= 1996) {
//             var millenial = true;
//             const firstName = 'Steven';
//             output = 'NEW OUTPUT';
//             const str = `you are millenial ${firstName}`;
//             console.log(str);
//             function add(a, b){
//                 return a + b;
//             }
//         }
//         //console.log(millenial);
//         console.log(add(2,3));
//         console.log(output);
//     }
//     //console.log(output);
//     printAge();
//     return age;
// }
// const firstName = 'Jonas';
// calcAge(1991);
//console.log(age);

//Hoisting and TDZ

//variables
//console.log(me);
//console.log(job);
//console.log(year);
// var me = 'jonas';
// let job = 'teacher';
// const year = 1919;

//function
//console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow);
// function addDecl(a, b){
//     return a + b;
// }

// const addExpr = function(a, b){
//     return a + b;
// }

// var addArrow = (a,b) => a +b;

//Example

// if(!numProduct) deleteShoppoingCart();

// var numProduct = 10;

// function deleteShoppoingCart () {
//     console.log('All items are deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;
// console.log(window);
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

/////this keyword
//console.log(this);
// const calcAge = function(birthYear){
//     console.log(this);
// }
// calcAge(1991);

// const calcAgeArrow = birthYear =>{
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAgeArrow(1980);

// const jonas = {
//     year: 1991,
//     calcAge: function(){
//         console.log(this);
//         console.log(2037 - this.year);
//     },
// };
// jonas.calcAge();

// const mat = {
//     year: 2017,
// };

// mat.calcAge = jonas.calcAge;
// mat.calcAge();

// Regular Functins vs. Arrow Function
