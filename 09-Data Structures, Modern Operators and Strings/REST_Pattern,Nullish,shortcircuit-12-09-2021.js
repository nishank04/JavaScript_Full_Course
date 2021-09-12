'use strict';

const restaurant = {
    name: "Garima's Kitchen",
    Location: 'Cyber Hub, DLF Phase-3',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starteMenu: ['Focaccia', 'Bruchetta', 'Garlic Bread', 'Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex){
        return [this.starteMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '21:09', address}){
        console.log(`Order recieved! ${this.starteMenu[starterIndex]} 
        and ${this.mainMenu[mainIndex]} 
        will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },

};

restaurant.orderDelivery({
    time: '21:02',
    address: 'Sohna Road',
    starterIndex: 2,
    mainIndex: 2,
});

restaurant.orderDelivery({
    address: 'Sohna Road',
    starterIndex: 1,
})

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') 
with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. 
So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names 
(NOT an array) and prints each of them to the console, 
along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, 
WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/


// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


//The Nullish Coalescing Operator
// restaurant.numGuest = 0;
// const guest = restaurant.numGuest || 10;
// console.log(guest);

//Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

//Short Circuiting (&& and ||)
// console.log('----or-----');

// //USE any data type, return any data type, short circuiting
// console.log(3 || 'Nishank');
// console.log('' || 'Garima');
// console.log(true || 0);
// console.log(null ||undefined);
// console.log('' || '');
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuest =0;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

// console.log('----AND-----');
// console.log(0 && 'Garima');
// console.log(7 && 'Nishank');
// console.log('Hello' && 23 && 'Garima');

// //practical example
// if (restaurant.orderPizza) {
//     restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// //Rest Pattern and Parameters
// //1.)Destructuring
// //spread, beacause on right side of =
// const arr = [1,2,3,4,5, ...[6,7]]
// console.log(arr);
// //REST pattern, because it's on the left hand side of =
// const [a, b, ...others] = [1,2,3,4];
// console.log(a,b, ...others);
// //Arrays
// const [pizza, , risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starteMenu,];

// console.log(pizza, risotto, otherFoods);
// //Objects

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// //functions
// const add = function (...numbers) {
//     let sum = 0;
//     for (let i=0; i<numbers.length; i++) sum += numbers[i];
//     console.log(sum);
// }

// add(2, 3);
// add(5, 3, 7, 2);
// add(8,2,5,3,2,1,4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushroom', 'onion', 'olive', 'spinach');
// restaurant.orderPizza('mushroom');

//Spread Operators(...)

// const arr = [7, 8, 9];
// const badArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArray);

// const newArray = [1, 2, ...arr];
// console.log(newArray);

// const newMenu = [...restaurant.mainMenu, 'Noodles'];
// console.log(newMenu);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //Join 2 arrays
// const menu = [...restaurant.starteMenu, ...restaurant.mainMenu];
// console.log(menu);

// //Iterables: arrays, strings, maps, sets. NO Objects 
// const str = 'Nishank';
// const letters = [...str,' ', 'S.khgk'];
// console.log(letters);
// console.log(...str);

//Real World Eaxample
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"),
// prompt("Ingredient 2?"),
// prompt("Ingredient 3?")];

// const ingredients = [];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//objects
// const newRestaurant = {FoundedIn: 1998, ...restaurant, founder: 'Nishank'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Nick\'s Dine Time';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//Destructuring Objects
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);


// const { name: restaurantName, openingHours: hours, categories: tags, } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default Values
// const {menu = [], starteMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating Variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
// ({a,b} = obj);
// console.log(a, b);

// //nested objects

// const { fri: {open: o, close: c} } = openingHours;
// console.log(o, c);