'use strict';
/*
//Scoping in Practice

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName} is ${age}y.o born in the year ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //creating new var withh same name as outer scope's var.

      //reassigning outer scope's variable.
      const output = 'NEW OUTPUT VAR';
      const str = `you are not millenial , ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(output);
  }

  printAge();
  return age;
}
const firstName = 'jacob';

calcAge(1993);
*/

/*

//Why Hoisting?

console.log(me);
//console.log(job);
//console.log(year);

var me = 'nisha';
let job = 'student';
const year = 1998;

//functions
console.log(addDecl(57, 56659));
console.log(addArrow(45 * 56));

function addDecl(a, b) {
  return a * b;
}
const addExp = function (a, b) {
  return a * b;
};

var addArrow = (a, b) => a * b;
 */
//this keyword
const nisha = {
  firstName: 'nisha',
  lastName: 'patar',
  job: 'student',
  year: 1998,
  calcAge: function () {
    return 2023 - this.year;
  },
};
nisha.calcAge();

//arraow function has lexical this
const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(typeof this);
};
calcAgeArrow(1998);

//expression function this.
console.log(this);
const calcAgeExp = function (birthYear) {
  console.log(2023 - birthYear);
};
calcAgeExp(1993);

const tisha = {
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
tisha.calcAge();

const maltida = {
  year: 2001,
};
maltida.calcAge = tisha.calcAge;
maltida.calcAge();

//primitive nd reference

let lastName = 'williams';
let oldLastName = lastName;
lastName = 'davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};
const marriedJesssica = jessica;
marriedJesssica.lastName = 'davis';
console.log(`before marriage`, jessica);
console.log(`after marriage`, marriedJesssica);

const jessica2 = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'davis';
console.log(`before marriage:  `, jessica2);
console.log(`after marriage: `, jessicaCopy);
