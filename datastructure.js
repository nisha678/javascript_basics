'use strict';
// VAR & OBJ DECLARATION 
const weekdays = ['mon' ,'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[4]] :{
    open: 12,
    close: 22,
  },
  [weekdays[5]] :{
    open :11,
    close: 21,
  },
  [weekdays[6]]:  {
    open: 0,
    close: 24
  },
  
};
const murHotel = {
  name :'yat bhaat pua jay',
  location: 'hahchara bhurbandha, morigaon, assam',
  categories: ['bhaat', 'mangkho', 'maas', 'koni'],
  starterMenu: ['papor', 'saah', 'nimki'],
  mainMenu: ['mangkho-bhaat', 'maas-bhat', 'dail-bhaat', 'koni-bhaat'],

  //ES6, 
  openingHours,
   
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

    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
    },
    orderPizza: function(mainIngredient, ...otherIngredient) {
      console.log(mainIngredient);
      console.log(otherIngredient);

    },
};

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//⏱  Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   ⏱ Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

//console.log(flights.split('+'));

const getCode= str => str.slice(0,3).toUpperCase();

for(const flight of flights.split('+')) {
  //console.log(flight);
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed')? '⏱': ' '}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replaceAll(':', 'h')})`.padStart(50);
  console.log(output);
}

/*
//STRINGS PART3
/////////////////////////////////////////
//Split & Join
console.log('a+very+nice+string'.split('+'));
console.log('Nisha Patar'. split(' '));
const [firstName, lastName]= 'Nisha Patar'.split(' ');

const newName= ['Ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
  const names= name.split(' ');
  const namesUpper= [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));

}

capitalizeName( 'nisha patar nishsa');
capitalizeName('Dalime patar')

//Padding
const name = 'nisha';
console.log('nisha'.padStart(15, '+').padEnd(2, '+'));

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*' );
}
console.log(maskCreditCard(697088856534536));
console.log(maskCreditCard(69557467600787));

//REPEAT
const name1 = ' nisha ';
console.log(name1.repeat(10));

const planesInLine = function(n) {
 console.log(`${n} Planes are in line ${'✈'.repeat(n)}`)
}
planesInLine(4);
planesInLine(5);
planesInLine(12);

/*
//STRING PART 2
//////////////////////////
const airline ='TAP Air Portugal';
const plane= 'A320';

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

//Fix captalization in passenger nme
const passenger = 'nIsHa';
const passengerLower = passenger.toLocaleLowerCase();
const passengerFinal= passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerFinal); 

//Comparing Emails
const email = 'hello@nisha.io';
const loginEmail= '  HelLo@NisHA.IO \n';
const trimmedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(trimmedEmail);


//replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement= 'All the passenger come to the boarding door 23. Boarding door 23';
console.log(announcement.replaceAll('door', 'gate'));

//booleans
//A320
console.log(plane.includes('A320'));
console.log(plane.startsWith('A'));
console.log(plane.endsWith('0'));

//example
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); // so there's no confusion as it is case sensitive

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');



/*
//Working with STRING PART1
//////////////////////////////
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log(airline.length);
console.log(airline.indexOf('r')); // index is case sensitive
console.log(airline.lastIndexOf('r'));

//slice methods need indexes as arguments
console.log(airline.slice(4));
console.log(airline.slice(4, 7));//end - begining

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));

console.log(airline.slice(-2));

const checkMiddleSeat = function(seat) {
  //B, E are middle seats
  const s= seat.slice(-1);
  if (s === 'B' || s ==='E')
  console.log('You got middle seat 😁');
else 
console.log('You got lucky 🤩');
}
checkMiddleSeat('11B');
checkMiddleSeat('22C');
checkMiddleSeat('3E');

//whenever we call a method on a string it gets converted to an obj
console.log(new String('Nisha'));
console.log(typeof new String('Nisha'));



/*
//MAP ITERATION//
///////////////////////////////
const question = new Map ([
  ['question', 'What is the best Programming Language in the world?'], [1, 'C'], [2, 'JAVA'], [3, 'JAVASCRIPT'], ['Correct', 3], [true, 'Your are Correct😎'], [false, 'Try Again 😪'],
]);
console.log(question);

//Convert obj to MAP
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//QUIZ APP
//FOR LOOP
console.log(question.get('question'));
for (const [key, value] of question) {
  if(typeof key ==='number')
  console.log(`Option ${key}: ${value}`);
}
// const answer = Number(prompt(`your answer`));
// console.log(answer);

// console.log(question.get(question.get('Correct')===answer));

//convert MAP tO ARRAY
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);



/*
//MAP : more useful than sets
///////////
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firence, Italy');
console.log(rest.set(2, 'Lisbon,Portugal'));

rest.set('categories', ['bhaat', 'mangkho', 'maas', 'koni']).set('open', 11).set('close', 23).set(true, 'we are open😍').set('close', 'we are closed🥱');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);

const arr =[1,2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading')

console.log(rest);
console.log(rest.size);
console.log(rest.get(arr)); // this get value is not same as set, so we have to define it first ot get the value, so: make a var arr



 

/*
//SETS
////////////
const orderset = new Set(['pasta', 'pizza', 'risotto', 'pizza', 'pasta', 'risotto']);
console.log(orderset);

console.log(new Set (''));
console.log(orderset.size);
console.log(orderset.has('pasta'));
console.log(orderset.has('paneer'));
orderset.add('Garlic Bread');
orderset.add('Garlic Bread');
console.log(orderset);
orderset.delete('Garlic Bread');
console.log(orderset);

for (const order of orderset) console.log(order);

//exmapls
const staff =['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log( new Set (['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size);
console.log(new Set('nisha patar').size);




/*
///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

 //Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
 console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

/*
///////////////////////////////////////
// Optional Chaining
if (murHotel.openingHours && murHotel.openingHours.mon)
  console.log(murHotel.openingHours.mon.open);

 console.log(murHotel.openingHours.mon);
/*
// WITH optional chaining
console.log(murHotel.openingHours.mon?.open);
console.log(murHotel.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = murHotel.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(murHotel.order?.(0, 1) ?? 'Method does not exist');
console.log(murHotel.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'nisha', email: 'hello@nisha.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');



/*
55uuuuuuuuuuuuuuuuuuuuyyyyyyyyyyyyyyyyyyyyyyy///////////////
//FOR OF LOOP////
//////////////////
const menu = [...murHotel.starterMenu, ...murHotel.mainMenu];

for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
//   console.log(`${item[0] +1}: ${item[1]}`);
// }
//above code using destructuring
for (const [i, j] of menu.entries()) {
  console.log(`${i +1}: ${j}`);
}

//console.log([...menu.entries()]);
//
*/
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


