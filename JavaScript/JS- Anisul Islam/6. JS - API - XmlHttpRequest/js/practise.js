console.clear();

makeRequest = (method, url, data) => {

    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/Json');
        // xhr.onprogress=function(){
        //     console.log(xhr.responseURL);
        //     console.log(xhr.readyState,`: Means Loading data`);
        //     console.log(xhr.status);
        // };
        xhr.onload = () => {
            let data = xhr.responseText;
            console.log(JSON.parse(data))

        };
        xhr.onerror = (e) => {
            let er = xhr.status;
            console.log('server status:', er, '.');
        }
        xhr.send(JSON.stringify(data));
    });
}

// function getData(){
//     makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>{ console.log(res)})
//     .catch((error) => console(error));
// }

// getData();


// function createData() {
//     makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     })
//         // .then((res) => { console.log(res) });
// }

// createData();

// function updateData() {
//     makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
//         title: 'Ashrafu.',
//         body: 'bar',
//         userId: 1,
//     })
        
// }

// updateData();

// function updateSingleData() {
//         makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
//             title: 'Momen.',
           
//         })
            
//     }
    
//     updateSingleData();



function deleteData() {
        makeRequest('delete', 'https://jsonplaceholder.typicode.com/posts/1', {
           
           
        })
            
    }
    
    deleteData();