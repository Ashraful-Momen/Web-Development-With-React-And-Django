# ---------------------------------------------------------------------
# PART 2: CONTROL STATEMENTS & NESTED CONDITIONS
# ---------------------------------------------------------------------

delivery_area = ['dhaka', 'mirpur', 'kafrul', 'kazipara']
user_location = 'dhaka'
price = 800

# Membership check ('in') combined with Nested if-else blocks
if user_location in delivery_area:
    if price >= 800:
        print('Delivery Available and shipping charge free')
    else:
        print('Delivery charge not free')

# NOTE ON CONDITIONAL VARIABLE INITIALIZATION:
# If you create a variable inside a conditional block (e.g., if num == 100: y = 10), 
# make sure the condition executes! If it evaluates to False, the variable 'y' 
# is never created, throwing a 'NameError: name y is not defined' when called.


# ---------------------------------------------------------------------
# PART 3: TERNARY OPERATOR (Conditional Expressions)
# ---------------------------------------------------------------------
# Syntax: [value_if_true] if [condition] else [value_if_false]

a, b = 10, 10
result = a if a > 7 else b  # One-liner shortcut for clean, readable code
print(result)               # Output: 10


# ---------------------------------------------------------------------
# PART 4: ASSERT STATEMENTS (Debugging Tool)
# ---------------------------------------------------------------------
# Syntax: assert [condition], [ErrorMessage_if_False]

number = int(input("Enter any Number: "))

# Checks if condition is True. If False, program crashes safely with AssertionError.
assert number >= 0, "Number should be a positive integer"
print(number)



# --------------------------------------My Note : Control Statement--------------------------------------------------------------------
# delivery_area= ['dhaka','mirpur','kafrul','kazipara']
# user_location = 'dhaka'
# price = 800


# if user_location in delivery_area:
#     if price>= 800:
#         print('Delivery Available and shipping charge free')
    
#     else:
#         print('Delivery charge not free')
 

# -----------------------------------------------------------------------------------------------------------
# num = 100
# if num ==100 : y=10 # if num != 100 , NameError: name 'y' is not defined
# if num ==10:
#     y=20
# print(y)
# -----------------------------Trinary Operator---------------------------------
a,b=10,10
print(a if a>7 else b)
# -----------------------------------------------------------------------------------------------------------


# number = int(input("Enter any Number:"))

# assert  number>=0 , "Number should be an integer"
# print(number)
