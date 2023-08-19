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
};

murHotel.orderDelivery ({
  time: '22:30',
  address: ' earth',
  mainIndex: 0,
  starterIndex: 0,
});

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
/*useful when we are not using hardcoded data, in real world we dont actually know what our data looks like so, this is very useful then*/
//deafult values
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



/* Destructuring Array
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


