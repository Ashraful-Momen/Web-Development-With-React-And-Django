//forEach: access array item but not return anythin; ---------------------------------------------

// var food = ["a","b","c"];

// var num = [1,2,3,4];

//array.foreach(function(value/item, index, full-array){ expression });
//----------------------------------
// var food = ["a","b","c"];

// var num = [1,2,3,4];
// food.forEach(function(value, index, array){
//     console.log(`index ${index}=> value => ${value}`);

//     // console.log(array);  => Here print the full array ....
// });
//-----------------------------
// var food = ["a","b","c"];

// var num = [1,2,3,4];
// num.forEach(function(value){
//     console.log(`item print:${value}`);
// });


//=============================
// var food = ["a","b","c"];

// var num = [1,2,3,4];
// let printEveryThing = function(item){
//     console.log(`item : ${item}`);
// }
// num.forEach(printEveryThing);
//--------------------------------maping() <= can change/modify array value =>: can return value to store value in another array----------------------------
// var food = ["a","b","c"];

// var num = [1,2,3,4];

// function addSomething (item){
//     return `${item} is a small Latter`;
// }

// function addSquar(item){
//     return `${item*item} `;
// }

// let array_res = food.map(addSomething); //call addSometing funciton without () bracket

// let array_sq = num.map(addSquar); ////call addSometing funciton without () bracket

// console.log(array_res);
// console.log(array_sq + "<= Making all element as squer!");

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