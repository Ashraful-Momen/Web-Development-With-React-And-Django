# =====================================================================
#                 PYTHON CONTROL STATEMENTS MASTER NOTE
# =====================================================================

# ---------------------------------------------------------------------
# 1. THE IF-ELIF-ELSE CHAIN (Sequential Evaluation)
# ---------------------------------------------------------------------
# Use 'elif' (else if) to check multiple conditions sequentially. 
# Python stops executing the chain as soon as ONE condition matches (True).

marks = 85

if marks >= 80:
    print("Grade: A+")
elif marks >= 70:          # Checked only if the first condition is False
    print("Grade: A")
elif marks >= 60:          # Checked only if previous conditions are False
    print("Grade: B")
else:                      # Executes only if ALL conditions above are False
    print("Grade: F")


# ---------------------------------------------------------------------
# 2. NESTED CONDITIONS & MEMBERSHIP OPERATIONS
# ---------------------------------------------------------------------
# An 'if' block inside another 'if' block. Used for multi-layered logic.

delivery_area = ['dhaka', 'mirpur', 'kafrul', 'kazipara']
user_location = 'dhaka'
price = 800

# Outer 'if' uses the 'in' operator to check membership inside the list
if user_location in delivery_area:
    # Inner 'if' runs only if the outer 'if' condition is passed
    if price >= 800:
        print('Delivery Available and shipping charge free')
    else:
        print('Delivery charge not free')
else:
    print('Delivery not available in your area')


# ---------------------------------------------------------------------
# 3. CRITICAL TRAP: CONDITIONAL VARIABLE SCOPE
# ---------------------------------------------------------------------
# Python variables created inside 'if' blocks are only defined if that block runs.

num = 100

if num == 100: 
    y = 10                  # 'y' is safely created because num == 100 is True

if num == 10:
    z = 20                  # 'z' is NEVER created because num == 10 is False

print(y)                    # Works perfectly (Output: 10)
# print(z)                  # CRASHES! Throws -> NameError: name 'z' is not defined


# ---------------------------------------------------------------------
# 4. TERNARY OPERATOR (Conditional Expression Shortcut)
# ---------------------------------------------------------------------
# Syntax: [value_if_true] if [condition] else [value_if_false]
# Great for assigning values to variables in a single line.

a, b = 10, 10
max_val = a if a > 7 else b  # Reads as: give me 'a' if a > 7, otherwise give me 'b'
print(max_val)               # Output: 10


# ---------------------------------------------------------------------
# 5. ASSERT STATEMENTS (Guaranteed Truth Control)
# ---------------------------------------------------------------------
# Syntax: assert [condition], [ErrorMessage_if_False]
# Used for debugging. It forces the program to halt if a core rule is broken.

number = int(input("Enter any Number: "))

# If number < 0, the program stops immediately with your custom error message
assert number >= 0, "AssertionError: Number must be zero or a positive integer"
print(f"Validated Input: {number}")

# =====================================================================








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
