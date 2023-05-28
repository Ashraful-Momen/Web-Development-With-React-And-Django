var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200)
    {
        var data = this.responseText;// receive json data from file ;
        // console.log(data);

        // json_obj(data);// print json data from file

        js_obj(data);// print json data to obj formate with this function.

    }
}

xhr.open("GET", "data.json",true);
xhr.send(); // this fn() receive data from file and show in console.


function json_obj(data){
    console.log(data);
}

function js_obj(data){
    let js_obj = JSON.parse(data); // json data to obj/array
    // console.log(js_obj);

    //for(x in js_obj){ 
    //     // console.log(x); print json first "property with is 'person' only".

    //     console.log(js_obj[x]); // print all element inside array.
    // }

    for(x in js_obj.person){ // js.obj person => 'person' this variable exit in data.json file;
        

        // console.log(x); // print all element index

        // console.log(js_obj.person[x]) // print all obj inside json file array only.

        // let person = js_obj.person;
        // console.log(person[x]);

        // access inside array all single element: ------------------

        let person = js_obj.person;

        for(y in person[x]){
            console.log(person[x][y]);
        }



    }
}