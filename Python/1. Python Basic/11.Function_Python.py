# ---------------------------------------------------------------------
# PYTHON FUNCTIONS, LAMBDA & COMPREHENSION - QUICK CHEAT SHEET
# ---------------------------------------------------------------------
# Core Concepts: 
# def: সাধারণ ফাংশন তৈরি করার কিওয়ার্ড।
# *args (xarg): আনলিমিটেড পজিশনাল আর্গুমেন্ট গ্রহণ করে, যা ভেতরে 'Tuple' হিসেবে কাজ করে।
# **kwargs (xxarg): আনলিমিটেড কি-ভ্যালু আর্গুমেন্ট গ্রহণ করে, যা ভেতরে 'Dictionary' হিসেবে কাজ করে।
# lambda: এক লাইনের ছোট এবং নামহীন (Anonymous) ফাংশন তৈরির নিয়ম।
# List Comprehension: map() এবং filter() এর সবচেয়ে জনপ্রিয় এবং পাইথনিক অল্টারনেটিভ।
# ---------------------------------------------------------------------

# 1. Basic Functions & Function Reference (ফাংশন রেফারেন্স ট্রিক)
# ফাংশনকে অন্য একটি ভ্যারিয়েবলের মধ্যে অ্যাসাইন করে সেই নামেও কল করা যায়।
def sum_val(a, b): return a + b
def sub_val(a, b): return a - b
def mul_val(a, b): return a * b
def div_val(a, b): return a / b
def display(ans):  print("Your ans is:", ans)

display(sum_val(2, 2)) # Output: 4

def large(a, b):
    return a if a > b else b

max_func = large  # ফাংশনকে ভ্যারিয়েবলে রাখা (Function Reference)
print(max_func(2, 4))  # 👉 Output: 4


# 2. *args (xarg) - Working as Tuple
# যখন জানা থাকে না লুপে কয়টি ভ্যালু আসবে, তখন এক জাতীয় ডেটার জন্য এটি ব্যবহার করা হয়।
def sum_all(*num):
    add = 0
    for x in num:  # 'num' এখানে একটি Tuple হিসেবে কাজ করছে
        add = add + x
    print(add)

sum_all(20, 30, 50)  # 👉 Output: 100


# 3. **kwargs (xxarg) - Working as Dictionary
# কি-ভ্যালু (Key=Value) আকারে আনলিমিটেড ডেটা পাস করার জন্য ডিকশনারি মোড।
def student(**details):  
    print(details["id"])
    print(details["name"])

student(id=101, name="Shuvo") 
# student(id=102, name="Ashraful", aname="Shuvo") # 💡 custom key পাস করলেও সমস্যা নেই


# 4. Lambda Function (নামহীন ১ লাইনের ফাংশন)
# সিনট্যাক্স: lambda parameters: expression (value1, value2)
# (A) Single parameter:
cube = (lambda x: x * x * x)(2)
print(cube)  # 👉 Output: 8

# (B) Multiple parameters (Formula: a^2 + 2ab + b^2):
formula = (lambda a, b: a*a + 2*a*b + b*b)(2, 2)
print(formula)  # 👉 Output: 16


# 5. Built-in Map & Filter (প্রথাগত মেথড)
# (A) map(function, iterable): প্রতিটি উপাদানের ওপর ফাংশন অ্যাপ্লাই করে। (ফাংশনে "()" বসে না)
num = [1, 2, 3, 4]
result_map = list(map(lambda x: x*x, num))
print(result_map)  # 👉 Output: [1, 4, 9, 16]

# (B) filter(function, iterable): কন্ডিশন সত্য হলে উপাদান রাখে, মিথ্যা হলে রিমুভ করে।
result_filter = list(filter(lambda x: x % 2 == 0, num))
print(result_filter)  # 👉 Output: [2, 4]


# 6. List Comprehension (1-Line Smart Alternative)
# পাইথনে map এবং filter এর জায়গায় এটি ব্যবহার করাই বেস্ট প্র্যাকটিস।
num_list = [1, 2, 3, 4, 5]

# (A) Map Alternative: [expression for item in list]
comp_map = [x * x for x in num_list]
print(comp_map)  # 👉 Output: [1, 4, 9, 16, 25]

# (B) Filter Alternative: [expression for item in list if condition]
comp_filter = [x for x in num_list if x % 2 == 0]
print(comp_filter)  # 👉 Output: [2, 4]



# ---------------------------------------------------------------------

# ---------------------------------------------------------------------
# FUNCTIONS, COMPREHENSION & JS ALTERNATIVES (DESTRUCTURING / REST)
# ---------------------------------------------------------------------
# Core Concepts: 
# filter(): সাধারণ ফাংশন দিয়েও করা যায়, ল্যাম্বডা (শর্ট ফাংশন) দিয়েও ১ লাইনে করা যায়।
# JS Destructuring -> Python Unpacking: [a, b] = [1, 2] এর মতো পাইথনে a, b = 1, 2 লেখা যায়।
# JS Rest Operator (...args) -> Python * Operator: বাকি সব উপাদানকে একটি লিস্টে জমা করার ট্রিক।
# ---------------------------------------------------------------------

