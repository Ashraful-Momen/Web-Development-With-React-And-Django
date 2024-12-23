// Base class 1
class Parent1 {
    greeting() {
        console.log("Hello from Parent1");
    }
}

// Base class 2
class Parent2 {
    farewell() {
        console.log("Goodbye from Parent2");
    }
}

// Simple function to mix classes together
function mixClasses(...classes) {
    class MixedClass {}
    for (let Base of classes) {
        // Copy methods from Base class to MixedClass
        Object.getOwnPropertyNames(Base.prototype).forEach((name) => {
            if (name !== "constructor") {
                MixedClass.prototype[name] = Base.prototype[name];
            }
        });
    }
    return MixedClass;
}

// Child class extending the mixed base classes
class Child extends mixClasses(Parent1, Parent2) {
    customMethod() {
        console.log("Custom method from Child class");
    }
}

const person2 = new Child();

person2.greeting(); // Output: Hello from Parent1
person2.farewell(); // Output: Goodbye from Parent2
person2.customMethod(); // Output: Custom method from Child class
