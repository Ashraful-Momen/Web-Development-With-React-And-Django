let arr = [1,2,3,4];

// console.log(arr);

// console.log(...arr); // spread : split of an array element.

let a=[1,2,3,4] , b = [5,6,7,8]

let c = [a,b] 

// console.log(c);

let d = [...a,...b,9,10,11]; //spread: split element in one array.

// console.log(d);

let person = {
    name: 'Ashraful',
    age:24,
}

d = {person, nation: "Bangladesh"};

// console.log(d);

d = { ...person, nation : "Bangladesh"}; //spread : split element of object.

// console.log(d);

//--------------------------------

// let num = number =>{
//     console.log(number);
// }

// console.log(num(1,2,3,4)); // number varibale of the function can accept just 1 perameter.


let num = (...number) =>{  //Rest (function of paremeter receive): receive parameter as like python ***key.
    console.log(number); 
}
console.log(num(1,2,3,4,5,6))