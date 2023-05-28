/*
if the code in json_formate in js: then JavaScript treat as normal js.obj, and json.parse() function not working.
cz json formate not convert to json formate , With this json.stringify();

***to solve this issue : use this json_formate js code have to convert to json.stringfy(json_formate_code);


*/

//json formate js_object code : 

var person1 = {
    "name": 'shuvo',
    "age": 27,
    "married":true,
    "dob":"1997",
}

// js_obj code:
var person2 = {
    name : 'shuvo',
    age: 27,
    married:true,
    dob:"1997",
}
// console.log(person1); // noramll take this code as an object in JS code.

//** have to convert this code with json formate  => JSON.stringify(person) */

// var json_person = JSON.parse(person); // error : object not convert to object cz this code already in obj formate that's why this function not work;
var json_person = JSON.stringify(person1); //solve error object  convert to json formate 
var js_obj = JSON.parse(json_person); // convert json code to object code ... 
console.log(json_person); // json code 
console.log(js_obj)// js object code .

