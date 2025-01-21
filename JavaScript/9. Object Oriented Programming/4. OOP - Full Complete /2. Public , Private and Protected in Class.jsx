// Access Modifiers in JavaScript
class Vehicle {
    // Public members (accessible from anywhere)
    publicProperty = 'I am public';
    
    // Private members (only accessible within the class)
    #privateProperty = 'I am private';
    #privateMethod() {
        return 'This is private method';
    }
    
    // Protected members (using Symbol and WeakMap)
    static _protected = new WeakMap();
    
    constructor(model, year) {
        this.model = model;  // public
        this.year = year;    // public
        
        // Initialize protected properties
        Vehicle._protected.set(this, {
            protectedProperty: 'I am protected',
            protectedMethod: function() {
                return 'This is protected method';
            }
        });
    }
    
    // Public methods
    public publicMethod() {
        console.log('This is public method');
        console.log('Accessing private:', this.#privateProperty);
        console.log('Calling private method:', this.#privateMethod());
        
        // Accessing protected members
        const protected = Vehicle._protected.get(this);
        console.log('Accessing protected:', protected.protectedProperty);
        console.log('Calling protected method:', protected.protectedMethod());
    }
    
    // Protected getter (can be used by child classes)
    _getProtected() {
        return Vehicle._protected.get(this);
    }
}

// Child class demonstrating inheritance and access modifiers
class Car extends Vehicle {
    #privateCarProperty = 'Car private property';
    
    constructor(model, year, color) {
        super(model, year);
        this.color = color; // public
        
        // Initialize car-specific protected properties
        Vehicle._protected.set(this, {
            ...Vehicle._protected.get(this),
            carProtectedProp: 'Car protected property'
        });
    }
    
    // Public method accessing different levels of members
    displayInfo() {
        console.log('Public members:');
        console.log('- Model:', this.model);
        console.log('- Year:', this.year);
        console.log('- Color:', this.color);
        
        // Accessing protected members using inherited protected getter
        const protected = this._getProtected();
        console.log('\nProtected members:');
        console.log('- Parent protected:', protected.protectedProperty);
        console.log('- Car protected:', protected.carProtectedProp);
        
        // Private members are class-scoped
        console.log('\nPrivate members:');
        console.log('- Car private:', this.#privateCarProperty);
        
        // Cannot access parent's private members
        try {
            console.log(this.#privateProperty); // This will throw an error
        } catch (e) {
            console.log('Cannot access parent private property');
        }
    }
}

// Usage Example
class ElectricCar extends Car {
    constructor(model, year, color, batteryCapacity) {
        super(model, year, color);
        this.batteryCapacity = batteryCapacity; // public
        
        // Add protected property
        Vehicle._protected.set(this, {
            ...Vehicle._protected.get(this),
            electricProtectedProp: 'Electric car protected property'
        });
    }
    
    // Method demonstrating access levels
    showAccessLevels() {
        console.log('\nAccess Levels in ElectricCar:');
        
        // Public access
        console.log('Public properties:');
        console.log('- Model:', this.model);
        console.log('- Battery:', this.batteryCapacity);
        
        // Protected access
        const protected = this._getProtected();
        console.log('\nProtected properties:');
        console.log('- Vehicle protected:', protected.protectedProperty);
        console.log('- Car protected:', protected.carProtectedProp);
        console.log('- Electric protected:', protected.electricProtectedProp);
    }
}

// Testing the implementation
console.log('Creating instances and testing access modifiers:');
console.log('--------------------------------------------');

const tesla = new ElectricCar('Model S', 2023, 'Red', '100kWh');

// Public access works from anywhere
console.log('\nPublic Access:');
console.log(tesla.model);         // Works
console.log(tesla.color);         // Works
console.log(tesla.batteryCapacity); // Works

// Protected access only works within class hierarchy
console.log('\nProtected Access:');
try {
    console.log(tesla._protected); // Won't work
} catch (e) {
    console.log('Cannot access protected directly from outside');
}

// Private access is class-scoped
console.log('\nPrivate Access:');
try {
    console.log(tesla.#privateCarProperty); // Won't work
} catch (e) {
    console.log('Cannot access private from outside');
}

// Using class methods to demonstrate access
console.log('\nAccessing via class methods:');
tesla.displayInfo();
tesla.showAccessLevels();

// Demonstrating encapsulation with getters and setters
class EncapsulationExample {
    #privateProp;
    static _protected = new WeakMap();
    
    constructor(value) {
        this.#privateProp = value;
        EncapsulationExample._protected.set(this, {
            protectedProp: value * 2
        });
    }
    
    // Public getter for private property
    get value() {
        return this.#privateProp;
    }
    
    // Public setter with validation for private property
    set value(newValue) {
        if (newValue < 0) {
            throw new Error('Value cannot be negative');
        }
        this.#privateProp = newValue;
    }
    
    // Protected getter method
    _getProtectedValue() {
        return EncapsulationExample._protected.get(this).protectedProp;
    }
    
    // Protected setter method
    _setProtectedValue(value) {
        EncapsulationExample._protected.set(this, {
            ...EncapsulationExample._protected.get(this),
            protectedProp: value
        });
    }
}
