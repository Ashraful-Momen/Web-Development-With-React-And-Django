//Class : is a BluePrint/template for an Object. variable in a class is known as property and function is know as method.

class person{
    constructor(FName,Lname,age){
        this.FirstName = FName;
        this.LastName = Lname;
        this.dob = age;
    }

    calculateAge(){
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    fullName(){
        console.log(`Your Full Name is : ${this.FirstName} ${this.LastName}`)
    }

}

let person1 = new person('Ashraful',"momen","10-28-1995");

// console.log(person1.dob);
console.log(person1.calculateAge());
person1.fullName();