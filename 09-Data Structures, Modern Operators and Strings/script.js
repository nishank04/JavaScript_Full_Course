'use strict';

const restaurant = {
    name: "Garima's Kitchen",
    Location: 'Cyber Hub, DLF Phase-3',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starteMenu: ['Focaccia', 'Bruchetta', 'Garlic Bread', 'Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex){
        return [this.starteMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};
////Destructuring Arrays

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, arr);
// //Destructuring 
// const [x, ,y] = arr;
// console.log(x, y);

// let [main, ,secondary] = restaurant.categories;
// console.log(restaurant.categories);
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Recieve 2 return values from the function through destructuring
// const [starter, mainCourse] = restaurant.order(2, 0)
// console.log(starter, mainCourse);
// //Nested array and destructuring
// const nested = [2, 4, [5, 6]];
// const [i, ,[j, k]] = nested;

// console.log(i, j, k);

// //Default value

// const [p=1, q=1, r=1] = [8,9];
// console.log(p, q, r);