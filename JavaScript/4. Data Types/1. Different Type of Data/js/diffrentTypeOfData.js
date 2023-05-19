// Number : double, float, int : 123* 10**5 = 123e5; 

// String: Combination with char+num+special-character;

// Bolien: true/ false;

// Array: Homegious data type of multi collection.

// Object: Special array / Structure as in C / Dictionary in Python / and Associative array in PHP / 

// null, emty value, undefine , NaN ;


// var x = 0xB; // Hexa number : 0x+then type hexa number ;

// console.log(x);

// convert binary/octal/hexa toString(base-of number),

// var a = x.toString(2);
// var b = x.toString(8);
// var c = x.toString(16);
// console.log(a , b, c);

// string to variable : parseInt(variable name) / parseFloat()


var x = 0x187;
x.toString(2);
console.log(x); // convert Hexa to Binary;

var y= x.toString(); // number to string;
console.log(y); 

var z = parseInt(y); // string to int number ;
z = parseFloat(y);
console.log(z);

// floation point limit: variable.toPrecision();

var pi = 3.1416;

var lim = pi.toPrecision(3);
console.log(lim);

//isNaN() : is not a number then return : true , either false;

var c = 87;

console.log(isNaN(c));

c = "178" // though it is number but isNaN return as False cz we can "178"-"8" , that's why;

/*
<pre> var x; 
x = 3.141;
 x = 34; 
 x = 123e5;
 // 123 * 10 ** 5 x = 123e-5; 
// 123 * 10 ** -5 
// Numbers takes 64 bits
 // + can be used for both addition and conatenation "34" + "45" 
 // will be string 34 + "45" 
 // will be string "34" + 45 
 // will be string "The result is " + 34 + 45 34 + 45 + "is the result" 34 + 45 + "13" 
 //Numeric Strings "25"-"5" "25"/"5" // result 10 "25"*"5" "25"%"5" "25"+"5" 
 //exception //Infinity var num = Infinity; 25/0
  // will get Infinity 
 //Hexa Decimal Numbers var x = 0xBB x.toString() 
 // Returns number as string x.toString(16); 
 var x = 3.1416; x.toPrecision(); 
 x.toPrecision(2); x.toPrecision(4);
  x.toPrecision(6); 
  var x = "123" parseInt(x); 
  x = "123.45" parseFloat(x);
   isNaN(x); 
   //Links //https://www.w3schools.com/jsref/jsref_obj_number.asp 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number</pre>
*/