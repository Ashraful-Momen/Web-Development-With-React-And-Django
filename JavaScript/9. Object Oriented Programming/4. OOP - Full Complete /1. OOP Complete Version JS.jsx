// 1. Class Declaration and Constructor
class Animal {
    #privateField; // Private field (encapsulation)
    static count = 0; // Static property

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.#privateField = 'This is private';
        Animal.count++;
    }

    // Instance method
    makeSound() {
        console.log('Some generic sound');
    }

    // Getter (part of encapsulation)
    get info() {
        return `${this.name} is ${this.age} years old`;
    }

    // Setter (part of encapsulation)
    set animalAge(age) {
        if (age < 0) throw new Error('Age cannot be negative');
        this.age = age;
    }

    // Private method (encapsulation)
    #privateMethod() {
        return 'This is a private method';
    }

    // Static method
    static getCount() {
        return Animal.count;
    }
}

// 2. Inheritance
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age); // Call parent constructor
        this.breed = breed;
    }

    // Method overriding (polymorphism)
    makeSound() {
        console.log('Woof! Woof!');
    }

    // Additional method specific to Dog
    fetch() {
        console.log(`${this.name} is fetching the ball`);
    }
}

// 3. Abstract Class example (using composition)
class AnimalBehavior {
    constructor() {
        if (this.constructor === AnimalBehavior) {
            throw new Error('Abstract class cannot be instantiated');
        }
    }

    eat() {
        throw new Error('Method eat() must be implemented');
    }

    sleep() {
        throw new Error('Method sleep() must be implemented');
    }
}

// 4. Interface-like implementation (using composition)
class Swimmable {
    swim() {
        return 'Swimming...';
    }
}

// 5. Multiple inheritance-like behavior using mixins
const flyableMixin = {
    fly() {
        return `${this.name} is flying`;
    }
};

// 6. Class implementing abstract behavior and using mixin
class Duck extends Animal {
    constructor(name, age) {
        super(name, age);
        Object.assign(this, flyableMixin); // Mixing in flying behavior
        this.swimmer = new Swimmable(); // Composition for swimming behavior
    }

    // Implementing abstract methods
    eat() {
        return `${this.name} is eating`;
    }

    sleep() {
        return `${this.name} is sleeping`;
    }

    // Method using composed behavior
    goSwimming() {
        return this.swimmer.swim();
    }
}

// Usage Examples:

// Creating instances
const dog = new Dog('Max', 3, 'Golden Retriever');
const duck = new Duck('Donald', 2);

// Using inheritance and polymorphism
console.log(dog.info); // Getter inherited from Animal
dog.makeSound(); // Overridden method
dog.fetch(); // Dog-specific method

// Using mixed-in and composed behavior
console.log(duck.fly()); // From mixin
console.log(duck.goSwimming()); // From composition

// Demonstrating encapsulation
try {
    dog.animalAge = -5; // Will throw error due to setter validation
} catch (e) {
    console.log(e.message);
}

// Using static members
console.log(`Total animals created: ${Animal.getCount()}`);

// Demonstrating private fields and methods
console.log(dog.#privateField); // SyntaxError: Private field
console.log(dog.#privateMethod()); // SyntaxError: Private method

// Factory Pattern Example
class AnimalFactory {
    static createAnimal(type, name, age) {
        switch(type.toLowerCase()) {
            case 'dog':
                return new Dog(name, age, 'Unknown breed');
            case 'duck':
                return new Duck(name, age);
            default:
                throw new Error('Unknown animal type');
        }
    }
}

// Singleton Pattern Example
class AnimalRegistry {
    static #instance = null;
    #animals = new Map();

    constructor() {
        if (AnimalRegistry.#instance) {
            return AnimalRegistry.#instance;
        }
        AnimalRegistry.#instance = this;
    }

    registerAnimal(animal) {
        this.#animals.set(animal.name, animal);
    }

    getAnimal(name) {
        return this.#animals.get(name);
    }

    static getInstance() {
        if (!AnimalRegistry.#instance) {
            AnimalRegistry.#instance = new AnimalRegistry();
        }
        return AnimalRegistry.#instance;
    }
}
