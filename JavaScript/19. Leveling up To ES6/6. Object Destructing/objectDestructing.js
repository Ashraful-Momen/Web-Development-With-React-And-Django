// Object Destructuring: 
// *** Key difference from array destructuring: 
// In array destructuring [ ] we can choose any variable names
// In object destructuring { } we MUST use the exact property names from the object
// but we can rename them using colon syntax

let person = {
    firstName: "Fazle",
    lastName: "Rahat",
    dob: '09-27-1995'
}

// Traditional way without destructuring:
// let fname = person.firstName,
//     lname = person.lastName,
//     dob = person.dob;
// console.log(fname, lname, dob);
// Output: Fazle Rahat 09-27-1995

// Object destructuring with renaming:
// let { firstName : fname, lastName, dob } = person; 
// obj.destructuring name change => {originalPropertyName: newVariableName}
// console.log(fname, lastName, dob);
// Output: Fazle Rahat 09-27-1995
// fname gets "Fazle" (renamed from firstName)
// lastName gets "Rahat" (same name)
// dob gets "09-27-1995" (same name)

// --------------------------------------------
// Traditional function without destructuring:
// function display(person){
//     let fname = person.firstName,
//     lname = person.lastName,
//     dob = person.dob;
//     console.log(fname, lname, dob);   
//     // Output: Fazle Rahat 09-27-1995
// }
// display(person);

//------------------------------------

// Modern function with parameter destructuring:
function display({ firstName, lastName, dob }) {
    console.log(firstName, lastName, dob);
    // Output: Fazle Rahat 09-27-1995
    // The function automatically extracts firstName, lastName, and dob
    // from the passed object using destructuring in the parameter
}

display(person);
// Output: Fazle Rahat 09-27-1995