//Challenge :
/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/* solution::
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski',],
    ['Burki','Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze',],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
const [players1, players2] =game.players;
console.log(players1, players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4.
const players1Final =[...players1, 'Thiago', 'Coutino', 'Perisic'];
console.log(players1Final);
//5.
const {odds: {team1,x: draw,team2}} = game;
console.log(team1, draw, team2);
//6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
 //printGoals('Davies', 'Muller');
printGoals(...game.scored);

//The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

team1 < team2 && console.log('Team 1 is more likely to win'); 
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀

//sol to challenge 2:
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski',],
    ['Burki','Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze',],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
const[...players] = game.scored;
console.log(...players);
for (const [i, players] of game.scored.entries())
console.log(`Goal ${[i+1]} : ${players}`);
//2.use a loop to calculate the average odd and log it to the console 
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) 
console.log(average += odd);
average /= odds.length;
console.log(average);
//3.Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
for (const [team, odd] of Object.entries(game.odds))
{const teamx= team ==='x'? 'draw' : `victory ${game[ team]}`;
console.log(`Odd of the ${teamx} :${odd}`);}
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
//solution::
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski',],
    ['Burki','Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze',],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}; const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
const events = [...new Set(gameEvents.values())];
console.log(events);
//After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
console.log(gameEvents.delete(64));
//Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened, on average , every ${gameEvents.size} minutes`);
//Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      //[FIRST HALF] 17: ⚽️ GOAL
for( const [min, event] of gameEvents ) {
  const halfTime = min < 45 ? 'FIRST' : 'SECOND';
console.log(`[${halfTime}]: ${event} `);
}
*/
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
/*
//sol
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/