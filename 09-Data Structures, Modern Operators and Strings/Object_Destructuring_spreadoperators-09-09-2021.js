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
    }

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

//Spread Operators(...)

const arr = [7, 8, 9];
const badArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArray);

const newArray = [1, 2, ...arr];
console.log(newArray);

const newMenu = [...restaurant.mainMenu, 'Noodles'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 arrays
const menu = [...restaurant.starteMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets. NO Objects 
const str = 'Nishank';
const letters = [...str,' ', 'S.khgk'];
console.log(letters);
console.log(...str);

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