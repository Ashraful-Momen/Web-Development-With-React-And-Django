# ---------------------------------------------------------------------
# PYTHON DECORATORS - STEP-BY-STEP CONCEPT CLEARING NOTE
# ---------------------------------------------------------------------
# 💡 ডেকোরেটর বোঝার ৩টি গোল্ডেন রুল (Python-এর বৈশিষ্ট্য):
# ১. ফাংশনকে ভ্যারিয়েবলের মতো অন্য ফাংশনে পাস (Pass) করা যায়।
# ২. একটি ফাংশনের ভেতরে আরেকটি নতুন ফাংশন তৈরি (Nested Function) করা যায়।
# ৩. ভেতরের ফাংশনটিকে বাইরে রিটার্ন (Return) করে দেওয়া যায়।
# ---------------------------------------------------------------------

# =====================================================================
# 🛠️ STEP 1: ডেকোরেটর আসলে কী? (ম্যানুয়াল মেকানিজম)
# =====================================================================
# ডেকোরেটর হলো একটি ফাংশন যা অন্য একটি ফাংশনকে ইনপুট হিসেবে নেয়, 
# তার চারপাশে কিছু এক্সট্রা কোড যোগ করে এবং মডিফাইড রূপটি রিটার্ন করে।

def my_decorator(original_function):
    # wrapper শব্দের অর্থ মোড়ক। এটি মূল ফাংশনটিকে পেঁচিয়ে রাখে।
    def wrapper():
        print("1. [Before] মেইন ফাংশনটি রান হওয়ার আগের কোড...")
        original_function() # আসল ফাংশনটি এখানে এক্সিকিউট হচ্ছে
        print("2. [After] মেইন ফাংশনটি রান হওয়ার পরের কোড...\n")
    
    return wrapper # ভেতরের মোড়ক বা wrapper ফাংশনটিকে রিটার্ন করে দেওয়া হলো

def say_hello():
    print("👉 Hello World! (I am the original function)")

# ম্যানুয়ালি ডেকোরেট করার নিয়ম:
decorated_hello = my_decorator(say_hello) 
# এখন decorated_hello মূলত 'wrapper' ফাংশনটি হয়ে গেছে।
decorated_hello() 


# =====================================================================
# 🚀 STEP 2: '@' (Syntactic Sugar) দিয়ে স্মার্টলি লেখা
# =====================================================================
# পাইথনে উপরের ম্যানুয়াল কাজটি না করে সহজে '@' চিহ্ন ব্যবহার করা হয়।

@my_decorator  # এটি লেখার মানেই হলো: greet = my_decorator(greet)
def greet():
    print("👉 Hello Harry!")

greet() # সরাসরি কল করলেই ডেকোরেটরের কোডসহ রান হবে


# =====================================================================
# 🔥 STEP 3: ফাংশনে আর্গুমেন্ট/প্যারামিটার থাকলে কী হবে? (The Master Rule)
# =====================================================================
# যদি আমাদের মেইন ফাংশন কোনো ইনপুট নেয় (যেমন name, age), 
# তাহলে wrapper ফাংশনটি ক্র্যাশ করবে যদি আমরা *args, **kwargs ব্যবহার না করি।
# *args, **kwargs দেওয়ার কারণে এটি যেকোনো ফাংশনের জন্য ইউনিভার্সাল হয়ে যায়।

def smart_decorator(func):
    def wrapper(*args, **kwargs): # ✅ যেকোনো ইনপুট এখানে রিসিভ হবে (Tuple/Dict)
        print(f"⚡ [Log] Calling function: {func.__name__}")
        
        result = func(*args, **kwargs) # ✅ ইনপুটগুলো মেইন ফাংশনে পাস করে দেওয়া হলো
        
        print(f"⚡ [Log] Execution complete.\n")
        return result # মেইন ফাংশন কিছু রিটার্ন করলে তা wrapper থেকে রিটার্ন করতে হবে
    return wrapper

@smart_decorator
def add_numbers(a, b):
    return a + b

# টেস্ট করা যাক:
sum_ans = add_numbers(5, 10)
print(f"Result: {sum_ans}\n")


# =====================================================================
# 👑 STEP 4: ডেকোরেটরের নিজের আর্গুমেন্ট থাকলে (3-Layered Decorator)
# =====================================================================
# যদি আমরা ডেকোরেটরেও ভ্যালু পাস করতে চাই (যেমন: @repeat(times=3)) 
# তাহলে আমাদের ৩টি লেয়ার বা ৩টি ডিফাইন (def) ব্যবহার করতে হবে।
# ১. আউটার লেয়ার (repeat): ডেকোরেটরের নিজস্ব আর্গুমেন্ট রিসিভ করে।
# ২. মিডল লেয়ার (decorator): আসল ফাংশনটিকে রিসিভ করে।
# ৩. ইনার লেয়ার (wrapper): আসল ফাংশনের আর্গুমেন্ট রিসিভ করে ও লুপ চালায়।

def repeat(times): # লেয়ার ১: ডেকোরেটরের আর্গুমেন্ট
    def decorator(func): # লেয়ার ২: আসল ফাংশন
        def wrapper(*args, **kwargs): # লেয়ার ৩: আসল ফাংশনের আর্গুমেন্ট
            for i in range(times):
                print(f"Loop {i+1}: ", end="")
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(times=3) # এখানে বলে দিলাম ৩ বার রান করতে
def ping(msg):
    print(f"Sending... {msg}")

ping("Hello Server")
# ---------------------------------------------------------------------













# ---------------------------------------------------------------------
# PYTHON DECORATORS & *args/**kwargs - MASTER CHEAT SHEET
# ---------------------------------------------------------------------
# Core Concepts:
# *args: আনলিমিটেড পজিশনাল আর্গুমেন্ট গ্রহণ করে এবং ভেতরে 'Tuple' হিসেবে কাজ করে।
# **kwargs: আনলিমিটেড কি-ভ্যালু আর্গুমেন্ট গ্রহণ করে এবং ভেতরে 'Dictionary' হিসেবে কাজ করে।
# Decorator: একটি ফাংশনকে মডিফাই না করে তার বাইরে অতিরিক্ত ফাংশনালিটি যোগ করার ট্রিক।
# Golden Rule: ডেকোরেটরের ভেতর *args, **kwargs ব্যবহার করলে যেকোনো ফাংশনে তা ইউনিভার্সাল কাজ করে।
# ---------------------------------------------------------------------

import time

# === 1. BASIC UNDERSTANDING OF *args & **kwargs ===
def universal_func(*args, **kwargs):
    print(args, type(args))      # 👉 Tuple হিসেবে জমা হয়
    print(kwargs, type(kwargs))  # 👉 Dictionary হিসেবে জমা হয়

universal_func(1, 2, name="Alice", age=25)
# Output: (1, 2) <class 'tuple'>  |  {'name': 'Alice', 'age': 25} <class 'dict'>


# === 2. WHY USE *args & **kwargs IN DECORATORS? (The Golden Rule) ===
# এটি ছাড়া ডেকোরেটর প্যারামিটার নেওয়া ফাংশনে কাজ করতে পারে না (TypeError দেয়)
def logger_decorator(func):
    def wrapper(*args, **kwargs):  # ✅ যেকোনো প্যারামিটার এক্সেপ্ট করবে
        print(f"Calling: {func.__name__} | Args: {args} | Kwargs: {kwargs}")
        result = func(*args, **kwargs)  # ✅ প্যারামিটারগুলো মেইন ফাংশনে পাস করবে
        print(f"Returned: {result}")
        return result
    return wrapper

@logger_decorator
def greet(name, age, city="Unknown"):
    return f"Hello {name} ({age}) from {city}"

greet("Harry", 30, city="Dhaka")


# === 3. DECORATOR WITH ITS OWN ARGUMENTS (Parameterized Decorator) ===
# ডেকোরেটরে নিজের আর্গুমেন্ট পাস করতে চাইলে ৩ লেয়ারের nested ফাংশন লাগে।
def repeat(n_times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            results = []
            for _ in range(n_times):
                results.append(func(*args, **kwargs))
            return results
        return wrapper
    return decorator

@repeat(n_times=3)
def say_hello(name):
    return f"Hello {name}"

print(say_hello("Bob"))  # 👉 Output: ['Hello Bob', 'Hello Bob', 'Hello Bob']


# === 4. REAL-WORLD ADVANCED DECORATOR PATTERNS ===

# (A) Timing Decorator (কোড রান হতে কত সেকেন্ড লাগলো মাপা)
def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"⏱️ {func.__name__} took {time.time() - start:.4f} seconds")
        return result
    return wrapper

