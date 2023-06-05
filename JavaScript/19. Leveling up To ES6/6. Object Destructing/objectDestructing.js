// / Object Destructing : *** difference from array distructing is : => in array [ we can choose varible name but in object destring can't ]

let person = {
    firstName: "Fazle",
    lastName: "Rahat",
    dob: '09-27-1995'
}

// let fname = person.firstName,
//     lname = person.lastName,
//     dob = person.dob;
//     console.log(fname, lname, dob);

// let { firstName : fname, lastName, dob } = person; // obj.distructing name change => {callObjVaribaleName: NewVariableName}
// console.log(fname, lastName, dob);

// --------------------------------------------
// function display(person){
//     let fname = person.firstName,
//     lname = person.lastName,
//     dob = person.dob;
//     console.log(fname, lname, dob);   

// }


// display(person);
//------------------------------------

function display({ firstName, lastName, dob }) {
    console.log(firstName, lastName, dob);
}

display(person); 