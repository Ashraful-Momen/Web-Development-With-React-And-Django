# ---------------------------------------------------------------------
# PYTHON OBJECT-ORIENTED PROGRAMMING (OOP) - THE ULTIMATE CHEAT SHEET
# ---------------------------------------------------------------------
# Core Pillars: Encapsulation, Abstraction, Inheritance, Polymorphism
# Pythonic Features: MRO, Dunder Methods, Properties, Descriptors, Meta
# ---------------------------------------------------------------------

from abc import ABC, abstractmethod
import datetime

# =====================================================================
# 1. CLASS, OBJECT & CONSTRUCTOR (মৌলিক ধারণা)
# =====================================================================
# Class হলো অবজেক্ট তৈরির ব্লু-প্রিন্ট বা টেমপ্লেট। Object হলো ক্লাসের ইনস্ট্যান্স।
# __init__ হলো কনস্ট্রাক্টর যা অবজেক্ট তৈরির সময় ডেটা ইনিশিয়ালাইজ করে।

class Student:
    college_name = "Bangladesh Navy College" # Class Variable (সবার জন্য শেয়ার্ড)

    def __init__(self, name, id_num):
        self.name = name          # Instance Variable (প্রতিটি অবজেক্টের আলাদা)
        self.id = id_num          # Instance Variable

    # Instance Method: অবজেক্টের ডেটা নিয়ে কাজ করে। প্রথম প্যারামিটার অবশ্যই self।
    def display(self):
        print(f"Name: {self.name}, ID: {self.id}, College: {self.college_name}")

# অবজেক্ট তৈরি এবং ব্যবহার
s1 = Student("Ashraful", 101)
s1.display() # 👉 Output: Name: Ashraful, ID: 101...


# =====================================================================
# 2. STATIC METHODS & CLASS METHODS (@staticmethod & @classmethod)
# =====================================================================
# @classmethod: প্রথম প্যারামিটার হিসেবে ক্লাস (cls) নিজে আসে। ক্লাস ভ্যারিয়েবল চেঞ্জ করতে ব্যবহৃত হয়।
# @staticmethod: কোনো self বা cls নেয় না। এটি একটি সাধারণ ফাংশন যা ক্লাসের ভেতরে ইউটিলিটি হিসেবে থাকে।

class TimeUtilityManager:
    @classmethod
    def change_college(cls, new_name):
        Student.college_name = new_name # ক্লাস ভ্যারিয়েবল মডিফাই

    @staticmethod
    def current_time():
        return datetime.datetime.now() # ইউটিলিটি ম্যানেজার হিসেবে কাজ করে

print(TimeUtilityManager.current_time()) # 👉 সরাসরি ক্লাস নাম দিয়ে কল করা যায়


# =====================================================================
# 3. ENCAPSULATION & ACCESS MODIFIERS (তথ্য গোপন ও নিয়ন্ত্রণ)
# =====================================================================
# পাইথনে C#-এর মতো শক্ত Access Modifier নেই, তবে নেমিং কনভেনশন ব্যবহার করা হয়:
# Public: plain_name (যেকোনো জায়গা থেকে অ্যাক্সেসযোগ্য)
# Protected: _name (কনভেনশন অনুযায়ী শুধু চাইল্ড ক্লাসে ব্যবহার করা উচিত)
# Private: __name (Name Mangling ঘটে, ক্লাসের বাইরে সরাসরি অ্যাক্সেস ব্লক হয়)

class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner          # Public
        self._account_type = "Cold" # Protected
        self.__balance = balance    # Private (বাহির থেকে অ্যাক্সেস করা যাবে না)

    # Getter Method (Controlled Access)
    def get_balance(self):
        return self.__balance

    # Setter Method (Validation/Security)
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited: {amount}")
        else:
            raise ValueError("Invalid Amount")

