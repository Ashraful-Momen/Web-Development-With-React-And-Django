//in product.js file = here 'products' is a global array .
//select element: 
const productEl = document.querySelector('.products');
const cartItemEl = document.querySelector('.cart-items');
const subtotalEl = document.querySelector('.subtotal');
const totalItemCart = document.querySelector('.total-items-in-cart');

//render products : 

function renderProducts() {
    products.forEach((product) => {
        productEl.innerHTML += `
    <div class="item">
        <div class="item-container">
            <div class="item-img">
                <img src="${product.imgSrc}" alt="${product.name}">
            </div>
            <div class="desc">
                <h2>${product.name}</h2>
                <h2><small>$</small>${product.price}</h2>
                <p>${product.description}</p>
                
            </div>
            <div class="add-to-wishlist"">
                <img src="./icons/heart.png" alt="add to wish list">
            </div>
            <div class="add-to-cart"  onclick="addCart(${product.id})">
                <img src="./icons/bag-plus.png" alt="add to cart">
            </div>
        </div>
    </div>
        
        `;
    });

}

renderProducts();

//render cart item from LocalStorage:

let cart = JSON.parse(localStorage.getItem("Cart"))||[]; // if not use "||[]" , then getting error on 97 line...
updateCart();

//Add to cart:
//** we need another array to store product in cart , let cart = [] */

// let cart = []; // when local storage is not created then used this cart array .

function addCart(id) {
    //2nd check those product already exit in cart or not : 
    if (cart.some((item) => item.id === id)) {
        // alert('Product already added!!!');
        changeNumberOfUnits('plus',id); //product will add autometically according to stock variable.
    }
    else {
        let item = products.find((product) => product.id === id); //1st check the reference id , is matcing on product.id
        cart.push({
            ...item,
            numberOfUnit: 1,
        });
    }
   
    updateCart();
}

//update cart:

function updateCart() {
    renderCartItem();
    renderSubTotal(); //used when renderCartItem () is finished.

    //add cart to local storage
    localStorage.setItem("Cart", JSON.stringify(cart));
}

//Total bill /subtotal: 
 
function renderSubTotal(){
    let totalPrice = 0, totalItem = 0;

    cart.forEach((item)=>{
        totalPrice+=item.price * item.numberOfUnit;
        totalItem+=item.numberOfUnit;
    });

    subtotalEl.innerHTML =` Subtotal (${totalItem} items): ${totalPrice.toFixed(2)}`;
    totalItemCart.innerHTML=`${totalItem}`
}


// render cart item:
function renderCartItem() {
    //fix the duplicate element in cart 
    cartItemEl.innerHTML="";

    cart.forEach((item) => {
        cartItemEl.innerHTML +=
       `     <div class="cart-item">
                <div class="item-info" onclick="removeCartItem(${item.id})">
                    <img src="${item.imgSrc}" alt="${item.name}">
                        <h4>${item.name}</h4>
                </div>
                <div class="unit-price">
                    <small>$</small>${item.price}
                </div>
                <div class="units">
                    <div class="btn minus" onclick="changeNumberOfUnits('minus',${item.id})">-</div>
                    <div class="number">${item.numberOfUnit}</div>
                    <div class="btn plus" onclick="changeNumberOfUnits('plus',${item.id})">+</div>
                </div>
            </div>`;
          
    })
   
    
}

//remove cart item: 

function removeCartItem(id){
    cart = cart.filter((item)=>item.id != id);  // keep all element without this id element on the cart .

    updateCart();
}


//Change Number of Unit for cart: (total product in cart)
//this functin on fire when '+' button click.

function changeNumberOfUnits(action,id){
//use array.map for crud  operation in side the array .

    cart=cart.map((item)=>{  

        // let oldNumberofUnit = item.numberOfUnit;
        let numberOfUnit = item.numberOfUnit;
        
        if(item.id===id){

            if(action==='minus' && numberOfUnit > 1){
                // oldNumberOfUnit--;
                numberOfUnit--;
            }
            else if(action==='plus'&& numberOfUnit < item.instock){
                //oldNumberofUnit++
                numberOfUnit++;
            }

        }
        
        return {
            ...item,
            numberOfUnit, //oldNumberOfUnit : numberOfUnit. here the variable name as same as in product array
        }
    });

    //after change the : numberOfUnit need to update the cart: 

    updateCart();
   

}

