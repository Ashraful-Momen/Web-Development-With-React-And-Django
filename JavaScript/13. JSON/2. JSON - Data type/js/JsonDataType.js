// JSON support Data type :
/*
1.String
2.Number
3.Object (Json Obj)
4.Array 
5.Bolean
6.null
---------------------------------------
**** JSON not support : undefine, date formate( support if convert to string) and function 
-----------------------------------------
*/

//js Object:

var person = {
    name : 'shuvo',
    age : 27,
    married: true,
    dob: 1997-28-10, // date formate not support on json . to support on json convert on string formate : "dob";
    test_null: null,
    test_undefine: undefined, // not support null on json and function not support on json formate also.
    greeting:function(){
        console.log('Hey '+this.name);
    }

}

console.log(person.greeting());

var person_json = JSON.stringify(person);

console.log(person_json); // check which data json support on here ;