account = BankAccount("Shuvo", 5000)
account.deposit(1000)
print(account.get_balance()) # 👉 Output: 6000
# print(account.__balance)  # ❌ AttributeError থ্রো করবে (Private)


# =====================================================================
# 4. MODERN PROPERTY DECORATORS (@property, @setter)
# =====================================================================
# C#-এর Property-র মতো পাইথনে গেটার-সেটারকে মেথড হিসেবে কল না করে 
# সরাসরি ভ্যারিয়েবল বা অ্যাট্রিবিউটের মতো অ্যাক্সেস করার স্মার্ট পাইথনিক উপায়।

class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius

    @property
    def fahrenheit(self): # Getter
        return (self._celsius * 9/5) + 32

    @fahrenheit.setter
    def fahrenheit(self, value): # Setter with Validation
        if value < -459.67:
            raise ValueError("Below absolute zero!")
        self._celsius = (value - 32) * 5/9

temp = Temperature(25)
print(temp.fahrenheit) # 👉 Method না, সরাসরি ভ্যারিয়েবলের মতো রিড (Output: 77.0)
temp.fahrenheit = 32   # 👉 সরাসরি ভ্যারিয়েবলের মতো রাইট/সেট


# =====================================================================
# 5. INHERITANCE & MRO (উত্তরাধিকার ও মেথড রেজোলিউশন অর্ডার)
# =====================================================================
# super().__init__() চাইল্ড ক্লাস থেকে প্যারেন্ট ক্লাসের কনস্ট্রাক্টর কল করে।
# পাইথনে Multiple Inheritance সাপোর্ট করে। কোন অর্ডারে মেথড কল হবে তা MRO ঠিক করে।

class Vehicle:
    def __init__(self, brand):
        self.brand = brand
    def start(self): return "Vehicle Engine Started"

class Flyable:
    def start(self): return "Flying Engine Started"

# Multiple Inheritance (এখানে Vehicle প্রথমে, তাই MRO অনুযায়ী এর গুরুত্ব আগে)
class FlyingCar(Vehicle, Flyable):
    def __init__(self, brand, max_alt):
        super().__init__(brand) # Vehicle-এর constructor কল হবে
        self.max_alt = max_alt

fc = FlyingCar("AeroCar", 5000)
print(fc.start()) # 👉 Output: Vehicle Engine Started (প্যারেন্ট অর্ডারে Vehicle আগে)
print(FlyingCar.__mro__) # 👉 MRO চেইন দেখার ট্রিক: FlyingCar -> Vehicle -> Flyable -> object


# =====================================================================
# 6. POLYMORPHISM: OVERRIDING VS OVERLOADING (বহুরূপীতা)
# =====================================================================
# Method Overriding: চাইল্ড ক্লাস প্যারেন্ট ক্লাসের মেথডের আচরণ বদলে ফেলে।
# Method Overloading: পাইথনে সরাসরি এক নামে একাধিক মেথড লেখা যায় না, 
# তবে ডিফল্ট আর্গুমেন্ট (None) দিয়ে Overloading-এর কাজ করা হয় (Compile-time Polymorphism alternative)।

class BaseDisplay:
    def show(self): print("Hi from Base")

class ChildDisplay(BaseDisplay):
    def show(self): # Method Overriding (Runtime Polymorphism)
        super().show() # প্যারেন্টের মেথডও রান করালাম
        print("Bye from Child")

# Pythonic Method Overloading Alternative:
class Area:
    def find_area(self, a=None, b=None):
        if a is not None and b is not None:
            print("Rectangle Area:", a * b)
        elif a is not None:
            print("Square Area:", a * a)
        else:
            print("No arguments provided")

area_obj = Area()
area_obj.find_area(5)    # 👉 Output: Square Area: 25
area_obj.find_area(5, 4) # 👉 Output: Rectangle Area: 20




