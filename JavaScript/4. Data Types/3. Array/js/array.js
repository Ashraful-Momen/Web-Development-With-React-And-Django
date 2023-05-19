//array: push(), pop(), unshift(), length, CRUD = > assign value , insert , replace , delete : 

var country = ["Bangladesh", "Japan", "China"];

// console.log(country);

//country.length = 3 

country[country.length]= "Canada";
country.push("Vutan");
country[4] = "England";
country.pop();
console.log(country);

country[0] = ["Nepal"]; // replace by index;
var tem = country;
console.log(tem);// copy array ;


//================================Array Part: 2=======================================

// array.split("") => ex: var x ["Love"] = ["L", "o", "v" , "e"];

// var y = array.split() => ["Love"] 

// x = ["Bangladesh is my Country"];
// y = x.split(" ") = > ["Bangladesh","is", "my", "Country" ] => where get ' ' => replace those string devided part by part without space as words.
// y = x.split("n") = > ["Ba","is my Cou", "try" ] => where get 'n' => replace those string devided part by part.

// array to string =>, and string to array: (console code): 
// var x = "Hello Everyone, How are you?"
// undefined
// x
// 'Hello Everyone, How are you?'
// var y = x.sp
// undefined
// var y = x.split(" ") //string to array
// undefined
// y
// (5) ['Hello', 'Everyone,', 'How', 'are', 'you?']
// var z = y.toString(); //array to String
// undefined
// z
// 'Hello,Everyone,,How,are,you?'
//------------------------array to string and string to array with : array.join => separator--------------------------------
// var x = "I hope your are well";
// undefined
// x
// 'I hope your are well'
// y

// var y = x.split();
// undefined
// y
// ['I hope your are well']
// var y = x.split("");
// undefined
// y
// (20) ['I', ' ', 'h', 'o', 'p', 'e', ' ', 'y', 'o', 'u', 'r', ' ', 'a', 'r', 'e', ' ', 'w', 'e', 'l', 'l']
// var y = x.split(" ");
// undefined
// y
// (5) ['I', 'hope', 'your', 'are', 'well']
// var z = y.toString();
// undefined
// z
// 'I,hope,your,are,well'
// z = y.jo
// undefined
// z = y.join("/");
// 'I/hope/your/are/well'
// z = y.join(" ");
// 'I hope your are well'

//--------------------------------------array.sort(), array.reverse()-------------------------------------------------


//* first appy array.sort() then can apply array.reverse(); operation's need .

// country =  ['Nepal', 'Japan', 'China', 'Canada']
// country
// (4) [Array(1), 'Japan', 'China', 'Canada']

// country
// (4) [Array(1), 'Japan', 'China', 'Canada']0: ['Nepal']1: "Japan"2: "China"3: "Canada"length: 4[[Prototype]]: Array(0)
// country.sort()
// (4) ['Canada', 'China', 'Japan', Array(1)]
// country.reverse();
// (4) [Array(1), 'Japan', 'China', 'Canada']

//------------------------------Sir Code---------------------------------------

 //Collection of items countries = ["Bangladesh", "USA", "UK"] countries[0] countries[1] country = countries[0] country 
 //Mutable countries[0] = "Poland" countries countries.length; countries[countries.length] = "Norway" 
 //Push and Pop countries.push("China"); 
 // return length countries.pop() 
 // returns length countries.push("Japan", "Srilanka"); countries.shift() 
 //returns the shifted countries.unshift("Germany") // returns length
 //Empty array var numbers; 
 //numbers = [] numbers.push(1) 
 //numbers.push(78) numbers.push("One") x = "Bangladesh" var y = x.split("") x = "Bangladesh is a country" y = x.split("") y = x.split("n") z = x.split(" ") x = "Bangladesh, China, Finland" y = x.split(",") z.toString() z.join("/") x.concat(z, y); countries.sort() countries.reverse() 
 //Links //https://www.w3schools.com/jsref/jsref_obj_array.asp