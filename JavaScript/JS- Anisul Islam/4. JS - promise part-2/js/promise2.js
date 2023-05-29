// Promise : chaining->


console.log('welcome');

const task1 = () =>{
       return new Promise((resolve,reject)=>{
        // resolve('task 1 done');
        reject('task 1 is not done');
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
     resolve('task 4 done');
    })
}

const task5 = () =>{
    return new Promise((resolve,reject)=>{
     resolve('task 5 done');
    })
}


task1().then((res) =>{ console.log(res)})
       .then(task2)
       .then((res)=>{console.log(res)})
       .then(task3)
       .then(res => { console.log(res)})
       .then(task4)
       .then((res)=>{console.log(res)})
       .then(task5)
       .then((res)=>{console.log(res)})
       .catch((error) => {console.log(error)}) // all promise reject() can handle with one catch()

console.log('bye');