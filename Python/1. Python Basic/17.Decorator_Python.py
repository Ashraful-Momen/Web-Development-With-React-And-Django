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











# ------------------------------------ my note -----------------------------------

# def my_fun():
#     print("Hello World")
    
# def print_myfn(fun):
#     fun()
#     print("Hello print_myfn")
    
# print_myfn(my_fun)
# =======================innner function return===========================


def greet (name):
    def hello():
        return "My Name is "+name
    return hello() #function return <-------call the fun here with () 

print(greet("Ashraful")) 

# def greet (name):
#     def hello():
#         return "My Name is "+name
#     return hello #function return <------ return only the function not call here 

# print(greet("Ashraful")()) <----------- the blank () , call the function for hello() .
# =======================Decorator core concept===========================

def greet(fn):
    def inner():
        fn()
        print("this is from inner function")
    return inner

@greet #another short way to call decorator: @greet function take the hello() function and modify / decorate .
def hello():
    print("This is from hello function")

# greet(hello)() #decorator fn calling

# hello() #

# -----------------------------------------decorator with params-------------------------


def zeroDivisionError(fn):
    def inner(a,b): # this -> a,b value take from divided(a,b)
        
        if b==0:
            return print("Zero Division Error!")
        return fn(a,b)
    return inner

@zeroDivisionError
def divided(a,b):
    return print(a/b)

divided(10,2)
divided(10,4)

divided(10,0)





