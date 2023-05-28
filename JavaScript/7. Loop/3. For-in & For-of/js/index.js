// for-in : [working with -> item/properdy , index, full-array ] => String / Array / Object
// for-of : [working with -> item/property, index ] => String / Array.

var name = "My name is Md.Ashraful Momen Shuvo";

var food = ['chips', 'chokolet', 'drink'];

var person = {
    name : "Md.Ashraful Momen Shuvo ",
    phone : "01674317715",
    roll: 201811050038,
    Address: "648/6east Kazipara"
}

// for(var x in name ){
//     console.log(`The index is ${x} => and items is +> ${name[x]}`);
// }

for (var x in person){

    console.log(`Person Key is ${x} => ${person[x]}`);
}


//for-of: -------------------------String & Array -------------------------

// for (var x of name)
// {
//     console.log(`The item is : ${x}`);
// }

// for (var x of food){
//     console.log(`the food item is ${x}`);
// }