@timer
def heavy_task():
    time.sleep(1)

heavy_task()


# (B) Input Validation Decorator (নেগেটিভ ভ্যালু আসলে এরর থ্রো করবে)
def validate_non_negative(func):
    def wrapper(*args, **kwargs):
        # args ও kwargs এর সব সংখ্যা চেক করা হচ্ছে
        all_values = list(args) + list(kwargs.values())
        for val in all_values:
            if isinstance(val, (int, float)) and val < 0:
                raise ValueError("❌ Negative values are not allowed!")
        return func(*args, **kwargs)
    return wrapper

@validate_non_negative
def update_salary(salary):
    return f"Salary updated to: ${salary}"

# update_salary(-500) # 👉 এটি ValueError থ্রো করবে


# (C) Mutating/Modifying Arguments (ইনপুট স্ট্রিংকে Uppercase এ রূপান্তর)
def to_uppercase(func):
    def wrapper(*args, **kwargs):
        new_args = [arg.upper() if isinstance(arg, str) else arg for arg in args]
        new_kwargs = {k: v.upper() if isinstance(v, str) else v for k, v in kwargs.items()}
        return func(*new_args, **new_kwargs)
    return wrapper

@to_uppercase
def send_msg(msg, tag="info"):
    return f"Message: {msg} [{tag}]"

print(send_msg("hello world", tag="test"))  # 👉 Output: MESSAGE: HELLO WORLD [TEST]


# (D) Conditional Execution (None ভ্যালু থাকলে রান না করে স্কিপ করবে)
def skip_if_none(func):
    def wrapper(*args, **kwargs):
        if any(arg is None for arg in args) or any(v is None for v in kwargs.values()):
            print("⚠️ None value detected! Skipping execution.")
            return None
        return func(*args, **kwargs)
    return wrapper

@skip_if_none
def multiply(a, b): return a * b

print(multiply(5, None))  # 👉 Output: None (ফাংশন রানই হবে না)
# ---------------------------------------------------------------------












====================================================

# **`fn(*args, **kwargs)` - Complete Guide**

## **What is `*args` and `**kwargs`?**

### **`*args`** - Variable Positional Arguments
```python
def example(*args):
    print(f"Args: {args}")
    print(f"Type: {type(args)}")  # Always tuple

example(1, 2, 3)           # Args: (1, 2, 3)
example("a", "b")          # Args: ('a', 'b')
example()                  # Args: ()
```

### **`**kwargs`** - Variable Keyword Arguments
```python
def example(**kwargs):
    print(f"Kwargs: {kwargs}")
    print(f"Type: {type(kwargs)}")  # Always dict

example(name="Alice", age=25)  # Kwargs: {'name': 'Alice', 'age': 25}
example(x=1, y=2)             # Kwargs: {'x': 1, 'y': 2}
example()                     # Kwargs: {}
```

## **1. Using `*args` and `**kwargs` Together**
```python
def universal_function(*args, **kwargs):
    print(f"Positional arguments: {args}")
    print(f"Keyword arguments: {kwargs}")

universal_function(1, 2, 3, name="Alice", age=25)
```
**Output:**
```
Positional arguments: (1, 2, 3)
Keyword arguments: {'name': 'Alice', 'age': 25}
```

## **2. Why Use in Decorators?**
```python
def logger_decorator(func):
    def wrapper(*args, **kwargs):  # Accept ANY arguments
        print(f"Calling {func.__name__} with: args={args}, kwargs={kwargs}")
        result = func(*args, **kwargs)  # Pass ALL arguments to original function
        print(f"Function returned: {result}")
        return result
    return wrapper

@logger_decorator
def greet(name, age, city="Unknown"):
    return f"Hello {name}, age {age} from {city}"

# All these work perfectly:
greet("Alice", 25)
greet("Bob", 30, city="New York")
greet("Charlie", age=35, city="London")
```

