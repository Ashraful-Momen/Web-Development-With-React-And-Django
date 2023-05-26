// Adding element to DOM:

// create element to DOM:

var olItem = document.createElement('li'); //createElement as <li></li>
 
//add class,id,attribute for new item:

olItem.className="one two three";
olItem.id=('newItem');
olItem.setAttribute('OlLi','newItemAdd');//*** set attribute;

//add olItem+ inside text<li>JavaScript</li>:
olItem.appendChild(document.createTextNode("javaScrit"));

//add item to ol > li : ***
document.querySelector('ol').appendChild(olItem);

//add new item in ul tag: ***------------------------------------------------------------

var ulItem = document.createElement('li');

let li = document.createElement('a');

// li.document.createTextNode('Instagram');
li.appendChild(document.createTextNode('Instagram')); //***add text inside <a>Instagram</a> */
li.setAttribute('href','https://www.instagram.com')

ulItem.appendChild(li); //<li><a>a tag added</a></li>

document.querySelector('ul').appendChild(ulItem);


//*** Replace elements:  */-----------------------------------------------------------------

let newHeading = document.createElement('h1');

newHeading.appendChild(document.createTextNode('Replace Heading'));

let oldHeading = document.querySelector('h1');
// console.log(oldHeading);
// ***Before replace element call parent child => mian container div=> first then can replace('newElement', "oldElement")
let parent = document.querySelector('.container')
//another way to call parent element:
// oldHeading.parentElement;



//Main Part for replacing element -----------------

parent.replaceChild(newHeading, oldHeading);

// console.log(parent);
// console.log(newHeading);

// parent.replaceChild(newHeading, oldHeading);

// -----------------------------------Remove : Element-----------------------------------------------------


li = document.querySelectorAll('li');

// li[0].remove();
// li[4].remove();
// li[6].remove();

// Another way to remove element: removeChild()

uLli = document.querySelector('ul') //

// uLli.removeChild(li[0]); // li[0] => error: item is not a element of <ul>tags</ul>. but we can delete which li[index] element in <ul>index</ul>;
// uLli.removeChild(li[5]);
// uLli.removeChild(li[6]);

// Remove: class,id,attributes in Tags => --------------

uLli.classList.add('test');
uLli.classList.add('another');
//remove class list=>
uLli.classList.remove('test');

uLli.classList.remove('another');

//remove attribute + id => ----------------------

uLli.setAttribute('title','checkTitle');
uLli.removeAttribute('title');

uLli.id=('check');
uLli.removeAttribute('id') // id remove technique....

// uLli.id.add('new1')
// uLli.classList.add('smaple test');


console.log(uLli);
