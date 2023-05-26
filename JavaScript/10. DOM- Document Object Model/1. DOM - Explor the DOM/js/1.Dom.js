// DOM = Document object Model. JS take file.html as a DOM then devided all html elements as Tree ... var x = this => indicate the window();
// BOM >  Window() > DOM; 

let val;
val = this;

val = window;
val = window.document; // get index.html full file;
val = document;
val = document.all; // all tag in HTMLCOllectionArray[]
val = document.all[5];
val = document.all.length; // total hmtl element count 

val = document.head; // get <head> </head>
val = document.body; // get <body> all elements</body>
val = document.doctype; // HTML5;
val = document.domain; // local doamin address: 127.0.0.1
val = document.URL; // full domain with js file link;
val = document.characterSet; //UTF-8
val = document.contentType; // text/ html

val = document.forms;// get all forms in html

val = document.forms[0]; //get first forms
val = document.forms[0].action;
val = document.forms[0].method;
val = document.links; // get all links;
val = document.links[1];
val = document.links[1].href;
val = document.links[0].className; // get class from the tag
val = document.links[0].classList; // get class as array from the tag
// val = document.forms[1]; //get second forms

val = document.images;
val = document.scripts; // get js
val = document.scripts[0]; // get js as array list
val = document.scripts[0].src; // get js source link
val = document.scripts[0].getAttribute('src'); // get js source link / path;

//get all link in Array and iterate it:

let links = document.links;

let linkArray = Array.from(links);

// console.log(linkArray);

linkArray.forEach(function(item,index){
    console.log(`index: ${index} => ${item}`)
})


// console.log(links);

