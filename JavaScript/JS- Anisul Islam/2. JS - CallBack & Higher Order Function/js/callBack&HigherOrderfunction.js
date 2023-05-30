// // syncronus : is line to line execution.

// // console.log('task 1');
// // console.log('task 2');
// // console.log('task 3');

// //Asyncronus: run those code in another thread or background .... after finish the syncronus task then asyncronus execute. 

// const task1 = () =>{
//     console.log('Task 1 ');
// }

// // function dataLoading() {
// //     console.log('Tas 2 => Call back function , and Data Loading ')
// // }
// const task2 = () =>{
//     setTimeout( ()=>{
//         console.log('Tas 2 => Call back function , and Data Loading ')
//     }, 1000); // setTimeout(callbackFunction(),time 1s = 1000ms); this is the asyncronus function and it's run in another thread after completeting all interpreted code , then this function will be executed .
// }
// const task3 = () =>{
//     console.log('Task 3 ');
// }
// const task4 = () =>{
//     console.log('Task 4 ');
// }
// const task5 = () =>{
//     console.log('Task 5 ');
// }


// task1();
// task2();
// task3();
// task4();
// task5();

//----------------------------------------------------call Back and Higher Order function-----------------------------

// function squre(x){
//     console.log( `The squre of ${x} => ${x**2}`);
// }

// const y = squre; 

// // squre(5) or y(5)  // Both are the same task. 

// function higherOrderFunction (num, callbackFunction){
//     callbackFunction(num);
// }

// higherOrderFunction(4,squre);

//------------------------------------------call back : function call chaining --------------------------------------------------------

// const task1 = (callBack) => {
//     console.log('Task 1 ');
//     callBack();
// }


// const task2 = (callBack) => {
//     setTimeout(() => {
//         console.log('Tas 2 => Call back function , and Data Loading ');
//         callBack();
//     }, 1000);

// }
// const task3 = (callBack) => {
//     console.log('Task 3 ');
//     callBack()
// }
// const task4 = (callBack) => {
//     console.log('Task 4 ');
//     callBack()
// }
// const task5 = () => {
//     console.log('Task 5 ');
// }


// task1(function f1() {
//     task2(function f2() {
//         task3(function f3() {
//             task4(function f4() {
//                 task5();
//             })
//         });
//     });
// });

// task1(() => {
//     task2( () => {
//         task3(() => {
//             task4(() => {
//                 task5();
//             })
//         });
//     });
// });

//-------------------------------------------------------------------------------------------
// Every Eventlisterfunction is an Asyncronus chaining functoin : 'click/dblclick/mouseover/mousemove/keyup/resize/focus' etc.....

// We use EventListenerFunctin is 'btn'.


console.log("hi");
//here btn call is a example of asyncronus coding.
document.getElementById('btn').addEventListener('click', () => {
    console.log('Button is clicked');
})

console.log("bye");