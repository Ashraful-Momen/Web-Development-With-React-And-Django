//if we use async before any function , this fn() convert as promise.... for better chaining use await keyword


fetch('http://api.icndb.com/jokes/random/5000')
    .then(response => response.json())
    .then(data => { });


// async await

async function getJokes() {
    let response = await fetch('http://api.icndb.com/jokes/random/5000');
    let data = await response.json();
    return data;
}


getJokes().then(jokes => console.log(jokes)); 