// Spread Operator ...

let numbers = [23, 1, 0, -1];

//console.log(Math.max(numbers)); // without spread operator we will get an error => NaN

//console.log(Math.max(...numbers));

let person = ["Simanta", "Paul"]

let test = (fname, lname) => {
    console.log(`Hello ${fname} ${lname}`);
}

// test(person[0],person[1]);
test(...person); // when call function and use '...' operator then it's called spread operator.


