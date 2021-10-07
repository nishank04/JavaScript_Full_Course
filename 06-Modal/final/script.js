 'use strict';

 class Vehicle {
  constructor (name, maker, engine) {
      this.name = name;
      this. maker = maker;
      this.engine = engine;
  }
  getDetails() {
      return (`the name of the bike is ${this.name}.`)
  }
}

//Making object with the help of constructor
let bike1 = new Vehicle ('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name);
console.log(bike1.maker);
console.log(bike1.engine);


// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });
