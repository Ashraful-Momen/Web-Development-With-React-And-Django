
// var number1 = prompt("Enter your first Number: ");
// var number2 = prompt("Enter your second Number: ");

// let n1 = parseInt(number1);
// let n2 = parseInt(number2);

// // console.log(`Select your Option: 
// // 1.Addition
// // 2.Substruction
// // 3.Multiplication
// // 4.Division`)


// var operation = prompt(`Select your Option: 
//     1.Addition
//     2.Substruction
//     3.Multiplication
//     4.Division`);

// switch (operation) {
//     case "1":
//         console.log(`Addition ${n1} + ${n2} = ${n1 + n2}`);
//         break;
//     case "2":
//         console.log(`Substruction ${n1} - ${n2} = ${n1 - n2}`);
//         break;
//     case "3":
//         console.log(`Multiplication ${n1} * ${n2} = ${n1 * n2}`);
//         break;
//     case "4 ":
//         console.log(`Division ${n1} / ${n2} = ${n1 / n2}`);

//         break;

//     default:
//         console.log(`Invalid input for operation!!!`)

// }


//===================Chat GPT Calculator======================

let operation;

while (true) {
    var n1 = prompt("Enter your first Number: ");
    var n2 = prompt("Enter your second Number: ");
    operation = prompt(`Select your Option:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    5. exit`);

    switch (operation) {
        case "1":
            alert(`Addition ${n1} + ${n2} = ${n1 + n2}`);
            continue; // Continue to the next iteration of the loop
            ;
        case "2":
            alert(`Subtraction ${n1} - ${n2} = ${n1 - n2}`);
            continue; // Continue to the next iteration of the loop
            ;
        case "3":
            alert(`Multiplication ${n1} * ${n2} = ${n1 * n2}`);
            continue; // Continue to the next iteration of the loop
            ;
        case "4":
            alert(`Division ${n1} / ${n2} = ${n1 / n2}`);
            continue; // Continue to the next iteration of the loop
        case "exit":
            alert(`Invalid input for operation!!!`);
            break; // Continue to the next iteration of the loop
        default:
            alert("Invalid input for operation");
    }

    break; // Exit the loop
}

//============================Sir : Code================================
console.log("Select an Option: n1. Add n2. Subtractn3. Mulitply n4. Divide");
var num1 = prompt("Enter First Number: ");
var num2 = prompt("Enter Second Number: ");
var option = prompt("Choose an operation: ");
var result = null;
num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);
var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);
if (num1Con || num2Con || optionCon) { console.log("Invalid Input!"); }
else {
    switch (option) {
        case 1: result = num1 + num2;
            break;
        case 2: result = num1 - num2; break;
        case 3: result = num1 * num2; break;
        case 4: result = num1 / num2; break;
        default: break;
    }
    if (result == null) { console.log("No Result!"); }
    else { console.log("Result: " + result); }
}

