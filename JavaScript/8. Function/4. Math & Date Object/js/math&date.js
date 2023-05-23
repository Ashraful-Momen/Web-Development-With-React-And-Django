// var value;

// value = Math.PI;
// value = Math.E;
// value = Math.ceil(1.3);
// value = Math.floor(1.3);
// value = Math.round(1.5); //0.5 then get 0.5+ either working as floor();
// value = Math.sqrt(91);
// value = Math.abs(-2);
// value = Math.ceil(Math.random() *6);  //*range-value;
// value = Math.floor(Math.random() *6);  //*range-value;
// value = Math.min(1,2,3,3,4,5,5,6,6,7,0);
// value = Math.max(1,2,3,3,4,5,5,6,6,7,7,0);

// console.log(value);

//---------------------------------------------Date()---------------------------

let val ;
let today = new Date();

// let birthday= new Date("10/28/1996");
// let birthday= new Date('10/28/1997 11:25:27');
// let birthday= new Date('Octaber 28,1997 11:25:27');
// let birthday= new Date('10-28-1997');
let birthday= new Date("10.28.1997 ");

val = today;
val = today.toString();
val = today.getMonth(); // JS count the month from 0-11months.
val = today.getDate();
val = today.getDay(); // In British day strat from sunday.
val = today.getFullYear();
val = today.getHours();
val = today.getMilliseconds();
val = today.getMinutes();
val = today.getTime(); //Since 1970 till today all ...

val = birthday;

birthday.setMonth(0);
birthday.setDate(20);
birthday.setFullYear(1990);
birthday.setHours(11);

console.log(val);