// static function: object.func() can't call but class.func() can call ;

class person {
    constructor(name) {
        this.fname = name;
    }

    static callName() {
        console.log(`You can call me as class.func() but no object can call me . Your name is ${this.fname}`); // can't pass the variable to static's function.
    }
}

p1 = new person('Shuvo');

// p1.callName(); static function of class can't call by object 

person.callName('shuvo'); //static function off class can call by class.

//----------------------------------------------------------------------------

// Static Function 
class Person {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    greeting() { console.log(`Hello ${this.firstname} ${this.lastname}!`); }
    static test() { console.log("I am staic!"); }
}
let person1 = new Person("Simanta", "Paul");
console.log(person1.greeting());
console.log(Person.test());