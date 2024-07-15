const  arr = [1,2,3,4,5,6,7,8,9,10];




// #map:===============================================================================================
// Map fun: traverse tho whole array element and return the total  modify element of array ex : arr[]


function modify(x){

   //return x*2 of arr[].

   return x*2;
}

let map_value = arr.map(modify);

console.log("map function =>" ,map_value);
// #filter:================================================================================================
// filter fun: filter the array element and return the element which satisfy the condition ex : arr[]


function filter(x){
    if(x%2==0){
        return x;
    }
}

let filter_value = arr.filter(filter);

console.log("filter function =>" ,filter_value);

// #reducer:===============================================================================================
// -------------




// sum or max :

function sum(arr){

    let sum = 0;

    for (let i= 0; i<arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

// console.log(sum(arr));

// #-----------------------------reducer --------------------------
// It's use for sum , avg, max, min etc.
//here accumulator = sum , and currentValue = arr[i] and 0 = staring value of this reducer fn()

const output = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("reducer_function =>",output);


// #some function:===============================================================================================
// some fun: if condition is true for some of array element then use this function, filter the array element and return the element which satisfy the condition ex : arr[]

function some(x){
    if(x>5){
        return x;
    }
}

let some_value = arr.some(some);

console.log("some function =>" ,some_value);
// #every function:===============================================================================================
// every fun: if condition is true for all of array element then use this function, filter the array element and return the element which satisfy the condition ex : arr[]

function every(x){
    if(x>5){
        return x;
    }
}

let every_value = arr.every(every);

console.log("every function =>" ,every_value);

// #Slice function : ==============================================================================================
// slice fun: slice the array element and return the element which satisfy the condition ex : arr[]
// (method) Array<number>.slice(start?: number, end?: number): number[]

function slice(x){
    if(x>5){
        return x;
    }
}

let slice_value = arr.slice(slice);

console.log("slice function =>" ,slice_value);

// ----------------------------------------------------------------
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

console.log(citrus);
// ----------------------------------------------------------------

// #Splice function : ==============================================================================================
// splice fun: splice the array element and return the element which satisfy the condition ex : arr[]
// (method) Array<number>.splice(start: number, deleteCount?: number): number[] (+1 overload)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// method splice(start: number, deleteCount?: number, ...items: T[]): number[] | here items: T[] means any type of array can be added.



function splice(x){
    if(x>5){
        return x;
    }
}

let splice_value = arr.splice(splice);

console.log("splice function =>" ,splice_value);



// -------------------------------------------
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi");
// -------------------------------------------
