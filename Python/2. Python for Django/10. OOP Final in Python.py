# 1. CLASS AND OBJECT BASICS
class Car:
    # Class variable (shared by all instances)
    total_cars = 0
    
    # Constructor (Initialize instance variables)
    def __init__(self, brand, color):
        # Instance variables (unique to each instance)
        self.brand = brand  # Public attribute
        self.color = color  # Public attribute
        self._mileage = 0   # Protected attribute (convention)
        self.__vin = "123"  # Private attribute (name mangling)
        Car.total_cars += 1
    
    # Instance method
    def drive(self, distance):
        self._mileage += distance
        return f"Driving {distance} km"
    
    # Method to get private attribute
    def get_vin(self):
        return self.__vin

# Creating objects
car1 = Car("Toyota", "Red")
car2 = Car("Honda", "Blue")

# Using objects
print(car1.drive(100))
print(Car.total_cars)  # Accessing class variable

# 2. INHERITANCE
class Vehicle:
    def __init__(self, brand):
        self.brand = brand
    
    def start_engine(self):
        return "Engine started"
    
    def stop_engine(self):
        return "Engine stopped"

class ElectricCar(Vehicle):
    def __init__(self, brand, battery_capacity):
        # Call parent class constructor
        super().__init__(brand)
        self.battery_capacity = battery_capacity
    
    # Override parent method
    def start_engine(self):
        return "Electric motor started silently"
    
    # Additional method
    def charge(self):
        return f"Charging {self.brand}'s {self.battery_capacity}kWh battery"

# Multiple inheritance
class Flyable:
    def fly(self):
        return "Flying"

class FlyingCar(ElectricCar, Flyable):
    def __init__(self, brand, battery_capacity, max_altitude):
        super().__init__(brand, battery_capacity)
        self.max_altitude = max_altitude

# 3. ENCAPSULATION
class BankAccount:
    def __init__(self):
        self.__balance = 0  # Private attribute
    
    # Getter method
    def get_balance(self):
        return self.__balance
    
    # Setter method
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    # Property decorator - modern way to implement getters/setters
    @property
    def balance(self):
        return self.__balance
    
    @balance.setter
    def balance(self, value):
        if value >= 0:
            self.__balance = value

# 4. POLYMORPHISM
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width
    
    def area(self):
        return self.length * self.width
    
    def perimeter(self):
        return 2 * (self.length + self.width)

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        import math
        return math.pi * self.radius ** 2
    
    def perimeter(self):
        import math
        return 2 * math.pi * self.radius

# 5. CLASS METHODS AND STATIC METHODS
class DateUtils:
    @staticmethod
    def is_valid_date(day, month, year):
        # Static method - doesn't need class or instance
        if month in [4, 6, 9, 11]:
            return day <= 30
        elif month == 2:
            if year % 4 == 0:
                return day <= 29
            return day <= 28
        else:
            return day <= 31
    
    @classmethod
    def from_string(cls, date_str):
        # Class method - receives class as first parameter
        day, month, year = map(int, date_str.split('-'))
        if cls.is_valid_date(day, month, year):
            return cls(day, month, year)
        raise ValueError("Invalid date")

# 6. MAGIC METHODS (DUNDER METHODS)
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    # String representation
    def __str__(self):
        return f"Point({self.x}, {self.y})"
    
    # Representation for developers
    def __repr__(self):
        return f"Point(x={self.x}, y={self.y})"
    
    # Addition
    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)
    
    # Equality
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    
    # Less than
    def __lt__(self, other):
        return (self.x**2 + self.y**2) < (other.x**2 + other.y**2)

# 7. PROPERTY DECORATORS
class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero!")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        return (self.celsius * 9/5) + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        self.celsius = (value - 32) * 5/9

# 8. COMPOSITION
class Engine:
    def start(self):
        return "Engine running"
    
    def stop(self):
        return "Engine stopped"

class CarWithComposition:
    def __init__(self, brand):
        self.brand = brand
        # Composition: Car has an Engine
        self.engine = Engine()
    
    def start_car(self):
        return f"{self.brand}: {self.engine.start()}"

# 9. CONTEXT MANAGERS
class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()

# 10. DESCRIPTORS
class Validator:
    def __init__(self, min_value=None, max_value=None):
        self.min_value = min_value
        self.max_value = max_value
    
    def __get__(self, instance, owner):
        return instance.__dict__[self.name]
    
    def __set__(self, instance, value):
        if self.min_value is not None and value < self.min_value:
            raise ValueError(f"Value cannot be less than {self.min_value}")
        if self.max_value is not None and value > self.max_value:
            raise ValueError(f"Value cannot be greater than {self.max_value}")
        instance.__dict__[self.name] = value
    
    def __set_name__(self, owner, name):
        self.name = name

# Usage Examples:

# 1. Basic Class Usage
car = Car("Toyota", "Red")
print(car.drive(100))

# 2. Inheritance
tesla = ElectricCar("Tesla", 100)
print(tesla.start_engine())
print(tesla.charge())

# 3. Encapsulation
account = BankAccount()
account.deposit(1000)
print(account.get_balance())

# 4. Polymorphism
shapes = [Rectangle(5, 3), Circle(4)]
for shape in shapes:
    print(f"Area: {shape.area()}")

# 5. Static and Class Methods
print(DateUtils.is_valid_date(29, 2, 2024))

# 6. Magic Methods
p1 = Point(1, 2)
p2 = Point(3, 4)
print(p1 + p2)

# 7. Properties
temp = Temperature(25)
print(temp.fahrenheit)
temp.celsius = 30
print(temp.fahrenheit)

# 8. Composition
car_with_engine = CarWithComposition("BMW")
print(car_with_engine.start_car())

# 9. Context Manager
with FileManager("test.txt", "w") as file:
    file.write("Hello, World!")
