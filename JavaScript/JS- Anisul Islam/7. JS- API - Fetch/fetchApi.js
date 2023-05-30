// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery

// fetch() has replaced XMLHttpRequest
// fetch() - global method for making HTTP Request
// 2 ways to call - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() ByDefault- returns a promise
// - returned promise can only handle network error
// - does not support all the older browser


//** Don't forget to use Header , either data not send to server:  */
///////////////////////////////////////////////////
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=> res.json())
//     .then((res)=> {console.log(res)})
//     .catch((error)=>console.log(error.message));
// ------------------------------------------------
console.clear();
//Read data from server: 

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{
//     if(!res){
//         let msg = `Error: ${res.status}`
//         throw new Error(msg);
//     }
//     return res.json();

// })
// .then((res)=> {console.log(res)})
// .catch((error)=>console.log(error.message));

//--------------------------------------------------------

//createData: ---------------------------

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     method: 'POST',
//     body: JSON.stringify({
//         // title: 'foo',
//         // body: 'bar',
//         // userId: 1,
//         name: "Ashraful"
//     })
// })
//     .then((res) => {
//         if (!res) {
//             let msg = `Error: ${res.status}`
//             throw new Error(msg);
//         }
//         return res.json();

//     })
//     .then((res) => { console.log(res) })
//     .catch((error) => console.log(error.message));

// Update data: ---------------------------------------

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     method: 'PUT',
//     body: JSON.stringify({
//         // title: 'foo',
//         // body: 'bar',
//         // userId: 1,
//         name: "Ashraful",
//         roll: 50038
//     })
// })
//     .then((res) => {
//         if (!res) {
//             let msg = `Error: ${res.status}`
//             throw new Error(msg);
//         }
//         return res.json();

//     })
//     .then((res) => { console.log(res) })
//     .catch((error) => console.log(error.message));

//Delete Data: ------------------------------------
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     method: 'Delete',
//     body: JSON.stringify({
//         // title: 'foo',
//         // body: 'bar',
//         // userId: 1,
//         name: "Ashraful",
//         roll: 50038
//     })
// })
//     .then((res) => {
//         if (!res) {
//             let msg = `Error: ${res.status}`
//             throw new Error(msg);
//         }
//         return res.json();

//     })
//     .then((res) => { console.log(res) })
//     .catch((error) => console.log(error.message));
//-------------------------------------------------------
// ------------------------------------------------------
// Read: data 

// async function makeRequest(url,data){

//     let getData = await fetch(url);
//      let res = await getData.json();
//     return res;
// }

// function fetchData(){
//     makeRequest('https://jsonplaceholder.typicode.com/posts/')
//     .then((res)=> console.log(res))
//     .catch((error)=>console.log(error));
// }

// fetchData();


//Create Data: ---------------------------

// async function makeRequest(url,config){

//     let getData = await fetch(url,config);

//     if(!getData.ok){
//         let msg = `Error ${getData.status}`;
//         throw new Error(msg);
//     }
//     let res = await getData.json();
//     return res;
// }

// function createData(){
//     makeRequest('https://jsonplaceholder.typicode.com/posts', {
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
        
//       })
//     .then((res)=> console.log(res))
//     .catch((error)=>console.log(error));
// }

// createData();

// //Update date :-----------------------------------
// async function makeRequest(url,config){

//     let getData = await fetch(url,config);

//     if(!getData.ok){
//         let msg = `Error ${getData.status}`;
//         throw new Error(msg);
//     }
//     let res = await getData.json();
//     return res;
// }

// function updateData(){
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         method: 'PUT',
//         body: JSON.stringify({
//           title: 'foosdfsdfsdf',
//           body: 'barsdfsdfsdf',
//           userId: 1,
//         }),
        
//       })
//     .then((res)=> console.log(res))
//     .catch((error)=>console.log(error));
// }

// updateData();
//-----------------------------Single Data Update-----------------------------

// //Update date :-----------------------------------
// async function makeRequest(url,config){

//     let getData = await fetch(url,config);

//     if(!getData.ok){
//         let msg = `Error ${getData.status}`;
//         throw new Error(msg);
//     }
//     let res = await getData.json();
//     return res;
// }

// function updateSingleData(){
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         method: 'PATCH',
//         body: JSON.stringify({
          
//           body: 'Single Data Update',
         
//         }),
        
//       })
//     .then((res)=> console.log(res))
//     .catch((error)=>console.log(error));
// }

// updateSingleData();
// -----------------------------------DeleteData-------------------
//Update date :-----------------------------------
async function makeRequest(url,config){

    let getData = await fetch(url,config);

    if(!getData.ok){
        let msg = `Error ${getData.status}`;
        throw new Error(msg);
    }
    let res = await getData.json();
    return res;
}

function deleteData(){
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        method: 'DELETE',
        body: JSON.stringify({
          
          body: 'Single Data Update',
         
        }),
        
      })
    .then((res)=> console.log(res))
    .catch((error)=>console.log(error));
}

deleteData();

