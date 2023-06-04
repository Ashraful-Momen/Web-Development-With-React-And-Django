// iterator and Generator: 

// let str = "hello";

// let iter = str[Symbol.iterator]();

// console.log(iter);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// console.log("Other Codes...");

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

//----------------------------
// let array = [1,2,3,4];

// let iter2 = array[Symbol.iterator]();

// console.log(iter2.next())
// console.log("Other Codes...");
// console.log(iter2.next())
// console.log(iter2.next())
// console.log(iter2.next())
// console.log(iter2.next())
//--------------custome function for iterator: ----------------------
// let array = [1,2,3,4];
// function customIterator(arr){
//     let i = 0;
//     return {
//         next: function()
//         {
//             return arr<arr.length ?{value: arr[i++] , done:false}:{value: arr[i++] ,done:false}
//         }
//     }
    
// }

// let member = customIterator(array);

// console.log(member.next());
// console.log(member.next());
// console.log(member.next());
// console.log(member.next());
// console.log(member.next());

//------------------------Generator:------------------------------

function* generator(){
    console.log("before yeild 1");
    yield 1;
    return// if return here other code not be executed;
    console.log("Before yield of 'Hello'")
    yield "Hello";
    yield "end";
}

let gen = generator();

console.log(gen.next()); // yeild 1;
console.log(gen.next()); // yeild 2;
console.log(gen.next()); // yeild 3;
