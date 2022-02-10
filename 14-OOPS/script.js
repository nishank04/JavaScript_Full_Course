'use strict';

// const Person = function (firstName, birthYear){
//     //Instances Properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     //Never do it like this
//     // this.calcAge = function(){
//     //     console.log(2022 - this.birthYear);
//     // };
// }

// const garima = new Person('Garima', 1991);
// console.log(garima)

// //1. New {} is created
// //2. function is called, this = {}
// //3. {} linked to protoype
// //4. function is automatically return {}

// const nishank = new Person('Nishank', 1989);
// const jack = new Person('Jack', 1975);

// console.log(nishank, jack)
// console.log(nishank instanceof Person);
// //console.log(saurabh instanceof Person);

// //prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//     console.log(2022 - this.birthYear);
// }

// garima.calcAge();

// //console.log(Person)
// console.log(nishank.__proto__);
// console.log(nishank.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(nishank));

// //.prototypeoflinkedObjects
// Person.prototype.species = 'Homo Sapiens';
// console.log(nishank.species)
// console.log(Person.hasOwnProperty('species'));
// console.log(nishank.hasOwnProperty('species'));
// console.log(nishank.hasOwnProperty('firstName'));


// console.log(nishank.__proto__)
// console.log(nishank.__proto__.__proto__)
// console.log(nishank.__proto__.__proto__.__proto__)

// console.dir(Person.prototype.constructor)

// const arr = [3, 6, 4, 5, 6, 9, 3]
// console.log(arr.__proto__)

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

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/

///ES6 classes
//class expression
//const PersonCl = class {}

//Class Declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //instance methods
    //Methods will be to prototype properties
    calcAge() {
        console.log(2022 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age(){
        return 2022 - this.birthYear;
    }
    //set a property that already exist
    set fullName(name){
        if(name.includes(' ')) this._fullname = name;
        else alert(`${name} is not a full name`);
    }

    get fullName() {
        return this._fullname;
    }
    
    ///Static methods
    static hey(){
        console.log(`Hey there`);
    }
}

const garima = new PersonCl('Garima Saxena', 1991);
console.log(garima);
garima.calcAge()
PersonCl.prototype.greet = function() {
    console.log(`Hey ${this.fullName}`)
}
garima.greet()
console.log(garima.age);

//1. Class are not Hoisted
//2. Class are first-class citizen
//3. Class are executed in stric mode only

const saurabh = new PersonCl('Saurabh Singh', 1990);
PersonCl.hey();

///Seters and getters

const account = {
    owner: 'Nishank',
    movements: [200, 530, 120, 300],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    },
};

console.log(account.latest);

account.latest = 70;
console.log(account.movements);

///Object.create

const PersonProto = {
    calcAge(){
        console.log(2022 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },

};

const jacky = Object.create(PersonProto);
console.log(jacky);
jacky.name = 'Jacky';
jacky.birthYear = 1995;
jacky.calcAge();

console.log(jacky.__proto__ === PersonProto)

const alia = Object.create(PersonProto);
alia.init('Alia', 1996);
alia.calcAge();

console.log(alia)

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK
*/