// syncronus : is line to line execution.

// console.log('task 1');
// console.log('task 2');
// console.log('task 3');

// synchronus function : line by line code execution 
//Asyncronus: run those code in another thread or background .... after finish the syncronus task then asyncronus execute. 

const task1 = () =>{
    console.log('Task 1 ');
}

function dataLoading() {
    console.log('Tas 2 => Call back function , and Data Loading ')
}
const task2 = () =>{
    setTimeout(dataLoading, 1000); // setTimeout(callbackFunction(),time 1s = 1000ms); this is the asyncronus function and it's run in another thread after completeting all interpreted code , then this function will be executed .
}
const task3 = () =>{
    console.log('Task 3 ');
}
const task4 = () =>{
    console.log('Task 4 ');
}
const task5 = () =>{
    console.log('Task 5 ');
}


task1();
task2();
task3();
task4();

task5();
