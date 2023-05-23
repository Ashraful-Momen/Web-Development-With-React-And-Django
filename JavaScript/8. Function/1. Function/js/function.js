// Functions 
// Built in Functions
//alert(); 
//console.log(); 
// User Defined Functions
// Declaration of function 
//Execution of Function
//  saySomething();
//console.log("--------"); 
//  function saySomething() { console.log("Hello!"); 
//  console.log("I am learning Javascript!"); 
//  console.log("Bohubrihi"); }
 //------------------------------------------------------------

 // Function parameter/argument 
//  function saySomenthing(fname = "Fazle", lname = "Rahat")
//  { console.log(`Hello ${ fname } ${ lname }!`); } 
 //alert("Hello"); 
 //let val = "Simanta"; 
//  let firstname = "Simanta"; 
//  let lastname = "Paul"; 
//  saySomenthing(firstname, lastname); 
//  function addNum(a=0, b=0)
//  { console.log(a+b); } 
//  addNum(4,5); 
//  addNum(3.6, 2.3);
//  //---------------------------Main Part from here : -----------------------------------

 //Normal function: 
 function printName(name){
    console.log("Hello ",name);
 }

 //Function Expression: varible name = function () {};

 var printName2 = function(name2){
    console.log("hello ",name2);
 }

 //Arrow function: variable name = (multiple parameter/parameterValue is Agrument) => {};

 var printName3 = (name3) =>{
    console.log("hello ",name3);

 };

 printName("Ashraful");
 printName2("Momen");
 printName3("Shuvo");