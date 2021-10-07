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
const high5 = function(){
    console.log('Hi');
} 

document.body.addEventListener('click', high5);