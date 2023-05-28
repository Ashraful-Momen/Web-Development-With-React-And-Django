//Json Intro: JavaScript Obejct Notation. 
// to send data on server as string formate . ex: JSON.stringify(obj)
// to receive data from server as json formate then convert to arry / object. ex: JSON.parse(Json.obj)

// JSON validation check : https://jsonlint.com/


//js object formate => property not in quatotion "name/roll/age"

var person = {
    name : 'shuvo',
    roll : 5058,
    age : 20,
}

// json formate : except number data everythin in quatotion "item/value"
var person = {
    "name" : 'shuvo',
    "roll" : 5058,
    "age" : 20,
}

// convert obj to json formate: 

var person_json = JSON.stringify(person);

console.log(person);

// convert json to obj: 

var person_obj = JSON.parse(person_json);

console.log(person_json);