// Promise : chaining->


console.log('welcome');

const task1 = () =>{
       return new Promise((resolve,reject)=>{
        resolve('task 1 done');
        // reject('task 1 is not done');
       })
}

const task2 = () =>{
    return new Promise((resolve,reject)=>{
       
        setTimeout(()=>{
            resolve('task 2 done');
        },2000)
    })
}

const task3 = () =>{
    return new Promise((resolve,reject)=>{
     resolve('task 3 done');
    })
}
const task4 = () =>{
    return new Promise((resolve,reject)=>{
    //  resolve('task 4 done');
     setTimeout(()=>{
        reject('task 4 is reject and end here the async execution');
    },2000)
    })
}

const task5 = () =>{
    return new Promise((resolve,reject)=>{
     resolve('task 5 done');
    })
}


// task1().then((res) =>{ console.log(res)})
//        .then(task2)
//        .then((res)=>{console.log(res)})
//        .then(task3)
//        .then(res => { console.log(res)})
//        .then(task4)
//        .then((res)=>{console.log(res)})
//        .then(task5)
//        .then((res)=>{console.log(res)})
//        .catch((error) => {console.log(error)}) // all promise reject() can handle with one catch()

// ---------------------------------------------------------------------------------------
/*
*** Promise chaining is realy pain , and this pain is solve by asynic+awit;
asyncronus wait =  awit. function call one by one until completing task. when one_function() is processing then another_function() is wait , and this wait is asyncronus awit.  
How to write: 

// async function callAllTask(){
//     const t1 = await task1();
//     console.log(t1);
    
// }

callAllTask();  // then call the function

*/


// async function callAllTask(){
//     const t1 = await task1();
//     console.log(t1);

//     const t2 = await task2();
//     console.log(t2);

//     const t3 = await task3();
//     console.log(t3);

//     const t4 = await task4();
//     console.log(t4);

//     const t5 = await task5();
//     console.log(t5);
    
// }

//ES6 ---------------------
//   callAllTask =async () =>{
//         const t1 = await task1();
//         console.log(t1);
    
//         const t2 = await task2();
//         console.log(t2);
    
//         const t3 = await task3();
//         console.log(t3);
    
//         const t4 = await task4();
//         console.log(t4);
    
//         const t5 = await task5();
//         console.log(t5);
        
//     }

//with error handeling--------------------
callAllTask =async () =>{
    try{
        const t1 = await task1();
    console.log(t1);

    const t2 = await task2();
    console.log(t2);

    const t3 = await task3();
    console.log(t3);

    const t4 = await task4();
    console.log(t4);

    const t5 = await task5();
    console.log(t5);
    }
    catch(error){
        console.log(error);
    }
    
}

callAllTask();
 


console.log('bye');