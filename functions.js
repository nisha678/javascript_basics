'use strict';

function function1() {
  console.log('hello');
  console.log(2 + 2);
}
function1();
function1();

//deafult value of parameter - taxPercent =0.1
function calculateTax(cost, taxPercent = 0.1) {
  console.log(taxPercent);
  console.log(cost * taxPercent);
}

calculateTax(2000, 0.2);
calculateTax(5000);

////////////Function Expression///////////////

const calcAge1 = function (birthyear) {
  return 2023 - birthyear;
};

///////////////Arrow Function//////////////
const calcAge3 = birthyear => 2023 - birthyear;
const age3 = calcAge3(1999);
console.log(age3);

/////////////////// Arrow Func with more Parameter/////////
const yearsUntilRetirement = (birthyear, firstName) => {
  const age = 2023 - birthyear;
  const retirement = 65 - age;
  //return retirement; //return explicitly
  return `${firstName} will retire in ${retirement} years`;
};
console.log(yearsUntilRetirement(1998, 'Nisha'));
console.log(yearsUntilRetirement(1977, 'Papa'));

//////Fn calling other fn///////
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apple, oranges) {
  const applePieces = cutFruitPieces(apple);
  const oangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple & ${oangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(4, 6));

/////fn caaling a fn using prev eg//////
const calcAge = function (birthyear) {
  return 2023 - birthyear;
};
const yearsUntilRetirement = function (birthyear, firstName) {
  const age = calcAge(birthyear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} will retire in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired `);
    return -1;
  }
};

console.log(yearsUntilRetirement(1950, 'mikwe'));
console.log(yearsUntilRetirement(1999, 'Nisha'));

//ADVANCE FUNCTION
//How passing argument works?

const flight = 'KH321';
const nisha = {
  //object
  name: 'Nisha Patar',
  passport: '6367579',
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'GH678';
  passenger.name = 'Ms. ' + passenger.name;

  if (passenger.passport === 6367579) {
    alert('Checked In');
  } else {
    alert('wrong passport');
  }
};
console.log(checkIn(flight, nisha));
console.log(flight);
console.log([nisha]);

//same as doing..
const flightNum = flight;
const passenger = nisha;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(nisha);
checkIn(flight, nisha);

//Higher-Order Function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//Higher order function
const transformWord = function (str, func) {
  console.log(`Original word: ${str}`);
  console.log(`Transformed word: ${func(str)}`);
  console.log(`Transformed by: ${func.name}`);
};
transformWord('NiShA is the best!', upperFirstWord);
//JS uses callback all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['NISHA', 'BOBY', 'GIGI'].forEach(high5);

//Function  returning function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Nisha');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push(`{flight: ${this.iataCode}${flightNum}, name}`);
  },
};

lufthansa.book(239, 'Nisha Patar');
lufthansa.book(399, 'Jacob');
console.log(lufthansa);

const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
book.call(eurowings, 23, 'john smith');
console.log(eurowings);

//apply()
const flightdata = [567, 'Nisha Patar'];
book.apply(eurowings, flightdata);
console.log(eurowings);

//Bind() method
const bookEW = book.bind(eurowings);
const bookLM = book.bind(lufthansa);
bookEW(23, 'Steven Beckham');

//for same flight number
const bookEW2 = book.bind(eurowings, 23); // 23 is preset
bookEW2('nihs apayat');
bookEW2('tgdifs apdat');

//when we bind objects with event listeners
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

// Partial application: preset parameter- skipped

//challenge- skipped

//invoked function expression
const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();
//IIFE: immediate;ly invoked func exp
(function () {
  console.log(`This will never run again!`);
})();
(() => console.log(`This will also never run again`))();

//Closures()
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
