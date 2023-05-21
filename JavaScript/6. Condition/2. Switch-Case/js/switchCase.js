
console.log(`1. select "a"\n2. select "b" \n3. select "c" `);

var choice = prompt("Enter Your Selected Option:");

switch (choice) {
    case "a":
        
        console.log(`You selected "a"`);
        break;
    case "b":
        console.log(`You selected "b"`);
        break;
    case "c":
        console.log(`You selected "c"`);
         
        break;

    default:
        console.log("invalid input");

}

