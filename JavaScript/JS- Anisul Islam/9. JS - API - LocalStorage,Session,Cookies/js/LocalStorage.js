// Web storage API - allows us to store & read data in browser
// Web storage API - localStorage, sessionStorage

// localStorage - store, read, update and remove data
// no expiry date: data never gets lost even if you close the browser

// localStorage store data as key value pair - string

// setItem(key, value)----------------------

// localStorage.setItem("username","Ashraful");
// localStorage.setItem("password","123456");


// getItem(key)----------------------------------

// let usrName= localStorage.getItem("username");
// let passwd= localStorage.getItem("password");

// console.log(usrName,passwd);

// removeItem(key)-----------------------
// localStorage.removeItem("username");
// localStorage.removeItem("password");

// setItem(key, value)--------------------object/array
// const countries = ["Australia", "Bangladesh", "Nepal"];
// localStorage.setItem("countries", JSON.stringify(countries));


// // getItem(key)--------------------------------------
// const countriesList = JSON.parse(localStorage.getItem("countries"));
// console.log(countriesList);

// localStorage.clear();
