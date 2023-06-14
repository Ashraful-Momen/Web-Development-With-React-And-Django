//for import and Export feature : 
//1. >>>npm init --yes
//2. goto > package.JSON file and add at the end of the file => "type" : "module" 

//3. suppose we want to import some component for component.js file to here 
//that's why => export let a =10;
//import {a} form './component.js';
//if we want to change the import variable name then => import {a as number1} from './component.js'

// *** we can export just 1 component as default from anyfile.js  ex : export default component name . And no need {} <- for import of default component.
// if we don't we class then all default component , we import as ***Object.

//-----------------------------------------------------------------
// import {a} from "./component.js"

// console.log(a);



// import {arr as array1} from './component.js'

// // console.log(arr);
// console.log(array1);

// // import { objCar } from "./component.js";
// // console.log(objCar);



// import {car} from './component.js';

// let objCar = new car('green','5000$');

// console.log(objCar);


// import { display } from "./component.js";

// display('Ashraful Momen');

// -----------------------****import all element together!----------------

import *  as all from './component.js';

//console.log(all);
// console.log(all.default);
// console.log(all.display("Shuvo"));

let obj = new all.car('green','5000');

console.log(obj);
console.log(obj.display());



//------------------______________---------------------

// import person from './another.js';
// import Object1 from './another.js';

// console.log(Object1);