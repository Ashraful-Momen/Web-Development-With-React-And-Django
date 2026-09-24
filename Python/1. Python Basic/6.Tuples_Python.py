# ---------------------------------------------------------------------
# PYTHON TUPLES - QUICK CHEAT SHEET
# ---------------------------------------------------------------------
# Core Rules: Ordered, Immutable (Unchangeable), and Allows Duplicates.
# Acts like an array, so elements are accessed using index numbers.
# ---------------------------------------------------------------------

# 1. Basic Tuple Setup & Access
# Declared with () or created using the tuple() constructor.
# Example: my_tuple = ("a", 'b', 'c', 1, 32, 4, [2, 4, 5])
# type(my_tuple) -> <class 'tuple'>
# my_tuple[-1] -> returns [2, 4, 5] (Negative indexing works)

# 2. The Golden Rule for CRUD Operations
# Since tuples are immutable, you MUST convert them to a list for CRUD,
# perform the operations, and then convert them back to a tuple.
# Conversion: tuple_to_list = list(my_tuple) | list_to_tuple = tuple(my_list)

# 3. Tuple CRUD Cheat Sheet (Via List Conversion)
# Step 1: obj = ('a', 'b', 'c') -> obj = list(obj)
# - Copy:   new_list = obj.copy() | list(obj) | obj[:]
# - Add:    obj.append(1) -> Adds to the end
# - Update: obj[0] = "A" -> Changes value at a specific index
# - Delete: del obj[5] (by index) | obj.remove(2) (by value)
# Step 2: objTuple = tuple(obj) -> Converted back to immutable tuple

# 4. Looping Through a Tuple
# Using range() and len() to iterate through elements by their index.
# Example: 
# fruit = ("mango", "apple", "banana", "lici")
# for i in range(0, len(fruit)):
#     print(fruit[i])

# 5. Joining/Concatenating Tuples
# Merging multiple sequences into one using the + operator.
# Example: even = (2, 4, 6, 8) | odd = (1, 3, 5, 7)
# number = even + odd -> (2, 4, 6, 8, 1, 3, 5, 7)

# 6. Memory Size Check
# Using the 'sys' module to find the exact memory footprint in bytes.
# Code: import sys
# sys.getsizeof(number) -> returns memory size in bytes

# ---------------------------------------------------------------------
# 7. TUPLE UNPACKING WITH THE * OPERATOR (স্টার অপারেটর দিয়ে আনপ্যাকিং)
# ---------------------------------------------------------------------
# What it does: 
# It unpacks a tuple into variables. The '*' operator grabs all the 
# leftover elements in the middle and packs them into a clean LIST.
# ---------------------------------------------------------------------

# --- EASY EXAMPLE & OUTPUT ---

# Let's say we have a tuple of numbers:
number = (10, 20, 30, 40, 50, 60)

# Unpacking into variables:
first, *middle, last = number

# --- HOW IT WORKS & WHAT IT OUTPUTS ---

print(first)  
# 👉 Output: 10
# (Grabs the very FIRST element of the tuple)

print(last)   
# 👉 Output: 60
# (Grabs the very LAST element of the tuple)

print(middle) 
# 👉 Output: [20, 30, 40, 50]
# (Notice the square brackets! All leftover middle elements become a LIST)

# ---------------------------------------------------------------------







# ================================ My Note =========================

#Tuples: ordered , immutable/ unchangeble, duplicate allow . 
#tuple = tuple( ) , to convert tuple  use tuple() , and to convert list => list( )
#tuple = also kinds of array , so that we can access element by index number .

#**** for CRUD oparetion of tuple must be convert to list for Crud then again convert to tuple.


# -------------------------------Tuple------------------------------------------

# tuple = ("a",'b','c',1,32,4,[2,4,5])

# print(type(tuple))
# print(tuple)
# print(tuple[-1])


# -------------------------------Tuple CRUD------------------------------------------

# copy => list.copy(), list(listName), list[:], 
# add => list.append() , list.insert(), list.[index] = value...
# update => insert(index, "value"), append()
# delete => del list[index] , list.remove('element')


#create => 

# obj = ('a','b','c')
# obj = list(obj)
# print(obj)

# #add=>
# obj.append(1)
# obj.append(2)
# obj.append(3)
# print(obj)

# #update => 

# obj[0] = "A"
# print(obj)

# #delete =>

# del obj[5]
# obj.remove(2)
# print(obj)

# objTuple = tuple(obj)
# print(type(objTuple))
# print(objTuple)
# ----------------------Loop on tuple--------------------------------------------------

# furit = ("mango", "apple" , "banana" , "lici")

# for i in range(0,len(furit)):
#     print(furit[i])

# ----------------------Join on tuple--------------------------------------------------

even = [2,4,6,8]
odd = [1,3,5,7]

number = even + odd  
print(number)
# ------------------------------check the size and convert tuple to list according to index.-----------------------------------------
import sys 

print(sys.getsizeof(number),"byte") # 

i1,*i2,i3 = number

print(i1) #first element of number tupele that convert to list , index 1
print(i3) # element to 3rd 
print(i2) # 1st element to 3rd element *2 = 6 element , that convert to list....



