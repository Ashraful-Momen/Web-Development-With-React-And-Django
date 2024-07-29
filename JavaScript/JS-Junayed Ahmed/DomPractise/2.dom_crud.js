var selectABox = document.querySelector('#box1');


//remove element: -----------------------------------------------------------
// selectABox.remove();

//create new <p></p> tag element : ------------------------------------------

var newParagraph = document.createElement(`p`);

var name = "Ashraful";

//tag.textContent or tag.innerText same: ------------------------------------

// newParagraph.innerText= "Hello World last"; 
newParagraph.textContent= `Hello ${name} !`;
// console.log(newParagraph.textContent);


var newDiv = document.createElement('div');
newDiv.innerHTML= '<p>Hello '+name+'</p>';

// console.log(newDiv.innerHTML);

//****append :one_element > other_element: -----------------------------------------
selectABox.append(newDiv);

//*** remove : one_element > other_element: ---------------------------------------
selectABox.removeChild(newDiv);

//if we want to remove selectABox: -----------------------------------------------
// selectABox.remove();

//add class : ------------------------------------------------------------------
newDiv.classList.add('new-div');
newDiv.classList.add('new-div2');

newDiv.className += ' old-new-div';

// console.log(newDiv);
// console.log(newDiv.classList);

//remove class : ------------------------------------------------------------------

newDiv.className = newDiv.className.replace(/old-new-div/,' ');
newDiv.classList.remove('new-div2');
// console.log(newDiv.classList);

//setAttribute : ------------------------------------------------------------------

newDiv.setAttribute('data-art','something');


// console.log(newDiv.attributes);

//remove attribute: ---------------------------------------------------------------
newDiv.removeAttribute('data-art');


// console.log(newDiv.attributes);


// console.log(newDiv.attributes);

//**** */ =======================add element by : insertAdjacentElement('position',element)============================================================
//beforebegin
{/* <div>
    //afterbegin
    //other element 

    //beforend
</div> */}
//afterend
//-----------------------
// selectABox.insertAdjacentElement('beforebegin',newDiv);
// selectABox.insertAdjacentElement('afterbegin',newDiv);
// selectABox.insertAdjacentElement('beforeend',newDiv);
// selectABox.insertAdjacentElement('afterend',newDiv);
// ===================================================================================
//**** */ element.insertBefore(newItem,previousItem);
/// item.appendChild()// add element in last (lifo)
/// item.insertBefore(newItem,previousItem) // add element in first (fifo)
// -----------------------------------------------------------------------



var newParagraph1  = document.createElement('p'); 
newParagraph1.innerHTML = '<p>newpara 1</p>';
newParagraph1.style.textAlign='center';
var ul = document.querySelector('ul');
ul.insertBefore(newParagraph1,ul.children[0]);


                                                                                                                                                                                                                                                                                                                                                          