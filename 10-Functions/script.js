//Default Parameters
// const bookings = [];

// const createBooking = function (
//     flightNum,
//     numPassengers = 1,
//     price = 198 * numPassengers
//     ){
//        // ES5
//        // numPassengers = numPassengers || 1;
//        // price = price || 198;
//        const booking = {
//            flightNum,
//            numPassengers,
//            price
//        };
//        console.log(booking);
//        //bookings.push(booking);
//      //  console.log(bookings);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined);
// createBooking('LH123', null);

// /////Passing Arguments

// const flight = 'LH1234';
// const garima = {
//     name: 'Garima Saxena',
//     passport: 247562348907,
// }

// const checkIn = function (flightNum, passenger){
//     flightNum = 'LH5467';
//     passenger.name = 'Ms. ' + passenger.name;

//     if(passenger.passport == 247562348907){
//         alert('Checked In');
//     }else{
//         alert('wrong passport');
//     }
// };

// //checkIn(flight, garima);
// // console.log(flight);
// // console.log(garima);

// //Is the same as doing...
// const flightNum = flight;
// const passenger = garima;

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 1000000000000);
// };

// newPassport(garima);
// checkIn(flight, garima);
// console.log(flight);
// console.log(garima);

// ///Function accepting callback functions
// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// //higher-order function
// const transformer = function (str, fn) {
//     console.log(`Original String: ${str}`);
//     console.log(`Transformed String: ${fn(str)}`);

//     console.log(`Transformed By: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

//JS uses callback evrytime / all the time
// const high5 = function(){
//     console.log('Hi');
// } 

// document.body.addEventListener('click', high5);

///Function Returning Functions
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greeterHey = greet('Hey!');
// greeterHey('Garima');
// greeterHey('Nishank');

// greet('Hello') ('Garima');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hii!') ('Garima!');

///The Call and apply method
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    //book: function (){}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
        );
        this.booking.push({flight : `${this.iataCode}${flightNum}`, name});
    },
};

// lufthansa.book(239, 'Garima Saxena');
// lufthansa.book(569, 'Garima Saxena2');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    booking: [],
};
// const book = lufthansa.book;
//book(23, 'Will Smith'); this wont work

//Call Method
// book.call(eurowings, 23, 'Garima Saxena');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Will Smith');
// console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    booking: [],
};

// book.call(swiss, 583, 'Nishank Yadav');

//Apply Method
//const flightData = [583, 'George Clooney'];
// const flightData = [583, 'George Clooney 2'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);
///Bind Method//
//book.call (eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Sarina Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Nishank');

//With event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Use case of bind

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

