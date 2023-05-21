// var age = prompt("Enter Your Marks:");




// if (age >=80 && age<=100)
// {
//     console.log(`A+`);
// }
// else if (age >=70 && age<80)
// {
//     console.log(`A`);
// }
// else if (age >0 && age<69)
// {
//     console.log(`Your not pass by the Number: `);
// }
// else{
//     console.log (`Invalid input:`);
// }

//-------------------Nested if else: --------------------

var number1 = prompt("Enter Your number1 : ");
var number2 = prompt("Enter Your number2 : ");
var number3 = prompt("Enter Your number3 : ");

var n1 = parseInt(number1);
var n2 = parseInt(number2);
var n3 = parseInt(number3);

// if (n1>n2){
//     if(n1>n3){
//         console.log(`${number1} is BIG`)
//     }
//     else{
//         console.log(`${number3} is BIG`)
//     }
// }
// else {
//     if(n2>n3){
//         console.log(`${number2} is BIG`)
//     }
//     else{
//         console.log(`${number3} is BIG`)
//     }
// }

if(n1>n2 && n1>n3){
    console.log(`${n1} is Big`)
}
else if(n2>n1 && n2>n3){
    console.log(`${n2} is Big`)
}

else {
    console.log(`${n3} is Big`)
}