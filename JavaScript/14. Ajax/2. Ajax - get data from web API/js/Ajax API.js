// // Ajax Api: get jokes from web APi:

// document.getElementById('btnJokes').addEventListener('click',onLoad);

// function onLoad(){
//     // console.log('btn clicked');
//     let xhr = new XMLHttpRequest;

//     xhr.open('Get', 'https://reqres.in/api/products/3', true)

//     xhr.onload = function(){

//         if(this.status == 200)
//         {
//             // console.log(this.responseText);

//             let js_obj = JSON.parse(this.responseText);

//             console.log(js_obj); //see the full array;

//             for(x in js_obj.data){
//                 let data = js_obj.data;
//                 let support = js_obj.support;
//                 for(y in data)
//                 {
//                     console.log( y+':',data[y]);
//                     let index = y;
//                     let value = data[y];
                    
//                     document.getElementById('apiData').innerText = `"${index}" : "${value}"`; //print here only last element
                    
//                 }
                
//             }

           

//             // document.getElementById('apiData').innerText = js_obj.data;
//         }
//     }

//     xhr.send();
// }

//----------------------------------------------------for jokes: main part from here =>  ------------------------------------

// Ajax Api: get jokes from web APi:

document.getElementById('btnJokes').addEventListener('click',onLoad);


function onLoad(){
    // console.log('btn clicked');
    let xhr = new XMLHttpRequest;



    xhr.open('Get', `https://official-joke-api.appspot.com/random_joke/`, true)
    
   

    xhr.onprogress= function(){

        document.getElementById('apiData').innerHTML = "loading...";
       
    }
    
   
    xhr.onload = function(){

        
        if(this.status == 200 && this.readyState===4)
        {
            
        
           
            let js_obj = JSON.parse(this.responseText);  //this.resposeText = > xhr's property and it's bring data from APi....

            console.log(js_obj);

            let firstLine = js_obj.setup;
            let lastLine = js_obj.punchline;
            console.log(`${js_obj.setup},\n${js_obj.punchline}`);
            
    
            document.getElementById('apiData').innerText = `${firstLine} \n ${lastLine}`;

           

        
        }
    }

    xhr.send();
}


//-----------------------------------------Sir : code -----------------------------------

// http://www.icndb.com/api/
// API
// RESTful API

document.getElementById('get_data').addEventListener('click', loadJokes);

// function loadJokes(e) {
//     let number = document.getElementById('numberJokes').value;
//     //console.log(number);
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

//     xhr.onprogress = function () {
//         document.getElementById('output').innerHTML = "<h3>Loading......</h3>";
//     }

//     xhr.onload = function () {
//         if (this.status === 200) {
//             let data = JSON.parse(this.responseText);
//             let jokes = data.value;
//             let output = "<ol>";

//             jokes.forEach(function (item) {
//                 //console.log(item.joke);
//                 output += `<li>${item.joke}</li>`;
//             });
//             output += "</ol>";

//             document.getElementById('output').innerHTML = output;
//             //console.log(jokes);
//             //console.log(data);
//         }
//     }

//     xhr.send();
// }