# ---------------------------------------------------------------------
# PYTHON METHOD OVERRIDING (MODIFYING PARENT METHOD) - QUICK NOTE
# ---------------------------------------------------------------------
# Core Concept:
# চাইল্ড ক্লাসে প্যারেন্ট ক্লাসের হুবহু একই নামের মেথড (`add`) লিখলে তা ওভাররাইড হয়।
# super().add() ব্যবহার করে প্যারেন্ট ক্লাসের আসল যোগফলের লজিককে চাইল্ড ক্লাসে টেনে আনা হয়।
# এর ফলে প্যারেন্টের মূল কোড পরিবর্তন না করেই চাইল্ড ক্লাসে এক্সট্রা লজিক যোগ করা যায়।
# ---------------------------------------------------------------------

# === ১. প্যারেন্ট ক্লাস (Normal Calculator) ===
class BasicCalculator:
    def add(self, a, b):
        # এটি শুধুমাত্র দুটি সংখ্যার সাধারণ যোগফল রিটার্ন করে
        return a + b

# === ২. চাইল্ড ক্লাস (Advanced Calculator - যা প্যারেন্টের মেথড মডিফাই করবে) ===
class AdvancedCalculator(BasicCalculator):
    
    # প্যারেন্ট ক্লাসের 'add' মেথডটি এখানে মডিফাই (Override) করা হচ্ছে
    def add(self, a, b):
        # (A) super() দিয়ে প্যারেন্ট ক্লাসের আসল যোগফলটা আগে বের করে নিলাম
        base_sum = super().add(a, b) 
        
        # (B) এবার আমরা আমাদের চাইল্ড ক্লাসের নিজস্ব এক্সট্রা লজিক বা মডিফিকেশন যোগ করব
        # যেমন: আমরা চাই যোগফল যদি ১০০ এর বেশি হয়, তবে বোনাস হিসেবে আরও ১০ যোগ হবে!
        if base_sum > 100:
            modified_sum = base_sum + 10
            print("🚀 Advanced Feature: Sum is over 100, adding 10 bonus!")
            return modified_sum
            
        return base_sum

# === ৩. টেস্ট করে দেখা যাক ===

# সাধারণ ক্যালকুলেটর টেস্ট:
basic = BasicCalculator()
print(f"Basic Sum: {basic.add(50, 20)}")    # 👉 Output: 70 (স্বাভাবিক যোগফল)

print("-" * 40)

# অ্যাডভান্সড ক্যালকুলেটর টেস্ট (যা মডিফাইড):
smart = AdvancedCalculator()
print(f"Smart Sum 1: {smart.add(50, 20)}")  # 👉 Output: 70 (১০০ এর কম তাই নরমাল)
print(f"Smart Sum 2: {smart.add(80, 40)}")  # 👉 Output: 130 (১২০ এর সাথে ১০ বোনাস যোগ হয়েছে!)
# ---------------------------------------------------------------------




# =====================================================================
# 7. ABSTRACTION & ABSTRACT CLASS (ABC) (বাধ্যতামূলক নিয়ম তৈরি)
# =====================================================================
# Abstract Class থেকে সরাসরি অবজেক্ট তৈরি করা যায় না। 
# এটি চাইল্ড ক্লাসগুলোর জন্য একটি 'কন্ট্রাক্ট' বা গাইডলাইন তৈরি করে।

class Shape(ABC): # Abstract Base Class
    @abstractmethod
    def area(self): pass

class Triangle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height
    def area(self): # Abstract Method ইমপ্লিমেন্ট করতেই হবে, নয়তো এরর দেবে
        return 0.5 * self.base * self.height

# obj = Shape() # ❌ TypeError: Can't instantiate abstract class Shape
t = Triangle(10, 5)
print(t.area()) # 👉 Output: 25.0




# =====================================================================
# 8. MAGIC METODS / DUNDER METHODS (পাইথনের স্পেশাল ট্রিকস)
# =====================================================================
# ডবল আন্ডারস্কোর (__ Method __) কে ডান্ডার মেথড বলে। এগুলো অবজেক্টের বিল্ট-ইন আচরণ বদলায়।

