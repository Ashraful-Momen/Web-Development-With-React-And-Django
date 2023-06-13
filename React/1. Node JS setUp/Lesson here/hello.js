// console.log('Hello World');

// console.log('This code run in directly desktop ');

// console.log(`I am run by node 
// whick is environment setup for any desktop pc `);

//------------------------How to use package: -----------------------

//import package: 

var format = require('date-format');

let time = format('hh:mm:ss.SSS', new Date()); // just the time

 time = format(`dd-MM-yy`);
console.log(time)