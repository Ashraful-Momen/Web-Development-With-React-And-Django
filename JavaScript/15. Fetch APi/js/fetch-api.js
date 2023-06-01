// Fetch API
// Fetch API Uses JavaSript Promise

document.getElementById("get_data").addEventListener('click', getData);

// xhr.open('GET', 'http://api.icndb.com/jokes/random/', true);

// Arrow Function

function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(data => { console.log(data); })
        .catch(err => {console.log(err); })
}