console.clear();

// event - onload(), onerror() , onprocess()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()


const makeRequest = (method, url, data) => {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // make xhr = new XMLHttpRequest();
        xhr.open(method, url);            // xhr.open('GET/POST/PUT/PITCH/DELET','url/fileLink',true/false)

        xhr.setRequestHeader('Content-Type', 'application/json');  // xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            let data = xhr.response;      //xhr.responseText or xhr.reponse 
            console.log(JSON.parse(data))
        }

        xhr.onerror = () => {            //if onload not working then xhr.onerror()
            console.log('error is here');
        }

        xhr.send(JSON.stringify(data));   //xhr.send()
    });
}


// const getData = () => {
//     makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
//         .then((res) => console.log(res))
// }

// getData();
// const sendData = () => {
//     makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     });
// }
// sendData();
// const updateData = () => {
//     makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
//         id: 1,
//         title: 'fooMA',
//         body: 'barMA',
//         userId: 1,
//     });
// }
// updateData();
// const updateSingleData = () => {
//     makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {

//         title: 'This is changed',

//     });
// }
// updateSingleData();
// const deleteData = () => {
//     makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
// }
// deleteData();