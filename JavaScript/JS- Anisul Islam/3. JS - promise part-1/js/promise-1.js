// Promise - 1: There are 3 type of promise state : panding , resolve() , reject()

//if condition ture then executed-> resolve() . And we can use -> then() for chaining another function and also call resolve() .
//if condition not  ture then executed -> reject() .And we can use catch(). for handeling error .
// if catch()/ then () not working then we can handel with -> finallay()

// promise create : var promise-1 = new Promise( (resole, reject) => { code ...});

//promise is also asyncronus : we can use resovle() or reject() - > both or single according to our wish.... we can use then().then().then().more times .....


//-------------------------------------------------------------------------------


console.log("hi");

// let promise1 = new Promise(function(resole, reject){

//         let taskCompleted = true;
//         // let taskCompleted = false;

//         if (taskCompleted){
//             resolve('taskCompleted')
//         }
//         else{
//             // reject('task not completed');
//             reject(new Error('task not completed'));
//         }
// });

// console.log(promise1);
//-------------------------------------------------
//if condition true then() will executed............
// promise1.then((res)=>{
//     console.log(res);
// })
///////////////////////////////////////////////////
//if condition false catch() will executed............
// promise1.catch((res)=>{
//     console.log(res);
// })
// --------------------------------------------------

// promise1.then((res)=>{
//     console.log(res);
// })
// .catch((e)=>{
//     console.log(e);
//     console.log(e.message);
//     console.log(e.name);
// })
// ----------------------------------------------------

// let promise2 = new Promise(function(resolve,reject){
//     resolve('taskcompleted');
// })

// promise2.then((res)=>{
//     console.log(res);
// })
// ----------------------------------------------
// All promise call together: 

// Promise.all([promise1,promise2]).then((res)=>{
//     console.log(res);
// })

//All promise with Distructure: print res1/res2 in our wish:-----------------------------

// Promise.all([promise1,promise2]).then(([res1,res2])=>{
//     console.log(res1,res2);
// })

// ----------------------------------------------------------
// Promise.race => if we have more promise then promise.raice() function will only work for 1 resolve () function which is completed at fast time among all promise...

let promise3 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
            resolve('promise 3 : not executed in Promise.race for dely execution time only 2s.');
    },2000)
})
let promise4 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
            resolve('promise 4 : will executed in Promise.race for fast execution time only 1s.');
    },1000)
})

Promise.race([promise3,promise4]).then((res)=>{
    console.log(res);
})

console.log("bye");
