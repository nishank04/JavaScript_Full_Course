'use strict';

const Person = function (firstName, birthYear){
    //Instances Properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never do it like this
    // this.calcAge = function(){
    //     console.log(2022 - this.birthYear);
    // };
}

const garima = new Person('Garima', 1991);
console.log(garima)

//1. New {} is created
//2. function is called, this = {}
//3. {} linked to protoype
//4. function is automatically return {}

const nishank = new Person('Nishank', 1989);
const jack = new Person('Jack', 1975);

console.log(nishank, jack)
console.log(nishank instanceof Person);
//console.log(saurabh instanceof Person);

//prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
}

garima.calcAge();

//console.log(Person)
console.log(nishank.__proto__);
console.log(nishank.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(nishank));

//.prototypeoflinkedObjects
Person.prototype.species = 'Homo Sapiens';
console.log(nishank.species)
console.log(Person.hasOwnProperty('species'));
console.log(nishank.hasOwnProperty('species'));
console.log(nishank.hasOwnProperty('firstName'));


console.log(nishank.__proto__)
console.log(nishank.__proto__.__proto__)
console.log(nishank.__proto__.__proto__.__proto__)

console.dir(Person.prototype.constructor)

const arr = [3, 6, 4, 5, 6, 9, 3]
console.log(arr.__proto__)

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 
*/