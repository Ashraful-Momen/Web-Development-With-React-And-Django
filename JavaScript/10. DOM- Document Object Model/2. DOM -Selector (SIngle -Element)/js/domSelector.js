// Dom Selector :

// getElementbyID, getElementbyClass, document.querySelector(' Use selector as CSS ')

//getting element: 

// let val = document.getElementById('title-id');
let val = document.getElementById('title-id').id; // return the id name : title-id

val = document.getElementById('title-id').classList; // return total class List  as array
val = document.getElementById('title-id').className; //return class names...


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

val = document.querySelector('ol>li:nth-child(2n)').style.background="red"; //work for an single element
val = document.querySelectorAll('ol>li:nth-child(odd)').style.background="green"; // work for multiple element

val = document.querySelector('ol>li:first-child').innerText="JavaScript";
 

// console.log(val);


// ----------------------------------------chatgpt---------------------------------------
// want use directly as => document.querySelectorAll('ol>li:nth-child(odd)').style.background = 'green'; but getting error 

// ChatGPT
// The issue you're encountering is that document.querySelectorAll('ol>li:nth-child(odd)') returns a NodeList, which is similar to an array. You can't apply styles directly to a NodeList like you would to a single element.

// If you want to apply a style to each odd <li> element, you'll need to iterate through the list and apply the style to each element individually. Here's how you can do it:

// javascript
// Copy code
// document.querySelectorAll('ol>li:nth-child(odd)').forEach(function(li) {
//     li.style.background = 'green';
// });
// This code selects all odd <li> elements and then iterates over each one, setting its background color to green.

// Remember, this code should be executed in a script block after the elements have loaded on your page. If you're running it in the browser console, make sure you're on the correct page with the <ol> element before executing the command.