# 'Point' নামে একটি নতুন ক্লাস বা নকশা তৈরি করা হচ্ছে
class Point:
    
    # এটি কনস্ট্রাক্টর মেথড; নতুন অবজেক্ট বা পয়েন্ট তৈরি করার সময় এটি নিজে নিজেই রান হয়
    def __init__(self, x, y):
        self.x = x  # অবজেক্টের নিজস্ব 'x' ভেরিয়েবলের মধ্যে বাইরের পাঠানো x এর মান রাখা হচ্ছে
        self.y = y  # অবজেক্টের নিজস্ব 'y' ভেরিয়েবলের মধ্যে বাইরের পাঠানো y এর মান রাখা হচ্ছে
    
    # অবজেক্টকে যখন print() করা হবে, তখন হিজিবিজি কোড না দেখিয়ে এই মেথডের রিটার্ন করা লেখাটি দেখাবে
    def __str__(self): 
        return f"Point({self.x}, {self.y})" # যেমন: Point(1, 2) এই ফরম্যাটে লেখাটি স্ক্রিনে আসবে
        
    # দুটি অবজেক্টের মাঝে যখন যোগ (+) চিহ্ন দেওয়া হবে, তখন ব্যাকহ্যান্ডে এই মেথডটি কাজ করবে
    def __add__(self, other): 
        # self এর x এবং অন্য অবজেক্ট (other) এর x যোগ হচ্ছে; একইভাবে y দুটিও যোগ হচ্ছে
        # যোগফল দুটি দিয়ে আবার একটি নতুন 'Point' অবজেক্ট তৈরি করে ফেরত (return) পাঠানো হচ্ছে
        return Point(self.x + other.x, self.y + other.y)

# 'p1' নামে একটি অবজেক্ট তৈরি করা হলো যার x=1 এবং y=2
p1 = Point(1, 2)

# 'p2' নামে আরেকটি অবজেক্ট তৈরি করা হলো যার x=3 এবং y=4
p2 = Point(3, 4)

# এখানে p1 এবং p2 যোগ করা হচ্ছে, যা অবজেক্টের ভেতরের __add__ মেথডকে ডাকবে
# এরপর __str__ মেথডের কল্যাণে সুন্দর ফরম্যাটে আউটপুট দেখাবে: Point(4, 6)
print(p1 + p2) 

# =====================================================================
# 9. ADVANCED: COMPOSITION, CONTEXT MANAGERS & META CLASSES
# =====================================================================

# (A) Composition ("Has-A" Relationship)
# ইনহেরিট্যান্স না করে এক ক্লাসের ভেতরে আরেক ক্লাসের অবজেক্ট ব্যবহার করা।
class Engine:
    def start(self): return "Engine Running"

class Car:
    def __init__(self):
        self.engine = Engine() # Car HAS AN Engine
    def start_car(self):
        return self.engine.start()

# (B) Context Manager (__enter__ & __exit__)
# with ব্লকের সাথে কাস্টম অবজেক্ট রিসোর্স ম্যানেজমেন্ট (যেমন অটো ফাইল বা কানেকশন ক্লোজ)।
class FileManager:
    def __enter__(self): 
        print("Entering context...")
        return self
    def __exit__(self, exc_type, exc_val, exc_tb): 
        print("Exiting context & cleaning up...")

with FileManager() as fm:
    print("Inside code block")

# (C) Meta Class (ক্লাসেরও ক্লাস)
# পাইথনে সবকিছুই অবজেক্ট। সাধারণ ক্লাসের টাইপ হলো 'type' ক্লাস। একেই মেটাক্লাস বলে।
print(type(int))  # 👉 <class 'type'>
print(type(Car))  # 👉 <class 'type'> (Car ক্লাসটি নিজে 'type' ক্লাসের একটি অবজেক্ট!)
# ---------------------------------------------------------------------
