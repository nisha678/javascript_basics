'use strict';

const murHotel = {
  name :'yat bhaat pua jay',
  location: 'hahchara bhurbandha, morigaon, assam',
  categories: ['bhaat', 'mangkho', 'maas', 'koni'],
  starterMenu: ['papor', 'saah', 'nimki'],
  mainMenu: ['mangkho-bhaat', 'maas-bhat', 'dail-bhaat', 'koni-bhaat'],

  openingHours : {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open :11,
      close: 21,
    },
    sat : {
      open: 0,
      close:24
    },
    
  },
   
  order : function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery : function({starterIndex =1,
    mainIndex=1, 
    time= '20.00',
    address}) {
    console.log(`Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta: function(ing1, ing2, ing3) {

    console.log(`Here is your delicioud pasta with ${ing1}, ${ing2}, ${ing3}.`);
    },
    orderPizza: function(mainIngredient, ...otherIgredient) {
      console.log(mainIngredient);
      console.log(otherIgredient);

    }
};

/*
//////////////////////////
//LOGICAL ASSIGNMENT OPERATOR/
//////////////////////
const rest1 = {
  name: 'Capri',
  numGuests : 0,
}
const rest2 ={
  name: 'la plazza',
  owner: 'glovanni rossi'
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10; //OR
// rest2.numGuests ||=10; // retunsfisrt truthy value
rest1.numGuests ??= 10; //NULLISH reirn null value
rest2.numGuests ??=10; //

rest2.owner &&= '<ANONYMOUS>'; //AND

console.log(rest1);
console.log(rest2);
*/

/*
//////////////////////////////////
//NULLISH COALESCING OPERATOR////
//////////////////////////////////
murHotel.numGuests =0;
const guests = murHotel.numGuests ? murHotel.numGuests :10;
console.log(guests);

//Nullish: null and undefined
const guestCorrect =murHotel.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
//////////////////////////////
//SHORT-CIRCUITING
/////////////////////////////
//use any data type, return any datatype, short-circuiting
console.log('----OR----');
console.log(3 || 'nisha');
console.log('' || 'nisha');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 23 || null);

murHotel.numGuests =23;
const guests = murHotel.numGuests ? murHotel.numGuests :10;
console.log(guests);

const guests2= murHotel.numGuests || 10;
console.log(guests2);

console.log('------AND------');
console.log(0 && 'nisha');
console.log('nisha' && '1');

console.log('HEELO '&& 23 && 'null');

if (murHotel.orderPizza) {
  murHotel.orderPizza('mushrooms', 'spinach');
}
murHotel.orderPizza && murHotel.orderPizza ('mushrooms', 'onion');
*/

/*
//REST/////////////
//1)Destructuring
//SPREAD, because of RIGHT SIDE of =
const arr= [1, 2, ...[5, 6]];

//REST , because on LEFT side of =
const [a, b , ...others] = [1, 2, 5, 6, 7, 8];
console.log(a, b, others);

const [ mangkhobhaat , maasbhat, 
, , ...otherfood]= [...murHotel.mainMenu, ...murHotel.starterMenu];
console.log(mangkhobhaat, maasbhat, otherfood);

//Objects
const {sat, ...weekdays}= murHotel.openingHours;
console.log(weekdays);

//2)Fuctions
const add = function (...numbers) {
  let sum = 0;
  for (let i =0; i < numbers.length; i++) 
    sum += numbers[i];
    console.log(sum); 
  };
add (2, 3);
add(3, 6, 6, 4, 9, 5);
add (5, 2, 4, 7, 4, 7, 3, 5,46, 7,57, 6 ,9);

const x =[23, 45, 67];
add(...x);

murHotel.orderPizza('mushrooms', 'spinach', 'olives', 'onion');
murHotel.orderPizza('mushrooms');
*/

/*
////////////////////////////////////
//spread operator (...)
///////////////////////////////////
const arr =[5, 6, 7];
const badNewArr = [1, 2,  arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr =[1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1 , 2, 5, 6, 7);

//adds new element
const newMenu = [...murHotel.mainMenu, 'butter-Chicken'];
console.log(newMenu);

//use case: copy array
const newMenuCopy =[...murHotel.mainMenu];

//join 2 arrays or more
const menu= [...murHotel.mainMenu , ...murHotel.starterMenu];
console.log(menu);

//iterables: arrays, strings, map, sets, NOT Objects
const str = 'nisha';
const letters= [...str, '', 'P.'];
console.log(letters);
console.log(...str);
console.log('');
//console.log(`${...str}`) //multiple values separarted by ',' are usually only expected when we pass arguments into the function.

//multiple , elements passed as multiple argu
*/

/*
//real world examples
const ingredients = [
  prompt ('let\'s make pasta Ingredient 1?'), 
  prompt('Ingredient 2?'), 
  prompt('Ingredient 3?'),
];
  console.log(ingredients);

  murHotel.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
  //or use es6 language
  murHotel.orderPasta(...ingredients);

//objects are not iterables but
const newRestaurant = {foundedIn: 2000, ...murHotel, founder : 'Nisha'};
console.log(newRestaurant);

const newRestaurantCopy = {...murHotel};
newRestaurantCopy.name= 'Papa pator hotel';
console.log(newRestaurantCopy.name);
console.log(murHotel.name);
*/


/*
////////////////////////////
//object destructuring/////
//////////////////////////

murHotel.orderDelivery ({
  time: '22:30',
  address: ' earth',
  mainIndex: 0,
  starterIndex: 0,
});

//if the amount of paarameter increases we can keep this technique in mind of assigning default value to the paarmeter. or we dont use the deafult value. 
//for deafult value assigned to the objects.
murHotel.orderDelivery ({
address: 'mars',
starterIndex: 1
});


const {name, openingHours, categories} = murHotel;
console.log(name, openingHours, categories);

//calliing by different names
const {name: mainaHotel, 
  openingHours: khulaTime, 
  categories:vibhinDhoron
}= murHotel;
console.log(mainaHotel, khulaTime, vibhinDhoron);

//use
//useful when we are not using hardcoded data, in real world we dont actually know what our data looks like so, this is very useful then*/
//deafult values
/*
const {
  menu= [],
  starterMenu: starter =[] } = murHotel;
  console.log(menu, starter); 

//mutating variable while destructing objects.
let a = 11;
let b = 56;
const obj ={a: 23, b : 89, c: 87};
({a, b} = obj);
console.log(a, b);

//nested objects
const{fri : {open: o, close: c}} = openingHours;
console.log(o, c); 

*/

/*
///////////////////////////////////////
Destructuring Array
//////////////////////////////////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

//mutating variable while destructring arrays.
let [main, secondary] = murHotel.mainMenu;
console.log(main, secondary);

// let temp = main;
// main = secondary;
// secondary= temp;
// console.log(main, secondary)

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, maincourse] =(murHotel.order(1, 0));
console.log(starter, maincourse);


//nested destructuring//////
const nested =[2, 4, [5, 6]];
// const [i, j] = nested;
// console.log(i, j);
const[ i, ,[j , k]]= nested;
console.log(i, j ,k);

//default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/


