function sum (a,b){
    return a+b;
}

console.log(sum(2,3));

// function parameter: 

let sum2 = function(a,b){
    return a+b;
}

console.log(sum2(1,2));

//arrow function: 

let sum3  = (a,b) => {
    return a+b;

}

console.log(sum3(2,3));

//arrow function: if we have 1 line code then no need the {} curly bracket. but for return sum value we have to use it{}. 

let print = () => console.log("hello");

print();

//arrow function: if we have no parameter then use (). If we have  1 parameter then use () parenthesis or without () parenthesis we can use....

let print2 = name => console.log(`${name}`);

print2('shuvo');

let sum5 = (a,b) =>  a+b; //here return a+b

console.log(sum5(1,1));

let name = (a) => a; //here return the name

console.log(`the name is `,name('shuvo'));