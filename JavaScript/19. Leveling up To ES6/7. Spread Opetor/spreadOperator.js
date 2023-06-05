 // Spread Operator ... newVariable = [right side used '...' spread operator]
 let str = "Bohubrihi";
 let newStr = [...str]; // we used before str.split()
 
 console.log(newStr);
 
 let fruit1 = ["Apple", "Pine-apple", "Mango"];
 let fruit2 = ["Orange", "Grape"];
 let newFruit = "Jackfruit";
 
 let newArr = [...fruit1, newFruit, ...fruit2]; // here newArr = fruit1 + fruit2 + newFruit (all array element together build a new array ....'newArr') 
 
 //console.log(newArr);
 // Spread on Object (ES8)
 let person = {
     fname: "Simanta",
     lname: "Paul"
 }
 
//  let newPerson = {...person}
// console.log(newPerson);

 let newPerson = {...person, dob: "08-26-1995"}
 console.log(newPerson);