# 1. Filter: Normal Function VS Short Function (Lambda)
num_list = [1, 2, 3, 4, 5, 6]

# (A) Filter with Normal Function (সাধারণ বড় ফাংশন দিয়ে):
def is_even(x):
    return x % 2 == 0

normal_filter = list(filter(is_even, num_list))
print(normal_filter)  # 👉 Output: [2, 4, 6]

# (B) Filter with Short Function (Lambda দিয়ে এক লাইনে):
short_filter = list(filter(lambda x: x % 2 == 0, num_list))
print(short_filter)  # 👉 Output: [2, 4, 6]


# 2. JS Array Destructuring Alternative (Python Array/Tuple Unpacking)
# JS: const [first, second] = [10, 20]
# Python-এ সরাসরি ভ্যারিয়েবল কমা দিয়ে লিখলেই আনপ্যাকিং হয়ে যায়:
coordinates = [10, 20]
x, y = coordinates
print(f"x: {x}, y: {y}")  # 👉 Output: x: 10, y: 20

# 💡 ট্রিক: ভ্যালু সোয়াপিং (JS-এ [a, b] = [b, a] করা হতো)
a, b = 1, 5
a, b = b, a
print(a, b)  # 👉 Output: 5 1


# 3. JS Object Destructuring Alternative (Python Dictionary Unpacking)
# JS: const { name, age } = user
user = {"name": "Harry", "age": 25, "city": "Dhaka"}

# পাইথনে ডিকশনারি থেকে সরাসরি ডাইনামিক আনপ্যাকিং:
name, age = user["name"], user["age"]
print(name, age)  # 👉 Output: Harry 25


# 4. JS Rest Operator (...) Alternative (Python Star `*` Unpacking)
# JS-এ প্রথম কয়েকটা উপাদান নিয়ে বাকিগুলো ...rest দিয়ে অ্যারে বানানো হতো।
# Python-এ ভ্যারিয়েবলের আগে একটা স্টার `*` বসালেই সে "বাকি সব" উপাদান গিলে নেয়।
numbers = [1, 2, 3, 4, 5]

# (A) শুরুতে Rest ব্যবহার (বাকি সব প্রথমে, শেষ উপাদান আলাদা):
*rest, last = numbers
print(rest, last)  # 👉 Output: [1, 2, 3, 4] 5

# (B) মাঝে Rest ব্যবহার (প্রথম ও শেষ উপাদান আলাদা, মাঝের সব একসাথে):
first, *middle, last = numbers
print(first, middle, last)  # 👉 Output: 1 [2, 3, 4] 5

# (C) শেষে Rest ব্যবহার (প্রথম দুটি আলাদা, বাকি সব শেষে):
num1, num2, *remaining = numbers
print(num1, num2, remaining)  # 👉 Output: 1 2 [3, 4, 5]


# 5. JS Spread Operator Alternative (Python `*` for merging lists)
# JS-এ দুটি অ্যারেকে জোড়া দিতে [...arr1, ...arr2] ব্যবহার করা হতো।
list1 = [1, 2]
list2 = [3, 4]
merged_list = [*list1, *list2]
print(merged_list)  # 👉 Output: [1, 2, 3, 4]
# ---------------------------------------------------------------------

# ============================= Short version note of note 1 & 2 ============================

# ---------------------------------------------------------------------
# PYTHON FUNCTIONS, COMPREHENSIONS & JS ALTERNATIVES - CHEAT SHEET
# ---------------------------------------------------------------------
# Core Concepts:
# *args & **kwargs: যথাক্রমে Tuple (পজিশনাল) ও Dictionary (কি-ভ্যালু) হিসেবে কাজ করে।
# lambda: এক লাইনের শর্টকাট ও নামহীন (Anonymous) ফাংশন।
# List Comprehension: map() ও filter() এর সবচেয়ে স্মার্ট পাইথনিক অল্টারনেটিভ।
# Unpacking (*): JS-এর Destructuring, Rest ও Spread অপারেটরের পাইথন বিকল্প।
# ---------------------------------------------------------------------

# === 1. BASIC FUNCTIONS & VARIABLE REFERENCE ===
def large(a, b):
    return a if a > b else b

max_func = large  # ফাংশনকে ভ্যারিয়েবলে রাখা (Function Reference)
print(max_func(2, 4))  # 👉 Output: 4


# === 2. ADVANCED ARGUMENTS (*args & **kwargs) ===
# *args (Tuple-এর মতো কাজ করে)
def sum_all(*nums):
    return sum(nums)  # nums এখানে একটি Tuple

