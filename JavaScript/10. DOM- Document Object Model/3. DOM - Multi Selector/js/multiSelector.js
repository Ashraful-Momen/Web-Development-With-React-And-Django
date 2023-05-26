//getElementByClassname(): ---------------------

let list = document.getElementsByClassName('root1');
// list [] => not apply css for all element but best way to apply single element as  list[index].

list[0].style.background = "red";
list[0].innerText = "Hello World";
list[0].style.margin= "10px";
list[0].style.padding= "0 0 0 200px";
list[0].innerHTML= "<b>Hellow World</b>";

//getElementByTagName():-----------------------------

var tag = document.getElementsByTagName('li');


//querySelector+getElementByTagName()=> suppose get as HTMLCOllectionList[] but have to convert as Array =>---------------


tag = document.querySelector('ul').getElementsByTagName('li');

tag_array = Array.from(tag);

// tag_array.forEach(element => {
//     console.log(element);
// });

//****querySelectorAll(): for id=>"#id" for class => ".className": and Not necessary to conver any array :-----------------------------

tag = document.querySelectorAll('ul > li'); // Here tag autometicall convert an array ... 

// tag.forEach(element =>{
//     console.log(element);
// })

tagOdd = document.querySelectorAll('ul>li:nth-child(Odd)');

tagOdd.forEach((element) => {
element.style.background = 'grey';
});

tagEven = document.querySelectorAll('ul>li:nth-child(Even)');
tagEven.forEach(function(item){
item.style.background= 'red';
item.style.color= 'white';
})
console.log(tagOdd); //list element