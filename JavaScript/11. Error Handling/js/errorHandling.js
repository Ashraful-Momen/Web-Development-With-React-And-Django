//error : 

// console.log('befor error');

// test(); // error this line cz not define; uncaught reference Error ;



// console.log('after error'); // if getting any error before then this line not executed;
// --------------------handling the error : -----------------------------

// console.log('befor error');



// try{
//     // test(); // write the error code in try block;
//     undefined.text();
// }
// catch(errorVariable){
//     // console.log(errorVariable); //print the error ;

//     console.log(errorVariable.message) // print only error massage line;
//     console.log(errorVariable.name); // print the name of error ;
//     // undefined.text();
// }
// finally{
//     console.log('I am finally Blog'); // if try/catch{} block not working , yet this line must be executed ***if catch {hame some error then only finally block printed but after finally block other block line not executed which is out of the finally block;};


// }
// console.log('after error');

//----------------------customize the error in our own way: -----------------------------


let a = 100; // if change value here then , can able to see the throuch error massage ;

try{
    if(a>10) throw "too big "
    
    else if (a<0) throw "too small";
}
catch(error){
    console.log(error);
}
