// Dom Selector :

// getElementbyID, getElementbyClass, document.querySelector(' Use selector as CSS ')

//getting element: 

// let val = document.getElementById('title-id');
let val = document.getElementById('title-id').id; // return the id name : title-id
val = document.getElementById('title-id').classList;
val = document.getElementById('title-id').className;

//changing style by adding css: 

document.getElementById('title-id').style.background = "red";
document.getElementById('title-id').style.color = "white";
document.getElementById('title-id').style.padding = "0px 50px";

// changing content : 

document.getElementById('title-id').textContent="This is Heading H1";
document.getElementById('title-id').innerText="This is Heading H1 by text";

//adding HTML tags: 
val = document.getElementById('title-id').innerHTML="<i>Content make as italic </i>This is Heading H1 by innerHTML";

//querySelector():


// querySelector('#id') :
// querySelector('.className') :
// querySelector('selector name as like CSS') :

document.querySelector('#title-id').style.background= "green";
document.querySelector('.root1').style.color= "black";

val = document.querySelector('ol>li:nth-child(2n)').style.background="red";
val = document.querySelector('ol>li:first-child').style.background="green";
val = document.querySelector('ol>li:first-child').innerText="JavaScript";
 

console.log(val);
