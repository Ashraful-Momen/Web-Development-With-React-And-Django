var  value;

let list = document.querySelector('ul');
let li_list = document.querySelector('ul > li');

val = list.childNodes; // ****before use childNodes used firstly querySelector()...
val = list.childElementCount;// ul>li> 4 element.

val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[2];
val = list.childNodes[3].nodeName;
val = list.childNodes[3].nodeType;// 1=> element , 2=>attribute, 3=> text node , 8=> Comment 9=> Document Itself , 10=> Doctype.
val = list.childNodes;
val = list.children; //******/ get ul > li > get all element without Space/text;
val = list.children[0];
val = list.children[1];
val = list.children[2].textContent= "Biskit"; // i can also add css here ...

// ul > li > a + href = >traversing .... 
//****//child element access------------------------------------------

val = list.children[0].children[0] // ul > li > a 
val = list.children[0].children[0].href;
val = list.children[0].children[0].tagName;
val = list.children[0].children[0].nodeType;
val = list.children[0].children[0].className;
val = list.children[0].children[0].id;
val = list.children[0].children[0];
val = list.firstChild;
val = list.firstElementChild // child without text
val = list.lastChild;
val = list.lastElementChild;

// parent Element Access *****------------------------------------------------

list = document.querySelector('ul li :last-child');

val = list.parentElement; // li < ul
val = list.parentElement.parentElement; // li < ul < div
val = list.parentElement.parentElement.parentElement; // li < ul < div < container.div

//*** ul>li>a -> sibling element access:  */------------------------------------
list = document.querySelector('ul li:first-child'); //jaksdjfk
val = list.nextSibling;  // li to next li 
val = list.nextSibling.nextSibling;// 2. li
val = list.nextSibling.nextSibling.nextSibling; //3. li
val = list.nextSibling.nextSibling.nextSibling.nextSibling; // last li or 4th li 
val = list.nextElementSibling; // get element without text;
val = list.nextElementSibling.nextElementSibling;

// previous sibling: 
list = document.querySelector('ul > li:last-child'); 

val = list.previousElementSibling.previousElementSibling;
val = list.previousElementSibling.tagName;

console.log(val);
