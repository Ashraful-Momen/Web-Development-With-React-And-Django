// Rest Operator ... (left side rule)
// Used: when making destructuring patterns, [destructure, use 'rest...' operator] = array/obj
// The rest operator collects the remaining elements into a new array/object

// ARRAY EXAMPLE
let fruits = ['apple', 'grape', 'mango', 'jackfruit'];
let [first, second, ...third] = fruits
// first = 'apple' (first element)
// second = 'grape' (second element) 
// ...third collects the REST of the elements = ['mango', 'jackfruit']

// console.log(first);    // Output: apple
// console.log(second);   // Output: grape  
// console.log(third);    // Output: ['mango', 'jackfruit']

// OBJECT EXAMPLE
let person = {
    fname: "Simanta",
    lname: "Paul",
    dob: "8-26-1995"
}

let {fname, ...lname} = person
// fname = "Simanta" (extracts the fname property)
// ...lname collects the REST of the properties = {lname: "Paul", dob: "8-26-1995"}

// console.log(fname);    // Output: Simanta
// console.log(lname);    // Output: {lname: "Paul", dob: "8-26-1995"}

// FUNCTION PARAMETER EXAMPLE (REST operator)
let moreNum = [78,1,2,5,6];

let test = (name, ...numbers) => { // Rest: when used in function parameters
    console.log(name);     // First argument
    console.log(numbers);  // All remaining arguments collected into an array
}

test("Simanta", 67, 3, 3);
// Output: 
// Simanta
// [67, 3, 3]

test("Simanta", ...moreNum); // Spread: when calling function (right side)
// The ...moreNum SPREADS the array into individual arguments
// Equivalent to: test("Simanta", 78, 1, 2, 5, 6)
// Output:
// Simanta  
// [78, 1, 2, 5, 6]
