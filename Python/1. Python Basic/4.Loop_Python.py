# =====================================================================
#                      PYTHON LOOPS MASTER CHEAT SHEET
# =====================================================================

# ---------------------------------------------------------------------
# 1. FOR LOOP (Iterating Over Collections)
# ---------------------------------------------------------------------
# Syntax: for <variable> in <iterable>:
# An 'iterable' is any collection of objects (List, Tuple, String, Range).

fruits = ['mango', 'banana', 'jackfruit']
for x in fruits:
    print(x)  # Accesses each item one by one sequentially


# ---------------------------------------------------------------------
# 2. LOOP CONTROL: BREAK VS. CONTINUE
# ---------------------------------------------------------------------
# continue -> Skips the rest of the current iteration and jumps to the next cycle.
# break    -> Terminates the loop entirely and exits immediately.

for x in range(1, 30):
    if 10 < x < 20:
        continue     # Skips printing numbers 11 through 19
    elif x % 2 == 0:
        print("Even Number ", x)
    elif x == 25:
        break        # Exits the loop permanently when x hits 25
    print(x)

print("Loop break")


# ---------------------------------------------------------------------
# 3. REAL-WORLD APPLICATION: BUDGET TRACKING TASK
# ---------------------------------------------------------------------
# Tracks inventory capacity by evaluating accumulated costs against a limit.

total_price = [10, 20, 30, 500, 600]
total_budget = 1000
total_item = 0

for current_price in total_price:
    total_budget -= current_price     # Deducts price from remaining budget
    if total_budget < 0: 
        break                         # Halts immediately if wallet empties
    total_item += 1                   # Increments items successfully bought

print(f"Total items purchased: {total_item}")


# ---------------------------------------------------------------------
# 4. WHILE LOOP (Condition-Driven Iteration)
# ---------------------------------------------------------------------
# Runs indefinitely *as long as* the test expression remains True.

i = 1
while i < 100:
    if i % 2 == 0:
        print(i)
    i += 1  # CRITICAL: Always increment to prevent infinite loop traps!

print("Loop break")


# ---------------------------------------------------------------------
# 5. WHILE LOOP WITH CONTROL FLOW (Break & Continue)
# ---------------------------------------------------------------------
# CRITICAL NOTE: When using 'continue' in a while loop, make sure to 
# increment the counter *before* the continue statement to avoid infinite loops.

i = 0 
while i < 100:
    if 18 < i < 20:
        i += 1       # Counter safely advanced before skip
        continue 
    elif i == 60:
        break        # Hard exit at 60
    print(i)  
    i += 1
    
print("Loop break")


# ---------------------------------------------------------------------
# 6. LIST COMPREHENSION (Pythonic One-Liners)
# ---------------------------------------------------------------------
# Syntax: [expression for item in iterable if condition]
# A compact way to build new lists from existing iterables.

# Standard Loop approach:
my_list = []
for x in range(1, 101):
    my_list.append(x)

# Alternative 1: Basic List Comprehension
another_list = [i for i in range(1, 101)]

# Alternative 2: Conditional List Comprehension (Even numbers only)
even_list = [x for x in range(1, 101) if x % 2 == 0]

# Alternative 3: Processing an existing list variable (Odd numbers only)
base_list = list(range(1, 101))
odd_list = [x for x in base_list if x % 2 != 0]


# ---------------------------------------------------------------------
# 7. NESTED LOOPS (Inner & Outer Iteration)
# ---------------------------------------------------------------------
# The inner loop completes ALL its cycles for every SINGLE step of the outer loop.
# Example: 10x10 Grid Multiplication Table Matrix

for i in range(1, 11):        # Outer loop controls rows
    for j in range(1, 11):    # Inner loop controls columns
        print(f'{i} X {j} = {i * j}')
    print("------------------------------------") # Marks end of row

# =====================================================================















---------------------------------------------------- My Notes ---------------------------------------------------------------


# --------------------------------------------for Loop: List , tuple, string---------------------------------------------------------------
# for <var> in <iterable>:
#     <body>

# iterable is a collection of object.

# -----------------------------------------------------------------------------------------------------------
# fruit = ['mango','banana','jackfruit']

# for x in fruit:
#     print(x)
# -----------------------------------break and continue------------------------------------------------------------------------


# for x in range(1,30):
#     if x>10 and x<20:
#         continue #skip 11-19
        
#     elif  x%2==0:
#         print("Even Number ",x)
    
#     elif x==25:
#         break # loop break here .
#     print(x)
    
    
    
# print("Loop break")
# ---------------------------------how many product can able to purchase according to total budget--------------------------------------------------------------------------

# total_price = [10,20,30,500,600]
# total_budget = 1000
# total_item = 0

# for current_price in total_price:
    
#     total_budget = total_budget - current_price
#     if total_budget <0: break
#     total_item+=1
    
# print(total_item)

# ----------------------------------------While loop -------------------------------------------------------------------
# i = 1
# while i<100:
#     if (i%2==0):
#         print(i)
#     i+=1
# print("Loop break")
# -------------------------------------------whileLoop : break and continue----------------------------------------------------------------
i = 0 

# while i<100:
    
#     if i>18 and i<20:
#         i+=1
#         continue 
#     elif i==60:break
#     print(i)  
#     i+=1
    
    
# print("Loop break")




# --------------------------------------List comprehension---------------------------------------------------------------------
# my_list = []

# for x in range(1,101):
#     my_list.append(x)
# print(my_list)

# print("---------------list comprehension-----------------------")
# # [things for things in List_of_things]

# another_list=[i for i in range(1,101)]
# print(another_list)

# ---------------------------------------even number list----------------------------------------------------

# even_list = [x for x in range(1,101) if x%2==0]
# print(even_list)

# ---------------------------------------odd number list----------------------------------------------------
# my_list=list(range(1,101))

# odd_list = [x for x in my_list if x%2!=0]
# print(odd_list)
# ------------------------------------------Inner and Outer Loop-----------------------------------------------------------------

'''Outer_loop_Expression:
    outer_loop_statement
    inner_loop_expression:
        inner_loop_statement
    outer_loop_statement
'''
# ------------------------------------------Multiplication Table-----------------------------------------------------------------
for i in range(1,11):
    for j in range(1,11):
        print(f'{i} X {j} = {i*j}')
    print("------------------------------------")
# -----------------------------------------------------------------------------------------------------------
