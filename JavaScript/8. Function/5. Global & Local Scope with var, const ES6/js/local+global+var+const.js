// var variableName: var can declear multiple same variable , but let can't. var Variable value change in if()/for() scope if variable reassign but for function ()socpe .

// const: value fix, can't reassign value for second time.

// Global Scop: Access variable value from any where or Local scope also .

// Function Scop: inside function scope is also known as Local Scope.

//**** Alway use let and const for avoiding error */

// --------------------------------------------------------------code : for example

// Global Scope :-----------------------------------
// var a = 1;
// let b = 2;
// const c = 3;
// console.log(`Global Scope: `, a, b, c);
// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log(`Functions Scope: `, a, b, c);
// }
// test();
// console.log(`Global Scope: `, a, b, c);
// if (true) {
//     var a = 7;
//     let b = 8;
//     const c = 9;
//     console.log(`If Scope: `, a, b, c);
// }
// console.log(`Global Scope: `, a, b, c);
// for (let a = 0; a < 10; a++) 
// { console.log(`Loop: `, a); }
// console.log(`Global Scope: `, a, b, c)


// let fun = () => { let a = 6 }; 

// console.log(a);

