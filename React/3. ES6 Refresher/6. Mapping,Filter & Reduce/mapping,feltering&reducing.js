let a = [1,2,3,4];

let sq =  a.map((item)=>{
    return item**2;
})

console.log(sq);

let qube = a.map((item)=>{
    return item**3;
})

console.log(qube);



// --------------------------------------felter() and reduce()-------------------------

// var food = ["a","b","c"];

// var num = [1,2,3,4];

// let filterArray =[];

// for(x in num){
//     if(x%2===1){
//         filterArray.push(x);
//     }
// }

// for(x of num){
//     if(x%2===1){
//         filterArray.push(x);
//     }
// }

// console.log(filterArray);
//-------------------------------------filter( function(item,index,array){ code ...} ): filter inside array element with conditions---------------------------------

// let another_array=num.filter(function(item){
//     return item%2==1;
// })
//------------------------------------------
// let another_array=num.filter((item)=>{
//     return item%2==1;
// })
// console.log(another_array);
//-------------------------------------reduce(function(variable**, element of array = variable/item){ return code_logic;},0=varibale** inital value); -------------------------------------

var food = ["a","b","c"];

var num = [1,2,3,4]; 

// let sum =0;
// for(x of num){
//     sum+=x;

   
// }

// console.log(sum);

//---------------------------------------

var array_res = num.reduce(function(sum,item){
    return sum+item;
},0);

console.log(array_res);