print(sum_all(20, 30, 50))  # 👉 Output: 100

# **kwargs (Dictionary-এর মতো কাজ করে)
def student(**details):
    print(f"ID: {details['id']}, Name: {details['name']}")

student(id=101, name="Shuvo")


# === 3. LAMBDA FUNCTION (SHORT FUNCTION) ===
# syntax -> (lambda params: expression)(arguments)
cube = (lambda x: x**3)(2)
print(cube)  # 👉 Output: 8

formula = (lambda a, b: a*a + 2*a*b + b*b)(2, 2)
print(formula)  # 👉 Output: 16


# === 4. MAP & FILTER (TRADITIONAL VS LAMBDA VS COMPREHENSION) ===
nums = [1, 2, 3, 4, 5, 6]

# (A) MAP Alternative (স্কয়ার বা রূপান্তর করা)
map_lambda = list(map(lambda x: x*x, nums))          # Lambda দিয়ে
map_comp   = [x*x for x in nums]                      # List Comprehension (Best)

# (B) FILTER Alternative (জোড় সংখ্যা ছেঁকে নেওয়া)
def is_even(x): return x % 2 == 0
filter_normal = list(filter(is_even, nums))           # Normal Function দিয়ে
filter_lambda = list(filter(lambda x: x%2==0, nums))  # Lambda দিয়ে
filter_comp   = [x for x in nums if x % 2 == 0]       # List Comprehension (Best)


# === 5. JS DESTRUCTURING ALTERNATIVE (UNPACKING) ===
# Array Destructuring ([x, y] =)
x, y = [10, 20] 
print(x, y)  # 👉 Output: 10 20

# Value Swapping Trick ([a, b] = [b, a])
a, b = 1, 5
a, b = b, a  # 👉 a=5, b=1 হয়ে যাবে

# Object Destructuring ({name, age} = user)
user = {"name": "Harry", "age": 25}
name, age = user["name"], user["age"]


# === 6. JS REST OPERATOR ALTERNATIVE (STAR `*` UNPACKING) ===
numbers = [1, 2, 3, 4, 5]

# (A) শেষে Rest (...remaining)
num1, num2, *remaining = numbers
print(remaining)  # 👉 Output: [3, 4, 5]

# (B) মাঝে Rest (...middle)
first, *middle, last = numbers
print(middle)     # 👉 Output: [2, 3, 4]


# === 7. JS SPREAD OPERATOR ALTERNATIVE (LIST MERGING) ===
# JS: [...list1, ...list2]
list1 = [1, 2]
list2 = [3, 4]
merged = [*list1, [*list2]] 
print(merged)  # 👉 Output: [1, 2, 3, 4]
# ---------------------------------------------------------------------





# ------------------------------------------------------------------------------------------
#Function:

# def sum(a,b):
#     return a+b
# def sub(a,b):
#     return a+b
# def mul(a,b):
#     return a+b
# def dev(a,b):
#     return a+b
# def display(ans):
#     print("your ans is ",ans)


# display(sum(2, 2))
# display(sub(2, 5))
# display(mul(2, 5))
# display(dev(2, 9))
# ##==================

# def large(a,b):
#     if a > b:
#         return a
#     else:
#         return b
# max = large
# print(max(2,4))

#=============#xarg is working as(tuple ) for same data type oparetion=============================

# def sum (*num):
#     add=0
#     for x in num:
#         add=add+x
    
#     print(add)
    
# sum(20,30)

#========================#xxarg: working as dictionary : need keyvalue to print===================

# def student(**details):  
#     print(details["id"])
#     print(details["name"])
# student(id=101,name="Shuvo")
# student(id=102,name="Ashraful",aname="Shuvo")

#==========================lamda or closer function ===============================
# def suqar(x):
#     return x*x

# print(suqar(2))

# # lamda peramiter: expression (value,value,.....)

# cube =  (lambda x : x * x * x ) (2)
# print(cube)

# #a+b*2
# print((lambda a,b: a*a+2*a*b+b*b)(2,2))

# print((lambda x: x*x )(2))

#=======================map & filter===================================

# def square(x):
#     return x*x

# num=[1,2,3,4]

# result = list(map(square, num)) #map => (functin,list) . not use f "()" bracket
# print(result)

# #=========== filter (f(),list)======== if the condition not matchi in list that's will remove

# print(num)

# ans = list(filter(lambda x : x%2==0, num))

# print(ans)
# ==============================Comprehensive=========================================
#================alter native map () : 1 line===========
#
num=[1,2,3,4,5]

#result = [condition for x in list]
result = [x*x for x in num]
print(result)

#===================== alternative filter (): 1 line============

num=[1,2,3,4,5]

#result = [condition for x in list]
result = [x for x in num if x%2==0]
print(result)