```python
# ---------------------------------------- controll the function call by decorator -------------------
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(times=2)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")

┌──(ashraful㉿kali)-[~/Instasure/MicroService_Python/Python]
└─$ python decorator.py
Hello, Alice!
Hello, Alice!
```

## **3. Step-by-Step Breakdown**

### **Without `*args, **kwargs` (PROBLEM)**
```python
def bad_decorator(func):
    def wrapper():  # ❌ No parameters
        print("Before")
        func()      # ❌ Can't pass arguments
        print("After")
    return wrapper

@bad_decorator
def say_hello(name):
    print(f"Hello {name}")

say_hello("Alice")  # ❌ TypeError: wrapper() takes 0 positional arguments...
```

### **With `*args, **kwargs` (SOLUTION)**
```python
def good_decorator(func):
    def wrapper(*args, **kwargs):  # ✅ Accepts any parameters
        print("Before")
        func(*args, **kwargs)      # ✅ Passes all parameters
        print("After")
    return wrapper

@good_decorator
def say_hello(name):
    print(f"Hello {name}")

say_hello("Alice")  # ✅ Works!
```

## **4. Real-World Decorator Examples**

### **Timing Decorator**
```python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end-start:.4f} seconds")
        return result
    return wrapper

@timer
def expensive_operation(n):
    time.sleep(1)
    return n * n

result = expensive_operation(5)  # Works with parameters!
```

### **Validation Decorator**
```python
def validate_non_negative(func):
    def wrapper(*args, **kwargs):
        # Check all positional arguments
        for arg in args:
            if isinstance(arg, (int, float)) and arg < 0:
                raise ValueError("Negative values not allowed")
        
        # Check all keyword arguments  
        for key, value in kwargs.items():
            if isinstance(value, (int, float)) and value < 0:
                raise ValueError(f"Negative value for {key}")
        
        return func(*args, **kwargs)
    return wrapper

@validate_non_negative
def create_person(name, age, salary=0):
    return f"{name}, {age} years, salary: ${salary}"

print(create_person("Alice", 25, salary=50000))
# print(create_person("Bob", -5))  # ❌ Would raise ValueError
```

## **5. Advanced Usage**

### **Modifying Arguments**
```python
def to_uppercase(func):
    def wrapper(*args, **kwargs):
        # Convert all string args to uppercase
        new_args = [arg.upper() if isinstance(arg, str) else arg for arg in args]
        new_kwargs = {k: v.upper() if isinstance(v, str) else v for k, v in kwargs.items()}
        
        return func(*new_args, **new_kwargs)
    return wrapper

@to_uppercase
def process_text(name, description, category="general"):
    return f"{name} - {description} [{category}]"

print(process_text("hello", "world", category="test"))
# Output: HELLO - WORLD [TEST]
```

### **Conditional Execution**
```python
def skip_if_none(func):
    def wrapper(*args, **kwargs):
        if any(arg is None for arg in args):
            print("Skipping function - None value detected")
            return None
        return func(*args, **kwargs)
    return wrapper

@skip_if_none
def multiply(a, b):
    return a * b

print(multiply(5, 3))    # 15
print(multiply(5, None)) # Skipping function - None value detected
```

## **6. Common Patterns**

### **Decorator with Its Own Arguments + `*args, **kwargs`**
```python
def repeat(n_times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            results = []
            for _ in range(n_times):
                result = func(*args, **kwargs)
                results.append(result)
            return results
        return wrapper
    return decorator

@repeat(3)
def say_hello(name):
    return f"Hello {name}"

print(say_hello("Alice"))
# Output: ['Hello Alice', 'Hello Alice', 'Hello Alice']
```

## **Key Takeaways:**

1. **`*args`** collects positional arguments into a tuple
2. **`**kwargs`** collects keyword arguments into a dictionary  
3. **Always use** `*args, **kwargs` in decorator wrappers
4. **Pass them through** to the original function: `func(*args, **kwargs)`
5. **Makes decorators universal** - work with any function signature

This pattern makes your decorators flexible and reusable across different functions!
