//axios : no need header, no need client side error handaling .But if we want then we can use header and method .... which is not available in fetch()/xhr();

// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// axios is a js library
// it helps to make request from browser (plain js/Vue/React/Angular), node.js

// + very easy to use
// + it supports all modern browser includig IE
// + it returns promise
// + throws error brilliantly
// + No need to set header cause axios is intelligent

// axios(config)
// axios(url [, config])

// axios.get(url [, config])
// axios.post(url [, config])
// axios.put(url [, config])
// axios.patch(url [, config])
// axios.delete(url [, config])

// axios returns response object - data, status, statusText, headers, config
// ---------------------------------------------------------------------------------
console.clear();


// console.log(window);


//Read Data: --------------------------------------

// axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>console.log(res))
//     .catch((error)=>console.log(error))

//create Data:----------------------------------

// axios.post('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     // headers: {
//     //   'Content-type': 'application/json; charset=UTF-8',
//     // },
// })
//     .then((res)=>console.log(res))
//     .catch((error)=>console.log(error))

//update : ----------------------------------------

// axios.put('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PUT',
//     body: JSON.stringify({
//       title: 'fooms',
//       body: 'barmss',
//       userId: 1,
//     }),
//     // headers: {
//     //   'Content-type': 'application/json; charset=UTF-8',
//     // },
// })
//     .then((res)=>console.log(res))
//     .catch((error)=>console.log(error))

//update : patch -> singel data ==============================

// axios.patch('https://jsonplaceholder.typicode.com/posts/1',{

//     body: JSON.stringify({
//       title: 'single data update',

//     }),

// })
//     .then((res)=>console.log(res))
//     .catch((error)=>console.log(error))

// Delete: =====================================================

// axios.delete('https://jsonplaceholder.typicode.com/posts/1')

//     .then((res)=>console.log(res))
//     .catch((error)=>console.log(error))

//-------------------------------READ()--------------------------------------------


// function makeRequest(config){
//     return axios(config);
//  }

//  const getData =( ) =>{
//         makeRequest('https://jsonplaceholder.typicode.com/posts')
//         .then((res)=> console.log(res))
//         .catch((error)=>console.log(error));
//  }

//  getData();

//---------------------------------Cread()---------------------------------------------

//  async function makeRequest(config){
//     return await axios(config);
//  }

// const createData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "post",
//     data: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// createData();

// ==================================Update()====================================================

// async function makeRequest(config){
//     return await axios(config);
//  }

// const updateData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "put",
//     data: JSON.stringify({
//       title: "Ashraful",
//       body: "Momen",
//       userId: 1,
//     }),
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// updateData();

// ============================update single Data()============================

// async function makeRequest(config) {
//     return await axios(config);
// }

// let updateSingledata = () => {
//     makeRequest({
//         url: "https://jsonplaceholder.typicode.com/posts/1",
//         method: 'patch',
//         data: JSON.stringify({
//             title: 'foodaff',
//             body: 'barasdfa',
//             userId: 1
//         })
//     })
//         .then((res) => console.log(res))
//         .catch((error) => console.log(error))
// }

// updateSingledata();

// =============================Delete=============================

// async function makeRequest(config) {
//     return await axios(config);
// }

// let Deletedata = () => {
//     makeRequest({
//         url: "https://jsonplaceholder.typicode.com/posts/1",
//         method: 'delete',
//         // data: JSON.stringify({
//         //     title: 'foodaff',
//         //     body: 'barasdfa',
//         //     userId: 1
//         // })
//     })
//         .then((res) => console.log(res))
//         .catch((error) => console.log(error))
// }

// Deletedata();