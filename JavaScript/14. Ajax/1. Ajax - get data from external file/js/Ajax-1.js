//Asyncronus :
//Ajax: Asyncronus JavaScript and XML

//Ajax : use for send / receive data without reloading page ...

//     //HTTP status---------------------------------
    //     //200: "ok" //get file 
    //     //403: "Forbidden"
    //     //404: "Not Found"

    //readyStateValue-----------------------
    //status: 0 = > request not initialized;
    //status: 1 = > Server connection established;
    //status: 2 = > request is received;
    //status: 3 = > request is processing;
    //status: 4 = > request is done and ready for response;
    // -----------------------------------------------------------

/*******How to get data from external file with Ajax:

 //1.create XHR object (xml http Request);

 //2.call a open('get','fileName',ture)  function for get  file; //if sucessfull then readystatus:200;

 //3. access data from file
    xhr.onload()=function(){
        if(this.status === 200){
            console.log(this.status); //check the http status in console.
            console.log(this.responseText);//get data from file 

            let showData = document.getElementById('passData').innerText=this.responseText;

        }

    }
 //4. active all function by xhr.send();  // if this function not call then 2.and 3. function not working...
-----------------------------------------------------------------------------------------------------------------
*/

// document.getElementById('get_data').addEventListener('click',loadData);

// function loadData(){

//     //1.create XHR object (xml http Request);

//     let xhr = new XMLHttpRequest;

//     // console.log(xhr); // to see the xhr property;
    
//     //2.call a open function for get data from file;

//     xhr.open('GET','data.txt',true);

//     //3. call xhr.onload function to open the xhr.open function: active http status: 200

//     xhr.onload = function(){
//         //HTTP status
//         //200: "ok" //get file 
//         //403: "Forbidden"
//         //404: "Not Found"
        
//         if(this.status === 200){
//             console.log(this.status); //check the http status in console.
//             console.log(this.responseText);//get data from file 

//             let showData = document.getElementById('passData').innerText=this.responseText;

//         }
//     }

//     //4. active all function by xhr.send();

//     xhr.send();

//     console.log(xhr);
// }

//=================================alternative of -> xhr.onload () //another way to get data with function()========================================

document.getElementById('get_data').addEventListener('click',loadData);

function loadData(){

    //1.create XHR object (xml http Request);

    let xhr = new XMLHttpRequest;

    // console.log(xhr); // to see the xhr property;
    
    //2.call a open function for get data from file;

    xhr.open('GET','data.txt',true);

    //to see the loading when data export/import:

    xhr.onprogress=function(){
        console.log(this.readyState,'Loading....(means : 3)'); 
    }
 

   

    //3. call xhr.onload function to open the xhr.open function: active http status: 200

    // xhr.onload = function(){
    //     //HTTP status
    //     //200: "ok" //get file 
    //     //403: "Forbidden"
    //     //404: "Not Found"
        
    //     if(this.status === 200){
    //         console.log(this.status); //check the http status in console.
    //         console.log(this.responseText);//get data from file 

    //         let showData = document.getElementById('passData').innerText=this.responseText;

    //     }
    // }

    //3. alternative way to get the data from file :-----------------

    
    
    xhr.onreadystatechange=function(){

        
    //readyStateValue-----------------------
    //status: 0 = > request not initialized;
    //status: 1 = > Server connection established;
    //status: 2 = > request is received;
    //status: 3 = > request is processing;
    //status: 4 = > request is done and ready for response;
    // -----------------------------------------------------------
        console.log(this.readyState); //check the ready state ;

        if(this.readyState === 4 && this.status === 200){
           
            console.log(this.responseText);
        }
       
    }
    
    //4. active all function by xhr.send();

    xhr.send();

    // console.log(xhr);
}