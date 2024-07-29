var dom = this; // this or window is same. 

// console.log(document); // return full html page . or window.doucument 

// *** console.dir(div) // show all the property / method for using as developer. 

//document.querySelector('#id_name or .className or tagName or attribute_our_won_className'): ----------------select single tag: select 1st element---------------------
//document.querySelectorAll('#id_name,className,tagName'): -------------select Multiple tag---------------------
//document.getElementById('id_name);
//document.getElementsByClassName('class_name);
//document.getElementsByTagName('h4,p');
//select button : -------------------------------
// var btn = document.querySelector('button[type=submit]');

//select custom attribute: ------------
//select: our_buildIn_class : document.querySelectorAll('[data-atr]')
//document.querySelectorAll('[data-atr="box1"]','id="box1"'); //outPut: NodeList [ div#box1.box ]
// document.querySelectorAll('li:first-child,li:last-child'); //output: NodeList[li,li]
// tagOdd = document.querySelectorAll('ul>li:nth-child(odd)');//odd
// tagOdd = document.querySelectorAll('ul>li:nth-child(2n+1)');//odd
// tagOdd = document.querySelectorAll('ul>li:nth-child(2n)');//even
// tagOdd = document.querySelectorAll('ul>li:nth-child(even)');//even

//****special selector ----------------------------------------------------------------------------

// tag = document.querySelector('ul').getElementsByTagName('li');

// tag_array = Array.from(tag);

// // tag_array.forEach(element => {
// //     console.log(element);
// // });

// //****querySelectorAll(): for id=>"#id" for class => ".className": and Not necessary to conver any array :-----------------------------

// tag = document.querySelectorAll('ul > li'); // Here tag autometicall convert an array ... 
// tag.forEach(element =>{
//     console.log(element);
// })

//select 2n+1 or 2n or even or odd: -----------------------------------
// tagOdd = document.querySelectorAll('ul>li:nth-child(Odd)');

// tagOdd.forEach((element) => {
// element.style.background = 'grey';
// });

// tagEven = document.querySelectorAll('ul>li:nth-child(Even)');
// tagEven.forEach(function(item){
// item.style.background= 'red';
// item.style.color= 'white';
// })
// console.log(tagOdd); //list element


// -----------------------------------------------------------


//*** select element with pesudo operator => 'parent>child'
//*** select without element : div1:not(h3) 
//*** select specific element : div1>h2>p  or div1:not(strong)*/--------------------------------

// *** childNode is count element with space but children can count space only tag count ; 

// ================================================================================================

var box1 = document.querySelector('#box1');
// console.dir(box1); //show the all propertiy / method for use

box1; //just write down on console>>box1 then can show the box1;

// show the box1 all property: --------------------------
// console.dir(box1);//show the box1 available property all : 

//write in console-----------------------------------------------------
document.getElementById('box2') //output: <div id="box2" class="box">
document.querySelectorAll('box'); //output: NodeList(4) [ div#box1.box, div#box2.box, div#box3.box, div#box4.box ]
//---------------------------------------------------------------------

var boxNodeList = document.querySelectorAll('.box'); //output: NodeList(4) [ div#box1.box, div#box2.box, div#box3.box, div#box4.box ]

// now convert the NodeList to the array element: 
var boxArray = Array.prototype.slice.call(boxNodeList)

// console>>>boxArray //wiretie boxArray and PressEnter//output : NodeList(4) [ div#box1.box, div#box2.box, div#box3.box, div#box4.box ]


// ---------------------------------------------------------------------

// **** document=querySelector('div') // select first div only

// document.querySelectorAll('h4, p '); // select those all element ;

//console>>>:
document.querySelectorAll('h4,p'); // output; NodeList(4) [ h4, h4, h4, p ]


// ================================================Travers=============================================

// **** parent to  child(with space/text) and children(no space/text)-----------------------------------------------------------------
var box3 = document.getElementById('box3');
// console.dir(box3);
// console.log(box3.childNodes);
// console.log(box3.childNodes[0]);
// console.log(box3.children);
// console.log(box3.children[0]);
// console.log(box3.children[1].children);

// console.log("box 3 child",box3.child);


/// **** child to parent: -------------------------------------------------------------
var child = document.querySelector('.child_node');
// console.dir(child);

var parent = child.parentElement;
// console.log(child.parentNode); // parentElement(without space/text) and parentNode(with space/text) similar

// console.log(parent);  // box3
// console.log(parent.parentElement);  // boxes

// console.log(child.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode); //box3<boxes<body<html<HTMLDocument<null
// those all element return as array : -------------------------------------------------------------
// console.log(child.parentNode.parentNode.parentNode.parentNode.parentNode.URL); //localhost
// console.log(child.parentNode.parentNode.parentNode.parentNode.parentNode.baseURI); //localhost
// console.log(child.parentNode.parentNode.parentNode.parentNode.parentNode.images); //<img/>
// console.log(child.parentNode.parentNode.parentNode.parentNode.parentNode.form); //<form></form>
// console.log(child.parentNode.parentNode.parentNode.parentNode.parentNode.link); //<a></a>
// console.log(child.parentNode.parentNode.parentNode.parentNode.parentNode.scripts); //<scripts></scripts>
// console.log(child.parentNode.parentNode.parentNode.parentNode.parentNode); //

//**** */ sibling travers previousElement/nextElementSibling: --------------------------------

var sibling = document.querySelector('#sibling'); //sibling element 

// console.log(sibling.previousSibling);// text/space 
// console.log(sibling.nextSibling);//text/space

// console.log(sibling.previousElementSibling); //direct previous element; 
// console.log(sibling.nextElementSibling); //direct next element;





// ================================================End Travers=============================================



//add css or text or tag inside element : --------------------------------------------------------------
// list[0].style.background = "red";
// list[0].innerText = "Hello World";
// list[0].style.margin= "10px";
// list[0].style.padding= "0 0 0 200px";
// list[0].innerHTML= "<b> Hellow World </b>";

// -----------------------------------------------------------------------------------------------------









