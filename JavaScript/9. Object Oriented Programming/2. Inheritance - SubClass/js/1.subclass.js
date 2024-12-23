// Sub Class 
// Inheritance 

// class Person {
//     //Base Class 
//     constructor(fname, lname) {
//         this.firstname = fname;
//         this.lastname = lname;
//     }
//     greeting() {
//         return `Hello ${this.firstname} ${this.lastname}!`;
//     }
// }
// class Customer extends Person {
//     //Sub Class 
//     constructor(fname, lname, phone, memberShip) {
//         super(fname, lname);
//         this.phone = phone;
//         this.memberShip = memberShip;
//     }
//     fullname() {
//         console.log(this.firstname, this.lastname);
//     }
// }

// let person1 = new Person("Fazle", "Rahat");

// console.log(person1);
// console.log(person1.greeting());
// console.log(person1.fullname());

// let customer1 = new Customer("Rony", "Chy", "017777778888", "1234");

// console.log(customer1);
// console.log(customer1.greeting());
// console.log(customer1.fullname());

//---------------------------------------------------------------------------

class Parent{
    constructor(fname,lname){
        this.firstName = fname;
        this.lastName = lname;
    }

    greeting(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

class child extends Parent{
    constructor(firstName,lastName,age,phone){
        super(firstName,lastName)

        this.age =age;
        this.phone = phone;
    }
    fullName(){
        console.log(`Your Full Name is : ${this.firstName} ${this.lastName}`);
    }
}

person1 = new child("Md","Ashraful", 20, "01751212933");

person1.fullName();

person1.greeting();
 
